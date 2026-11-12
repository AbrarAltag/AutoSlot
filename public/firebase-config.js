// Replace these values with your Firebase web app config before deploying.
// Project IDs that start with "demo-" work with the local emulators and do not
// need a real Firebase project. They will not work against production.
export const firebaseConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo-autoslot.firebaseapp.com",
  projectId: "demo-autoslot",
  storageBucket: "demo-autoslot.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:demo",
};

export const useEmulators =
  location.hostname === "localhost" || location.hostname === "127.0.0.1";
