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

Update public site content in `src/data/portfolio/`.

The content is split by concern:

- `src/data/portfolio/profile.ts` for profile, navigation, hero, and recommendation copy.
- `src/data/portfolio/capabilities.ts` for capability groups and impact highlights.
- `src/data/portfolio/work.ts` for featured work, case studies, selected contributions, public evidence, and private work.
- `src/data/portfolio/types.ts` for shared content types.

Rules for content updates:

- Use `Private / Anonymized` for unapproved private work. Use `Client-approved private work` only when named/public permission is confirmed.
- Do not add private repository names, private URLs, internal service addresses, proprietary code, assets, packet captures / network traces, logs, screenshots, customer names, or unapproved business metrics.
- Do not import or reference private research files from this repository.
- Keep public claims tied to merged/open public PRs, public releases, landed upstream commits tied to public PRs, or explicitly approved private references.
- Public closed-source product evidence may be used when there is a public product/download page. Keep the private repository name and implementation details out of the public site.
- Separate production/current surfaces from future platform work. For example, OTClient Redemption Premium currently has a public Windows launcher surface; add other platform claims one by one only when each platform is ready to cite publicly.

Before publishing a content update, scan the repository for private identifiers and machine-local paths.
