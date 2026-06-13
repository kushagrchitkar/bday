---
title: Firestore Custom Connections
summary: The client bundle embeds Firebase configuration for the custom-connections-77f94 project and reads games from its connections collection.
topics: [firestore, external-service, data-model]
sources:
  - id: route
    type: file
    path: js/page-6a71c8d0f71e02fc.js
    note: Shows Firebase initialization, Firestore collection name, and document access helpers.
  - id: firebase-runtime
    type: file
    path: js/bc9e92e6-3a0e930218c0fbd4.js
    note: Contains the bundled Firebase Firestore runtime used by the route helper.
status: active
verified: 2026-06-13
external_version: "Firebase Firestore runtime reports 10.7.0 in bundle"
---

The app is client-only for game data. It initializes Firebase in the browser and uses Firestore to read and write documents in the `connections` collection [@route]. There is no server-side API layer in this checkout.

## Embedded Project Configuration

The route bundle initializes Firebase with:

- `authDomain`: `custom-connections-77f94.firebaseapp.com` [@route].
- `projectId`: `custom-connections-77f94` [@route].
- `storageBucket`: `custom-connections-77f94.appspot.com` [@route].
- `messagingSenderId`: `945333365190` [@route].
- `appId`: `1:945333365190:web:1f1d9c778e59e8b2ccaac7` [@route].
- `measurementId`: `G-1ZCXY945VC` [@route].

The API key is also embedded in the client bundle [@route]. Treat it as public Firebase client configuration, not as proof of privileged access. The real security boundary is the Firebase project's Firestore rules, which are not included in this repository.

## Collection Contract

All preserved helper functions target `connections` [@route]. The dynamic route resolves `connections/{slug}`; the share URL includes the same slug path; and missing documents render a user-facing error with a link back to `/` [@route].

The converter strips writes down to `categories`, `title`, and optional `author` fields, and reconstructs optional `author.link` only when present [@route]. This converter is the strongest local evidence for the expected persisted schema.

## Runtime Dependency

The Firestore runtime is bundled into `js/bc9e92e6-3a0e930218c0fbd4.js`. That bundle includes Firestore client code and reports the Firestore package version as `10.7.0` inside the compiled runtime [@firebase-runtime]. Future agents changing Firestore behavior from this artifact alone have no package manager metadata to rely on; inspect the bundle or recover the source repository before making dependency-level assumptions.

## Related Pages

Read [[connections-game-data]] for document shape and [[next-app-router-export]] for the route-level slug lookup.
