# Changelog

All notable changes to this project will be documented in this file.

## [0.2.3] - 2026-02-21

### Bug Fixes

- Remove registry-url to unblock OIDC publishing

### Chores

- Bump eslint in the dev-dependencies group
- Update bun.lock

### CI

- Combine release and publish-dispatch workflows into single file

## [0.2.1] - 2026-02-21

### Bug Fixes

- Remove registry-url to unblock OIDC publishing

## [0.2.1] - 2026-02-20

### Chores

- Merge v0.2.0 back into develop

### CI

- Add manual publish dispatch workflow and make release steps idempotent
- Migrate to npm OIDC trusted publishing
- Add manual publish dispatch workflow and make release steps idempotent

## [0.2.0] - 2026-02-20

### Features

- Add github action script
- Add npm release script
- Move publish script to .github
- Update npm script
- Add automated gitflow release pipeline

### Bug Fixes

- Create CHANGELOG.md if missing before git-cliff --prepend

### Documentation

- Add CLAUDE.md for Claude Code guidance

### Chores

- Update npm script
- Migrate to bun and update all deps to exact versions
- Upgrade ESLint to v10 with flat config migration
- Add CODEOWNERS and dependabot config
- Move claude.md to .claude folder
- Merge deployment-workflow into develop
- Bump actions/checkout from 4 to 6
- Bump actions/setup-node from 4 to 6

