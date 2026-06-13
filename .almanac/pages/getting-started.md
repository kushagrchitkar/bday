---
title: Getting Started
summary: Start here to navigate the Custom Connections static artifact wiki by artifact shape, game behavior, data contracts, and external services.
topics: [navigation]
sources:
  - id: wiki-build
    type: note
    note: Synthesizes the initial Almanac build pass over the local filesystem on 2026-06-13.
status: active
verified: 2026-06-13
---

This wiki explains a static Custom Connections web artifact. Start with [[static-artifact]] to understand the most important boundary: the repository is a deployed Next.js client artifact, not the original source tree. That page explains why future work has to treat compiled bundles, CSS, and `index.html` as current evidence.

For routing and hosting work, read [[next-app-router-export]] next. It covers the preserved dynamic `[slug]` route, the inline Next flight payload, hydration, and the mismatch between flattened local `js/` and `css/` paths and embedded `_next/static` references.

For game behavior, read [[connections-game]] and then [[connections-game-data]]. The first page traces the board state machine, submissions, mistakes, auto-reveal behavior, and share modal. The second page records the Firestore document shape and the important `level` invariants that connect category data to colors, validation, emoji recap, and reveal ordering.

For external dependencies, read [[firestore-custom-connections]] and [[analytics-and-ads]]. Firestore is the live data dependency for game documents. PostHog and AdSense are layout-level browser integrations.

For visual or post-build edits, read [[styling-and-assets]] and [[custom-js-overlay]]. The CSS owns most of the app's visual system and includes creator-flow remnants. `custom.js` is a local DOM mutation outside the compiled Next app, so it has different risks than bundle changes.

Read [[restoration-gaps]] before planning larger development work. It records what this checkout cannot prove: original dependencies, tests, source maps, Firestore rules, deployment config, and the missing creator route.
