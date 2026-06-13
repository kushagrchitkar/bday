---
title: Restoration Gaps
summary: The checkout is usable for reading the deployed game artifact but lacks the source, tests, source maps, and creator route needed for normal development.
topics: [static-artifact, risk, operations]
sources:
  - id: file-list
    type: file
    path: index.html
    note: Shows the exported HTML and route payload rather than source files.
  - id: route
    type: file
    path: js/page-6a71c8d0f71e02fc.js
    note: Shows compiled game-route logic and Firestore helpers.
  - id: styles
    type: file
    path: css/b37c4cccb2fd38fb.css
    note: Shows classes for creator UI that are not backed by a preserved route component.
  - id: custom
    type: file
    path: js/custom.js
    note: Shows the local post-build DOM modification.
status: active
verified: 2026-06-13
---

This repository is enough to understand and patch parts of the deployed game page, but it is not enough for normal application development. It lacks original source files, package metadata, tests, source maps, Firestore rules, deployment configuration, and the creator route implementation.

## What Can Be Changed Locally

Small static changes are practical:

- Edit `index.html` metadata or script tags [@file-list].
- Patch `js/custom.js`, which is plain source and not minified [@custom].
- Adjust CSS selectors, fonts, dimensions, colors, or static asset references [@styles].
- Patch compiled JavaScript for emergency behavior fixes, with the usual risk that minified variable names and React bundle structure make regressions hard to reason about [@route].

## What Is Missing

The creator flow is the largest semantic gap. CSS contains creator form classes and Firestore exposes add/write helpers, but the preserved route is the dynamic game page [@styles] [@route]. Future agents should not claim how game creation validates input, generates slugs, handles duplicate documents, or enforces author links unless source, tests, Firestore rules, or a live-system investigation is added as evidence.

Dependency management is also missing. The bundles expose some runtime identities, such as Firestore client code and React runtime code, but there is no `package.json` or lockfile to support ordinary upgrades [@route]. Reconstructing a source app from this artifact would be a separate restoration project, not a routine wiki or patch task.

## Operational Risks

The flattened local asset layout differs from embedded `_next/static` references [@file-list]. `index.html` also loads `custom.js` from the root path while the file in this checkout lives at `js/custom.js` [@file-list] [@custom]. A future deploy should verify actual hosted paths instead of assuming this filesystem layout exactly matches production.

Firestore access depends on external Firebase project configuration and rules that are not present here [@route]. The client can read a game only when `connections/{slug}` exists and is readable; missing or inaccessible documents render the same local error path [@route].

## Related Pages

Read [[static-artifact]] for the repository boundary, [[custom-js-overlay]] for the local mutable script, and [[firestore-custom-connections]] for the external data dependency.
