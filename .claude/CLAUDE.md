# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Lint and format
npx eslint src/index.js
npx prettier --write .

# Release (bumps version, updates package.json, creates git commit)
npm run release:patch   # 0.1.5 → 0.1.6
npm run release:minor   # 0.1.5 → 0.2.0
npm run release:major   # 0.1.5 → 1.0.0
```

There is no build step — `src/index.js` is the published artifact directly.

There are no automated tests; the test script is a placeholder.

## Architecture

This is a single-file Tailwind CSS plugin (`src/index.js`, ~50 lines) that provides text truncation utilities **without** an ellipsis — a gap left by the built-in `line-clamp-*` classes.

**Plugin internals (`src/index.js`):**
- `matchUtilities` — registers `line-clamp-no-ellipsis-{value}` utilities driven by `theme('lineClamp')` (defaults: 1–6). Generates `overflow: hidden`, `max-height: calc(1lh * {value})`, and `overflow-wrap: break-word`.
- `addUtilities` — registers `.line-clamp-no-ellipsis-none` which unsets clamping.
- The `1lh` unit (CSS line-height relative unit) is used instead of explicit `line-height` multiplication, making the utility respect the element's own line-height.

**Release flow:** Merging to `main` triggers `.github/workflows/publish.yml`, which runs `npm publish --access public` using the `NPM_ACCESS_TOKEN` secret.

**Peer dependency:** Tailwind CSS v2 or v3.
