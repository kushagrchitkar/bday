---
title: Static Artifact
summary: This checkout is a static Next.js client artifact for Custom Connections, not the original editable source tree.
topics: [static-artifact, frontend, deployment]
sources:
  - id: file-list
    type: file
    path: index.html
    note: Shows the static HTML entry point and referenced bundled assets.
  - id: app-route-bundle
    type: file
    path: js/page-6a71c8d0f71e02fc.js
    note: Contains the compiled route component and embedded Firestore access layer.
  - id: layout-bundle
    type: file
    path: js/layout-e208247ebdc3bde7.js
    note: Contains the compiled layout-level analytics provider.
  - id: styles
    type: file
    path: css/b37c4cccb2fd38fb.css
    note: Contains the application-specific styling for both game and creator UI classes.
status: active
verified: 2026-06-13
---

This repository is a deployed/static web artifact for Custom Connections. It has `index.html`, hashed JavaScript chunks under [[js/]], CSS under [[css/]], fonts under [[fonts/]], and one SVG close icon under [[images/]]. It does not include the original TypeScript/React source, `package.json`, build config, source maps, tests, or server code. Future work should treat compiled bundles as the current truth unless a source repository is recovered.

`index.html` is the only HTML entry point. It preloads and loads Next.js chunk files, embeds a React Server Components flight payload, and ends by loading a non-hashed local script named `custom.js` [@file-list]. The initial rendered body is only `.App > .page-wrapper > Loading...`; meaningful UI appears after the bundled client code hydrates and reads data from Firestore [@file-list].

## Runtime Shape

The artifact was produced from a Next.js App Router application. The inline payload records an `initialTree` with a dynamic `slug` segment and the canonical URL `/O8QRGpKHO6lpeNg9G1Kt` [@file-list]. The same payload references the compiled route module as `static/chunks/app/%5Bslug%5D/page-6a71c8d0f71e02fc.js`, which means the preserved page is the dynamic game route rather than the homepage creator route [@file-list].

The static checkout rewrites some `_next/static/...` references in HTML to local `js/` and `css/` paths, but the embedded Next.js runtime still uses `/_next/` as its public chunk path [@file-list]. That matters when serving the artifact from arbitrary static hosting: assets already listed in `index.html` can load from local paths, but any lazy chunk request made through the Next webpack runtime expects the original `_next` URL structure unless the host rewrites it.

## Missing Source Boundary

The CSS includes creator-form classes such as `.category-form-wrapper`, `.category-items-wrapper`, `.order-buttons`, and `.game-link`, and the Firestore module exports functions for adding and writing games [@styles] [@app-route-bundle]. The JavaScript route preserved in this checkout only contains the game-playing route, error state, Firestore converter, and share/results logic [@app-route-bundle]. The homepage creator UI is therefore implied by bundled styles and exported data helpers, not present as an inspectable route page in this filesystem snapshot.

## Related Pages

Read [[next-app-router-export]] for the routing and hydration details, [[connections-game]] for the client game state machine, [[connections-game-data]] for the Firestore document contract, and [[custom-js-overlay]] before changing the uncompiled local script.
