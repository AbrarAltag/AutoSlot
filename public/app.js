import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  initializeFirestore,
  connectFirestoreEmulator,
  persistentLocalCache,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { firebaseConfig, useEmulators } from "./firebase-config.js";

const statusEl = document.querySelector("#status");
const form = document.querySelector("#slot-form");
const titleInput = document.querySelector("#title");
const whenInput = document.querySelector("#when");
const list = document.querySelector("#slots");
const empty = document.querySelector("#empty");
const installButton = document.querySelector("#install");

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
});

if (useEmulators) {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}

const slotsQuery = query(collection(db, "slots"), orderBy("createdAt", "desc"));

function setStatus(message) {
  statusEl.textContent = message;
}

function formatWhen(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

onSnapshot(
  slotsQuery,
  (snapshot) => {
    list.replaceChildren();
    empty.hidden = snapshot.size > 0;
    snapshot.forEach((item) => {
      const data = item.data();
      const li = document.createElement("li");
      const text = document.createElement("div");
      const heading = document.createElement("h2");
      const when = document.createElement("p");
      const remove = document.createElement("button");

      heading.textContent = data.title;
      when.textContent = formatWhen(data.when);
      remove.type = "button";
      remove.className = "remove";
      remove.textContent = "Remove";
      remove.addEventListener("click", async () => {
        remove.disabled = true;
        try {
          await deleteDoc(doc(db, "slots", item.id));
        } catch (error) {
          remove.disabled = false;
          setStatus(error.message);
        }
      });

      text.append(heading, when);
      li.append(text, remove);
      list.append(li);
    });

    if (snapshot.metadata.hasPendingWrites) {
      setStatus("Saved on this device — waiting to sync");
    } else if (snapshot.metadata.fromCache) {
      setStatus(navigator.onLine ? "Waiting for Firestore…" : "Offline — showing saved slots");
    } else {
      setStatus("Live");
    }
  },
  (error) => {
    setStatus(error.message);
  }
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const when = whenInput.value;
  form.reset();
  titleInput.focus();

  addDoc(collection(db, "slots"), {
    title,
    when,
    createdAt: serverTimestamp(),
  }).catch((error) => {
    setStatus(error.message);
  });
});

window.addEventListener("online", () => setStatus("Live"));
window.addEventListener("offline", () => setStatus("Offline — showing saved slots"));

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch((error) => {
    setStatus(error.message);
  });
}

let deferredPrompt = null;
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installButton.hidden = true;
});
