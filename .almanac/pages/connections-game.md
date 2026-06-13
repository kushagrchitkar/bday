---
title: Connections Game
summary: The compiled route implements the playable Custom Connections board, selection rules, mistakes, reveal behavior, and share modal.
topics: [frontend, game-flow, concepts]
sources:
  - id: route
    type: file
    path: js/page-6a71c8d0f71e02fc.js
    note: Contains the compiled React components and game state machine.
  - id: styles
    type: file
    path: css/b37c4cccb2fd38fb.css
    note: Defines board, tile, completed-row, mistake, modal, and responsive styles.
status: active
verified: 2026-06-13
---

The preserved app route is a playable Custom Connections board. It renders a 4-by-4 word grid, lets the player select up to four items, submits selected groups, tracks mistakes, reveals completed categories, and opens a results modal that can share an emoji recap [@route].

## Game State

The compiled game component stores these state concepts in React:

- Remaining board items, derived by flattening `gameData.categories[*].members` and assigning each item the category `level`, display `title`, selection flag, and generated numeric id [@route].
- Completed categories, displayed above the remaining grid as colored rows [@route].
- Submission history, stored as arrays of selected item objects and later rendered as the emoji recap [@route].
- Selected count, mistakes remaining, terminal state, submission lock, toast text, popup visibility, and an internal auto-reveal index [@route].

The board is shuffled with an in-place Fisher-Yates implementation both when the game initializes and when the user presses `Shuffle` [@route]. Selection is capped at four items by ignoring additional unselected tiles when four are already selected, while allowing selected tiles to be deselected [@route].

## Submission Flow

`Submit` is disabled unless exactly four items are selected [@route]. On submit, the component counts selected tiles by category level. If every selected tile has the same level, the corresponding category is appended to completed categories, the selected tiles are removed from the board, selected count resets, and the submission lock is cleared [@route].

If the selected tiles span multiple levels, the selected tiles receive the `mistake` flag, the history still records that selected set, and the component shows `One away!` when any level has exactly three selected items [@route]. After one second it clears mistake flags, decrements mistakes remaining, clears the toast, and unlocks submission [@route].

The mistake counter starts at 4 [@route]. When a wrong submission happens with one or fewer mistakes remaining, the component enters the loss state and calls the auto-reveal path before decrementing the visible counter [@route].

## Completion And Reveal

When completed categories reach four, the component marks the game as won unless it was already in the loss state, then opens the result popup after one second [@route]. In loss state, the effect schedules repeated auto-reveal calls until every unrevealed category has been moved into completed categories [@route].

Auto-reveal removes all remaining items for the next unrevealed level and appends the source category from `gameData.categories[level]` [@route]. This makes the `level` field part of both display ordering and loss-reveal semantics; levels must be dense enough for `categories[level]` to identify the corresponding category.

## Results And Sharing

The modal title is `Perfect!` for wins with all four mistakes remaining, `Great!` for other wins, and `Next Time!` for losses [@route]. The recap maps category levels to yellow, green, blue, and purple color classes and to colored square emoji in that same order [@route].

Sharing builds text in this form: `Connections: {title}`, one emoji row for each recorded submission, and `https://custom-connections-game.vercel.app/{slug}` [@route]. It prefers `navigator.share` when supported and falls back to `navigator.clipboard.writeText`, changing the button label to `Copied to Clipboard` for one second [@route].

## Styling Contract

The CSS hardcodes the visual vocabulary: yellow, green, blue, purple completed rows; 150-by-80 desktop tiles; 23% width mobile tiles; a 632px desktop board wrapper; rounded completed rows; a centered mistake bubble row; and an absolute results overlay [@styles]. Gameplay classes used by the route include `.item`, `.selected`, `.invalid-shake`, `.row-complete-wrapper.level-N`, `#toast`, `#popup`, and `.emoji.{yellow,green,blue,purple}` [@route] [@styles].

## Related Pages

Read [[connections-game-data]] before changing category shape, levels, slug lookup, or Firestore writes. Read [[styling-and-assets]] before changing board dimensions or fonts.
