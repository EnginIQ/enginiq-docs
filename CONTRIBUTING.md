# Contributing to EnginiQ Docs

Thanks for your interest in contributing to EnginiQ Docs. We welcome first-time contributors and open-source program participants (including GirlScript Summer of Code).

## Quick start

1. Fork the repository.
2. Clone your fork and install dependencies:

   ```bash
   npm install
   ```

3. Copy env vars and start local dev server:

   ```bash
   cp .env.example .env.local
   npm run dev
   ```

4. Create a branch:

   ```bash
   git checkout -b feat/short-description
   ```

## Suggested contribution types

- Fix typos and broken links in docs.
- Improve onboarding and examples.
- Improve accessibility, responsiveness, and UI polish.
- Add tests and reliability improvements.

## Before opening a PR

- Keep PRs focused and small.
- Run checks locally:

  ```bash
  npm run lint
  npm run build
  ```

- Include screenshots for visible UI changes.
- Update docs when behavior changes.

## Pull request checklist

- [ ] My branch is up to date with `main`.
- [ ] I tested my changes locally.
- [ ] I added or updated docs where needed.
- [ ] I linked related issue(s).

## Code of conduct

By participating, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).
