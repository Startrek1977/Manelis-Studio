# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

See [README.md](README.md) for a repo overview. Manelis Studio is intended to become an
e-commerce jewelry site, but that build hasn't started:

- [index.html](index.html) — a static, framework-free "coming soon" placeholder page (inline
  CSS, Google Fonts, no JavaScript, no build step). This is what's currently live at the domain
  root, not the real storefront.
- [scrapped/charmlanecollection.md](scrapped/charmlanecollection.md) — a scraped copy of
  charmlanecollection.com (a jewelry e-commerce storefront: necklaces, charms, chains, bundles),
  kept as design/content reference only — not code, and not to be copied verbatim.

No framework, package manager, or build tooling has been chosen yet for the real storefront
(catalog, cart, checkout), so there are still no build/lint/test commands and no architecture
to document.

**When scaffolding begins:** update this file with the actual stack, the real commands (build,
dev server, lint, test — including how to run a single test), and the high-level architecture
(routing, data/catalog model, cart/checkout flow, styling approach) once those exist in the repo.
Do not carry over assumptions from the reference scrape — verify against the code that's actually
committed.
