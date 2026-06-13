---
title: Analytics And Ads
summary: The static artifact loads PostHog for manual pageview capture and Google AdSense lazily from the layout payload.
topics: [external-service, analytics, deployment]
sources:
  - id: layout
    type: file
    path: js/layout-e208247ebdc3bde7.js
    note: Shows PostHog initialization and manual pageview capture.
  - id: html
    type: file
    path: index.html
    note: Shows the Google AdSense script in the embedded layout payload.
status: active
verified: 2026-06-13
---

The layout bundle includes two external service integrations: PostHog analytics and Google AdSense. Both are client-side integrations embedded in the deployed artifact, not local server responsibilities.

## PostHog

`CSPostHogProvider` initializes PostHog with project token `phc_tkkqM4VO6Sd06ftJrq0njtcKXePG8cAc1uivoj8P8Hu`, `api_host: https://app.posthog.com`, and `autocapture: false` [@layout]. A separate component reads the current pathname and search params, builds `window.origin + pathname + ?query`, and captures `$pageview` with `$current_url` whenever those values change [@layout].

The important invariant is that automatic capture is disabled, but pageviews are still sent manually. Removing the manual component would silence route-level pageviews unless PostHog config changes at the same time.

## Google AdSense

The inline Next payload includes a lazy-onload script for `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7330339350575374` with `crossOrigin: anonymous` [@html]. There are no local ad placement components visible in the preserved route bundle; the artifact only proves the ad library script is loaded by the layout.

## Related Pages

Read [[next-app-router-export]] for where layout-level scripts are wired into the static payload.
