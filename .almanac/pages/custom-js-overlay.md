---
title: Custom JS Overlay
summary: custom.js is an uncompiled local DOM mutation that inserts a textbox before the hydrated app content.
topics: [frontend, static-artifact, local-modification]
sources:
  - id: custom
    type: file
    path: js/custom.js
    note: Contains the local DOM injection script.
  - id: html
    type: file
    path: index.html
    note: Shows custom.js loaded after the Next.js chunks and inline payload.
  - id: route
    type: file
    path: js/page-6a71c8d0f71e02fc.js
    note: Shows the compiled React route that also owns the .App subtree.
status: active
verified: 2026-06-13
---

`js/custom.js` is not part of the hashed Next.js bundle. It is a local immediately-invoked script loaded at the end of `index.html` after the Next chunks and inline payload [@html]. Its only behavior is to insert an `<input id="custom-textbox">` as the first child of `.App` [@custom].

## Behavior

The script waits for `DOMContentLoaded` when the document is still loading, otherwise it runs immediately [@custom]. It queries `.App`; if `.App` exists and `#custom-textbox` is not already present, it creates a text input with placeholder `Enter text here`, inline layout styles, and inserts it before `.App`'s current first child [@custom]. If `.App` is not found, it retries every 100ms [@custom].

The script is idempotent by DOM id, not by React state [@custom]. It mutates inside the same `.App` container that the compiled React route renders into [@route]. React can replace the app subtree during hydration or route rendering, so future changes should verify whether the textbox persists after client rendering, especially on slow network or hydration timing changes.

## Project Meaning

This file is the only editable-looking customization in the checkout. Because it is loaded as `custom.js` rather than `js/custom.js` in the final script tag, the current `index.html` expects a root-level `custom.js` path even though the repository file is under `js/custom.js` [@html] [@custom]. The earlier chunk scripts use `js/...` paths, so this path mismatch is a deployment concern if the artifact is served exactly as checked in.

## Related Pages

Read [[static-artifact]] for why this file sits outside the compiled app and [[next-app-router-export]] for the hydration boundary it mutates.
