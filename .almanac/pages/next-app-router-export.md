---
title: Next App Router Export
summary: The artifact preserves a Next.js App Router dynamic slug page whose local paths and embedded public paths are not fully the same.
topics: [static-artifact, frontend, routing]
sources:
  - id: html
    type: file
    path: index.html
    note: Shows loaded chunks, embedded flight payload, route tree, metadata, and Google Ads script.
  - id: webpack-runtime
    type: file
    path: js/webpack-e21b8886593568d1.js
    note: Shows the Next webpack runtime public path used for late chunk loading.
  - id: main-app
    type: file
    path: js/main-app-892c3dff08e9cd4c.js
    note: Shows the client bootstrap chunk for the App Router runtime.
  - id: route
    type: file
    path: js/page-6a71c8d0f71e02fc.js
    note: Shows the compiled dynamic route component loaded by the flight payload.
status: active
verified: 2026-06-13
---

The static export is centered on a Next.js App Router dynamic route. `index.html` loads app runtime chunks, layout chunks, the `[slug]` route chunk, and an inline flight payload whose `initialCanonicalUrl` is `/O8QRGpKHO6lpeNg9G1Kt` [@html]. The route component receives `params.slug` and uses it as the Firestore document id for the game [@route].

## Hydration Contract

The initial HTML shell is intentionally thin. The body contains a loading placeholder, and the inline flight payload names the layout provider, no-SSR boundary, route module, `params.slug`, and CSS files [@html]. The route component then performs a client-side `useEffect` fetch through the Firestore helper and swaps loading for either the game UI or an error page [@route].

This means a future agent should not expect meaningful game data in `index.html`. The game title, categories, author, and all board state are client-resolved after hydration from the `connections/{slug}` Firestore document [@route].

## Path Coupling

The checked-in HTML references local files such as `js/page-6a71c8d0f71e02fc.js` and `css/b37c4cccb2fd38fb.css`, but the embedded flight payload still points at `/_next/static/...` paths and the webpack runtime sets its public path to `/_next/` [@html] [@webpack-runtime]. Serving only the checked-in flat `js/` and `css/` directories is enough for the chunks explicitly loaded by `index.html`; it is not a faithful reconstruction of the original `_next/static` deployment layout.

If future work adds routes, lazy components, or code-splitting behavior, preserve or restore the `_next/static` path structure instead of assuming the current flattened path convention is complete.

## Metadata

The static head sets the page title to `Custom Connections` and the description to "Create your own custom version of the NYT Connections game." [@html]. After a game document loads, the route component mutates `document.title` to `Connections: {game title}` [@route].

## Related Pages

Read [[static-artifact]] first for the repository boundary and [[connections-game-data]] for the slug-to-Firestore contract.
