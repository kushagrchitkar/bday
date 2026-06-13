---
title: Connections Game Data
summary: Game documents live in Firestore's connections collection and carry title, categories, and optional author fields used directly by the client.
topics: [data-model, firestore, game-flow]
sources:
  - id: route
    type: file
    path: js/page-6a71c8d0f71e02fc.js
    note: Contains the Firestore helpers, converter, route slug lookup, and game rendering assumptions.
  - id: styles
    type: file
    path: css/b37c4cccb2fd38fb.css
    note: Shows the four-level color classes expected by category levels.
status: active
verified: 2026-06-13
---

`connections` is the central persisted data model in this artifact. The dynamic route uses the URL slug as a Firestore document id, reads `connections/{slug}`, converts it into a game object, and passes that object directly into the board component [@route].

## Document Shape

The converter writes and reads this shape:

- `title`: game title string [@route].
- `categories`: array of category objects [@route].
- `author`: optional object with `name` and optional `link` [@route].

Each category must provide `title`, `level`, and `members` for the current route to render and play correctly. `members` is iterated to create the 16 playable tiles, `title` appears in completed rows, and `level` drives validation, color, emoji recap, and loss auto-reveal [@route].

## Level Invariants

The client assumes four levels. Color and emoji arrays are ordered as level 0 yellow, level 1 green, level 2 blue, and level 3 purple [@route]. CSS defines `.level-0` through `.level-3` completed row colors and matching emoji color classes [@styles].

`level` is also used as an index into `gameData.categories` during correct submissions and auto-reveal [@route]. A future writer should keep category `level` values aligned with their array positions or change the reveal/submission code to look up categories by level instead of by array index.

The board code does not validate that there are exactly four categories, that each category has exactly four members, that titles are unique, or that levels are contiguous. Those constraints are product-level contracts enforced by the missing creator route or Firestore rules if they exist outside this checkout.

## Helper Functions

The compiled Firestore module exports three helpers:

- `s2` adds a document to the `connections` collection and returns the result or captured error [@route].
- `Bi` writes a supplied object to `connections/{id}` [@route].
- `yO` reads `connections/{id}` with the converter and returns `{ result, error }`, where a missing document becomes `{ result: null, error: "Error." }` [@route].

Only `yO` is used by the preserved `[slug]` page [@route]. The write helpers are durable evidence that the original app had a creation or publishing surface even though that route source is not present in this checkout.

## Related Pages

Read [[firestore-custom-connections]] for Firebase project details, [[connections-game]] for the runtime consequences of this data shape, and [[static-artifact]] for the missing-source boundary.
