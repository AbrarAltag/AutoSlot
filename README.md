# AutoSlot

A minimal progressive web app. Firebase Hosting serves the app, and Cloud Firestore stores the slot list.

The page is installable (web app manifest and service worker), caches its shell for offline launch, and keeps a local Firestore cache so previously loaded slots still show without a network.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- A Firebase project only if you deploy. Local development uses the Firebase emulators and the `demo-autoslot` project id, so no Firebase account is required to try it.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5000](http://localhost:5000). The emulator UI is at [http://localhost:4000](http://localhost:4000).

`npm run dev` starts the Hosting and Firestore emulators. On localhost the app talks to Firestore on port 8080. Add a slot, remove it, and refresh to confirm it is stored.

## Deploy

1. Create a Firebase project and a web app in the [Firebase console](https://console.firebase.google.com/).
2. Enable Cloud Firestore.
3. Replace the placeholder in `.firebaserc` with your project id.
4. Replace `public/firebase-config.js` with the web app config from Project settings. Set `projectId` to the same id as `.firebaserc`. Leave `useEmulators` as it is: production hostnames do not use the emulator.
5. Deploy:

```bash
npx firebase login
npm run deploy
```

Hosting prints the live URL when the deploy finishes.

## Security

The checked-in Firestore rules allow anyone to read, create, and delete slots. That matches this demo. Before sharing a deployed app, add Firebase Authentication and restrict `slots` to signed-in users.

The client config is not a secret. Firestore rules are what protect the data.
