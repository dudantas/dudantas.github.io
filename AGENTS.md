# Portfolio Repository Instructions

## Portfolio Positioning

- Keep public site copy in English and preserve the single-page experience unless the user explicitly changes that direction.
- The first read must position Eduardo as a senior C++ systems engineer focused on performance, protocols, runtime reliability, build tooling, and data safety.
- MMORPG, OpenTibia, and game infrastructure are application domains and public proof of systems work, not the primary professional identity.
- Do not reintroduce game-first positioning through hero copy, navigation, section order, or featured-work prioritization.
- Do not freeze exact headlines, metrics, card order, or section copy in this file. Those should remain editable portfolio content.

## Content Ownership

- Keep portfolio content in `src/data/portfolio/` and avoid duplicating it directly in page markup.
- Use `profile.ts` for profile, hero, navigation, links, and recommendation copy.
- Use `capabilities.ts` for capability groups and impact highlights.
- Use `work.ts` for featured work, case studies, contributions, public evidence, and private work.
- Use `types.ts` for shared content contracts and `index.ts` for central exports.
- Change `src/pages/index.astro` only when structure, interaction, or presentation must change.

## Evidence Status Taxonomy

- `Public PR merged`: the PR is accessible without authentication and GitHub shows it merged into the intended public repository.
- `Public PR open`: the PR is accessible without authentication and clearly labeled as in progress. It may support approach or authorship claims, but not completion, merge, deployment, or final outcome claims.
- `Public upstream commit`: the commit is accessible in the canonical upstream repository. A fork-only commit is not sufficient.
- `Public product`: a public product or download page proves only the visible product surface, availability, and behavior that a visitor can inspect. It does not prove private implementation details.
- `Merged and field validated`: the implementation is merged into an appropriate public codebase and field validation was confirmed by the user or an approved operator. This does not automatically mean production rollout, production scale, or universal compatibility.
- `Client-approved private work`: the client or owner approved the named public reference, but implementation evidence remains private.
- `Private / Anonymized`: the work may be described only without unapproved names or identifying details.
- Never apply a public status label to private or inaccessible evidence.

## Public Evidence Policy

- Treat an artifact as public evidence only when an unauthenticated visitor can open it directly.
- Public technical evidence must expose reviewable source, a pull request, a commit, documentation, or another artifact that directly supports the claim being made.
- Never link a private repository, pull request, issue, commit, build, or release as public evidence, even when the repository owner can access it.
- Do not use binary-only or distribution repositories as technical implementation evidence. Public availability alone is not enough when the underlying work cannot be reviewed.
- Confirm that the artifact supports the nearby ownership, implementation, status, and outcome claims. A related link is not automatically sufficient evidence.
- A public product page may support a product claim while separate public source evidence supports technical implementation claims. Keep those roles explicit.

## Claims and Metrics

- Keep every quantitative metric tied to a nearby artifact that supports that specific number and context.
- Preserve `PoC` wherever a result came from a proof of concept. Do not present a PoC measurement as a general production result.
- Do not use `production`, `production rollout`, or equivalent wording for local validation, tests, merged architecture, or field validation unless direct evidence supports that scope.
- Separate current public surfaces from planned, experimental, or future platform work.
- Do not infer implementation language, architecture, ownership, security properties, or operational scale from binaries, screenshots, or product/download pages alone.
- When broader feedback is still being collected, state only the validation already confirmed and avoid implying universal adoption.

## Private and Conditioned Content

- Private work may be cited only when the client or owner approved the public reference. Keep it in the `Private Work` section, describe it at a public-safe architecture and outcome level, and do not link private artifacts.
- Asteria is the current approved example: it may be cited as client-approved private work with a reference available on request, but it must not be presented as publicly verifiable source evidence.
- Keep private repository names, URLs, endpoints, logs, private diagnostic or operational artifacts, screenshots, assets, customer names, and business metrics out of public copy unless explicit publication approval covers that exact material.
- Do not import, copy, or reference private research files from this repository.
- Do not add private repository names to public deny lists or documentation. Express restrictions by category instead.
- Do not add client-check or anti-cheat bypass/patching work, bot automation, or similar material without new explicit approval from the user.
- Do not add a Resume or CV link until an approved public PDF exists under `public/`.
- Do not publish recommendation or testimonial text without explicit approval. A public LinkedIn recommendations page remains the safe fallback.

## Local Review Gate

- A request for local build, preview, or browser review authorizes only local work. It does not authorize commit, push, pull request creation, merge, or deployment.
- Do not compile, build, run Astro checks, or start a development/preview server unless the user explicitly authorizes it.
- Reuse an existing local server when practical. If a new server is authorized, report its local URL and keep publication as a separate decision.
- When local visual review is requested, use the integrated browser and inspect the actual rendered page rather than relying only on source text.

## Visual Validation

- After authorized content or layout changes, review representative desktop and mobile viewports.
- Confirm there is no horizontal overflow, clipped text, overlapping content, or unstable card sizing.
- Test navigation anchors, case-study accordions, `Read case study`, contribution expansion, and external links affected by the change.
- Keep recruiter-facing cards scannable. Avoid orphan metric tiles, excessive evidence-link density, and headings that dominate compact mobile sections.
- Verify that removed content is absent from the rendered DOM, not only from a single source file.

## Evidence Verification Before Publishing

1. Extract every external evidence URL added or changed by the update.
2. Verify each URL without GitHub authentication or another privileged session.
3. Reject links that return `404`, require sign-in, expose only a binary distribution surface for a technical claim, or do not support the nearby claim.
4. Confirm merged status, upstream location, authorship/ownership context, and metric provenance when those are claimed.
5. Search the repository and rendered page for private identifiers, removed evidence sources, machine-local paths, and explicitly excluded content.
6. Run `git diff --check` and review the complete staged diff before committing.

## Publishing and Production Verification

- Commit, push, or deploy only when the user explicitly requests that action.
- Publish through a feature branch and pull request. Do not push feature-branch work directly to `origin/main`.
- A merge to `main` triggers `.github/workflows/deploy.yml`; monitor that workflow through both build and deploy completion.
- After deployment, request the public page with cache bypass, confirm HTTP 200, verify representative new content, and verify removed or sensitive terms are absent.
- Do not report publication complete merely because a push or merge succeeded. Confirm the live GitHub Pages result.

## Git Safety

- Before committing or pushing, run `git status --short --branch` and `git branch -vv`.
- Create working branches under `dudantas/` unless the user explicitly requests another name.
- A feature branch must not track `origin/main`. Its upstream, when set, must use the same remote branch name.
- Prefer explicit push targets such as `git push origin HEAD:<branch>`.
- Stage only files in the intended scope and preserve unrelated user changes.
- Do not post pull-request comments or reviews unless the user explicitly asks.

## Documentation Portability

- Keep committed documentation portable across machines and fresh clones.
- Use repository-relative paths and commands that assume the repository root.
- Never commit machine-local drive paths, user home paths, editor-only links, or `file://` URLs.
