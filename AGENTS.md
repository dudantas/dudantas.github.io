# Portfolio Repository Instructions

## Public Evidence Policy

- Treat an artifact as public evidence only when an unauthenticated visitor can open it directly.
- Public technical evidence must expose reviewable source, a pull request, a commit, documentation, or another artifact that supports the claim being made.
- Never link a private repository, pull request, issue, commit, build, or release as public evidence, even when the repository owner can access it.
- Do not use binary-only or distribution repositories as technical implementation evidence. Public availability alone is not enough when the underlying work cannot be reviewed.
- A public product or download page may prove that a product exists and is available. It does not prove private implementation details by itself.
- Private work may be cited only when the client or owner approved the public reference. Keep it in the `Private Work` section, describe it at a public-safe architecture and outcome level, and do not link private artifacts.
- Asteria is the current approved example: it may be cited as client-approved private work with a reference available on request, but it must not be presented as publicly verifiable source evidence.
- Label private claims as private or client-approved private work. Never label them `Public PR merged`, `Public upstream commit`, or equivalent.

## Evidence Verification Before Publishing

1. Extract every external evidence URL added or changed by the update.
2. Verify each URL without GitHub authentication or another privileged session.
3. Reject links that return `404`, require sign-in, or expose only a binary distribution surface for a technical claim.
4. Confirm that each remaining artifact directly supports the nearby metric, implementation detail, or ownership claim.
5. Search the repository for private repository names and removed evidence sources before committing.
6. Keep private repository names, URLs, endpoints, logs, diagnostic artifacts, screenshots, assets, and business metrics out of public copy unless explicit publication approval covers that exact material.
