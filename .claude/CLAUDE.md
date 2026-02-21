# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Lint (prettier runs through eslint)
bun run lint

# Release (bumps version, updates package.json, creates git commit)
bun run release:patch   # 0.1.5 → 0.1.6
bun run release:minor   # 0.1.5 → 0.2.0
bun run release:major   # 0.1.5 → 1.0.0
```

There is no build step — `src/index.js` is the published artifact directly.

There are no automated tests; the test script is a placeholder.

## Architecture

This is a single-file Tailwind CSS plugin (`src/index.js`, ~50 lines) that provides text truncation utilities **without** an ellipsis — a gap left by the built-in `line-clamp-*` classes.

**Plugin internals (`src/index.js`):**
- `matchUtilities` — registers `line-clamp-no-ellipsis-{value}` utilities driven by `theme('lineClamp')` (defaults: 1–6). Generates `overflow: hidden`, `max-height: calc(1lh * {value})`, and `overflow-wrap: break-word`.
- `addUtilities` — registers `.line-clamp-no-ellipsis-none` which unsets clamping.
- The `1lh` unit (CSS line-height relative unit) is used instead of explicit `line-height` multiplication, making the utility respect the element's own line-height.

**Release flow:** Defined in `.github/workflows/release.yml`.
- **Trigger:** A PR merged into `main` from a branch named `release/v*` or `hotfix/v*`.
- **Steps:** bump `package.json` version → generate `CHANGELOG.md` via git-cliff → create GitHub Release → `npm publish --access public` (OIDC trusted publishing, no token secret needed) → back-merge `main` into `develop`.
- **Manual dispatch:** `workflow_dispatch` allows re-publishing a specific version by providing its tag (e.g. `0.2.0`).

**Docs workflow:** `.github/workflows/` also includes a docs workflow that builds and deploys the VitePress documentation site. It is path-restricted to `docs/**` changes only, so it does not trigger on plugin code changes.

**Peer dependency:** Tailwind CSS v2 or v3.

## Branching strategy

This project follows a gitflow model:

- `main` — production branch; releases are cut from here.
- `develop` — integration branch; `main` is back-merged here after every release.
- `release/v{semver}` — release prep branches; merging into `main` triggers the full release pipeline.
- `hotfix/v{semver}` — hotfix branches; same trigger as release branches.
