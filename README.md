# dudantas.github.io

Public portfolio site for Eduardo Dantas, published with Astro, Tailwind, and GitHub Pages.

The site is intentionally single-page for the first release. It contains only public-safe portfolio copy and anonymized private work references.

## Local Development

Run commands from the repository root.

```bash
npm install
npm run dev
```

Astro will print the local development URL.

## Build

```bash
npm run build
```

The static output is written to `dist/`.

## Preview

```bash
npm run preview
```

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the site and deploys `dist/` to GitHub Pages.

Expected public URL:

```text
https://dudantas.github.io
```

Repository settings should use GitHub Actions as the Pages source.

## Updating Content

Update public site content in `src/data/portfolio.ts`.

Rules for content updates:

- Keep private work labeled as `Private / Anonymized` unless public permission is available.
- Do not add private repository names, private URLs, internal service addresses, proprietary code, assets, packet captures / network traces, logs, screenshots, customer names, or unapproved business metrics.
- Do not import or reference private research files from this repository.
- Keep public claims tied to merged/open public PRs, public releases, or explicitly approved private references.

Before publishing a content update, scan the repository for private identifiers and machine-local paths.
