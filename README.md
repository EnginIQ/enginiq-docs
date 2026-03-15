# EnginiQ Docs

This is the public website and quickstart documentation for EnginiQ.

## Local development

```bash
npm install
npm run dev
```

If Next starts throwing missing manifest or missing `_document.js` errors, clear the build output first:

```bash
npm run clean
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Vercel

If you deploy this monorepo on Vercel, set the project root directory to:

```text
enginiq-docs
```

Recommended settings:

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`

The Next config already pins `outputFileTracingRoot` to the docs app so Vercel does not guess the wrong workspace root from lockfiles outside this folder.

## Windows and OneDrive note

If this project is inside OneDrive, Next can occasionally end up with a partial `.next` directory during interrupted builds. If that happens, run `npm run clean` and start again. If it keeps happening, move the repo outside OneDrive or mark the folder as always available offline.
