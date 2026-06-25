import type { CaseStudy, FeaturedWorkItem, SelectedContribution } from "./types";

export const publicEvidence = {
  title: "Public Evidence & Contributions",
  headline: "Claims are tied to public artifacts wherever possible.",
  description:
    "This portfolio prioritizes merged PRs, upstream commits, public product pages, and cross-repository evidence. Private work is separated and described only at a public-safe architecture and outcome level.",
  points: [
    {
      title: "Open-source systems",
      summary: "Canary, OTClient, Remere's Map Editor, login-server, vcpkg, and Protocol Buffers contributions."
    },
    {
      title: "Production-like surfaces",
      summary: "Public launcher/download pages, runtime smoke tests, release workflows, and partner delivery flows."
    },
    {
      title: "Private work boundaries",
      summary: "Private repositories, endpoints, logs, diagnostic artifacts, screenshots, assets, and business metrics stay out of public copy."
    }
  ]
};

export const featuredWork: FeaturedWorkItem[] = [
  {
    title: "C++ Runtime Startup Performance with Lua Integration",
    eyebrow: "Performance Engineering",
    evidenceStatus: "Public PR merged",
    caseStudyId: "cpp-lua-runtime-startup-performance",
    url: "https://github.com/opentibiabr/canary/pull/3968",
    evidenceLabel: "Canary PR #3968",
    summary: "Optimized startup hot paths across Lua loading, map parsing, caches, indexing, and spawns.",
    impact: "Reduced a major C++ runtime startup bottleneck while preserving Lua integration behavior.",
    metrics: [{ value: "~54s -> 1.5-3.0s", label: "script/module loading" }],
    tags: ["C++", "Lua", "profiling", "runtime startup"]
  },
  {
    title: "C++ Build System & Protobuf Packaging Optimization",
    eyebrow: "Build Systems",
    evidenceStatus: "Public upstream commit",
    caseStudyId: "cpp-build-system-protobuf-packaging-optimization",
    url: "https://github.com/protocolbuffers/protobuf/commit/7c090172a4f502a06e3a3c23df8a3242b03f3148",
    evidenceLabel: "Protobuf landed commit",
    relatedUrls: [
      { label: "Protobuf PR #27407", url: "https://github.com/protocolbuffers/protobuf/pull/27407" },
      { label: "vcpkg PR #51545", url: "https://github.com/microsoft/vcpkg/pull/51545" }
    ],
    summary: "Added constrained Protobuf lite-only runtime packaging and vcpkg support for target-side builds.",
    impact: "Reduced unnecessary build/install cost for C++ package-manager and cross-build workflows.",
    metrics: [
      { value: "508s -> 55s", label: "build step PoC" },
      { value: "113,754 KB -> 21,579 KB", label: "installed footprint PoC" }
    ],
    tags: ["CMake", "vcpkg", "Protocol Buffers", "cross-builds"]
  },
  {
    title: "Runtime Hot-path & Memory Ownership",
    eyebrow: "Runtime Reliability",
    evidenceStatus: "Public PR merged",
    caseStudyId: "runtime-hot-path-memory-ownership",
    url: "https://github.com/opentibiabr/canary/pull/3987",
    evidenceLabel: "Canary PR #3987",
    relatedUrls: [
      { label: "Canary PR #4007", url: "https://github.com/opentibiabr/canary/pull/4007" },
      { label: "Canary PR #3701", url: "https://github.com/opentibiabr/canary/pull/3701" }
    ],
    summary: "Hardened Lua shared-userdata ownership, reduced refcount churn, improved query construction, and batched container updates.",
    impact: "Improved runtime safety and reduced avoidable work in memory, persistence, and player-state hot paths.",
    metrics: [{ value: "3 PRs", label: "memory, database, batching" }],
    tags: ["C++", "Lua", "memory ownership", "hot paths", "data safety"]
  },
  {
    title: "Multi-Repo Protocol/Login Flow",
    eyebrow: "Protocol & Networking",
    evidenceStatus: "Public PR merged",
    caseStudyId: "multi-repo-protocol-login-flow",
    url: "https://github.com/opentibiabr/canary/pull/3965",
    evidenceLabel: "Canary PR #3965",
    relatedUrls: [{ label: "login-server PR #31", url: "https://github.com/opentibiabr/login-server/pull/31" }],
    summary: "Built a read-only viewer flow across server state, login descriptors, persistence, commands, and compatibility.",
    impact: "Connected runtime, protocol, login flow, and client compatibility across repositories.",
    metrics: [{ value: "2 repos", label: "server + login stack" }],
    tags: ["C++", "Lua", "Go", "protocol", "login flow"]
  },
  {
    title: "Multi-Tenant Client Delivery & Release Platform",
    eyebrow: "Product Delivery",
    evidenceStatus: "Public product",
    caseStudyId: "modern-client-asset-delivery-platform",
    url: "https://otcrp.com/?lang=en",
    evidenceLabel: "OTCRP site",
    relatedUrls: [
      { label: "Downloads", url: "https://otcrp.com/downloads" },
      { label: "OTClient PR #1727", url: "https://github.com/opentibiabr/otclient/pull/1727" },
      { label: "OTClient PR #1739", url: "https://github.com/opentibiabr/otclient/pull/1739" },
      { label: "partner-platform-service PR #1", url: "https://github.com/dudantas/partner-platform-service/pull/1" },
      { label: "partner-platform-service PR #2", url: "https://github.com/dudantas/partner-platform-service/pull/2" }
    ],
    summary:
      "Built client-side and service-side delivery flows for server-specific assets, modules, catalogs, news, monitoring, and Windows launcher distribution.",
    impact:
      "Turns a launcher into a controlled multi-server delivery surface without mixing assets, modules, private endpoints, or partner operations.",
    metrics: [
      { value: "Multi-server", label: "catalog delivery" },
      { value: "Per-server", label: "assets and modules" },
      { value: "Windows", label: "current public surface" }
    ],
    tags: ["C++", "Lua", "Go", "launcher", "asset delivery", "release operations"]
  },
  {
    title: "Large Data Load/Save & Rendering Optimization",
    eyebrow: "Developer Tooling",
    evidenceStatus: "Public PR merged",
    caseStudyId: "large-data-load-save-rendering-optimization",
    url: "https://github.com/opentibiabr/remeres-map-editor/pull/188",
    evidenceLabel: "RME PR #188",
    relatedUrls: [{ label: "RME PR #160", url: "https://github.com/opentibiabr/remeres-map-editor/pull/160" }],
    summary: "Improved large-map load, save, allocation, viewport rendering, and Cyclopedia asset export paths.",
    impact: "Made large OTBM and generated asset workflows faster and easier to operate for map/tooling authors.",
    metrics: [
      { value: "17,830 -> 2,230", label: "slab refills" },
      { value: "139,767 -> 126", label: "static viewport sampled CPU" }
    ],
    tags: ["C++", "allocator", "binary I/O", "rendering", "protobuf assets"]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "cpp-lua-runtime-startup-performance",
    title: "C++ Runtime Startup Performance with Lua Integration",
    context:
      "OpenTibiaBR Canary is a large C++/Lua online server runtime where startup touches scripts, map data, tile caches, spawn configuration, and runtime registries.",
    problem: "Startup had expensive hot paths that slowed iteration and operational startup.",
    whatIOwned: [
      "Profiling and diagnosis",
      "Hot-path implementation",
      "Behavior preservation",
      "Measurement and tradeoff documentation"
    ],
    technicalDecisions: [
      "Focused on startup hot paths before changing broader runtime architecture",
      "Preserved expected script, map, tile, zone, and spawn behavior",
      "Used public before/after measurements to document impact"
    ],
    solution:
      "Optimized Lua loading, map parsing, tile cache construction, zone indexing, and spawn startup without changing expected runtime behavior.",
    impact:
      "Script/module loading dropped from about 54 seconds to roughly 1.5-3.0 seconds in public PR measurements.",
    evidenceStatus: "Public PR merged",
    evidence: [{ label: "Canary PR #3968", url: "https://github.com/opentibiabr/canary/pull/3968" }],
    technologies: ["C++", "Lua", "profiling", "server runtime"]
  },
  {
    id: "cpp-build-system-protobuf-packaging-optimization",
    title: "C++ Build System & Protobuf Packaging Optimization",
    context:
      "Some C++ package-manager and cross-build workflows use a host protoc while target packages only need protobuf::libprotobuf-lite.",
    problem:
      "The target-side Protobuf package could still pay build and install cost for full runtime and compiler-side artifacts that the target dependency graph did not need.",
    whatIOwned: [
      "Upstream problem statement",
      "CMake implementation",
      "vcpkg packaging update",
      "Maintainer iteration",
      "Landed-commit verification"
    ],
    technicalDecisions: [
      "Kept Protobuf default behavior unchanged",
      "Added a strict lite-only mode only when compiler-side artifacts, tests, conformance, examples, and upb are disabled",
      "Exported and installed only targets that actually exist",
      "Treated Protobuf's closed PR state through the public Copybara landed commit instead of GitHub's merge flag"
    ],
    solution:
      "Implemented upstream Protobuf CMake support for a constrained lite-only runtime build and contributed the vcpkg port change that makes libprotoc opt-in for non-native target builds.",
    impact:
      "The Protobuf change landed through Copybara as public commit 7c090172. The local PoC measured the build step dropping from 508.063s to 55.648s and installed footprint from 113,754 KB to 21,579 KB.",
    evidenceStatus: "Public upstream commit",
    evidence: [
      { label: "Protobuf PR #27407", url: "https://github.com/protocolbuffers/protobuf/pull/27407" },
      { label: "Landed commit 7c090172", url: "https://github.com/protocolbuffers/protobuf/commit/7c090172a4f502a06e3a3c23df8a3242b03f3148" },
      { label: "vcpkg PR #51545", url: "https://github.com/microsoft/vcpkg/pull/51545" }
    ],
    technologies: ["CMake", "vcpkg", "Protocol Buffers", "package management", "cross-builds"]
  },
  {
    id: "runtime-hot-path-memory-ownership",
    title: "Runtime Hot-path & Memory Ownership",
    context:
      "Long-running C++/Lua server runtimes need correct ownership boundaries, efficient persistence paths, and stable client synchronization during bulk state mutations.",
    problem:
      "Lua shared userdata could miss typed finalizers, hot paths created avoidable shared_ptr churn, query construction allocated more than necessary, and bulk container mutations could send repeated intermediate updates.",
    whatIOwned: [
      "Lua shared-userdata ownership contract",
      "Runtime leak and finalizer hardening",
      "Refcount and notification hot-path reductions",
      "Database query construction optimization",
      "Container batch update lifecycle",
      "Documentation and tests"
    ],
    technicalDecisions: [
      "Migrated critical shared userdata paths to typed finalizers instead of broad ownership rewrites",
      "Kept raw pointers local and lifetime-anchored by existing strong snapshots",
      "Left player saves in the existing synchronous transaction flow while reducing formatting overhead",
      "Batched container refreshes at the outer scope to avoid intermediate client churn"
    ],
    solution:
      "Hardened shared userdata cleanup, reduced avoidable refcount churn, reused query buffers, and added batch update behavior for player/container mutations.",
    impact:
      "Improved runtime safety and reduced avoidable work across memory ownership, persistence, movement/spectator, and player-state synchronization paths.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #3987", url: "https://github.com/opentibiabr/canary/pull/3987" },
      { label: "Canary PR #4007", url: "https://github.com/opentibiabr/canary/pull/4007" },
      { label: "Canary PR #3701", url: "https://github.com/opentibiabr/canary/pull/3701" }
    ],
    technologies: ["C++", "Lua", "memory ownership", "SQL persistence", "runtime synchronization"]
  },
  {
    id: "multi-repo-protocol-login-flow",
    title: "Multi-Repo Protocol/Login Flow",
    context:
      "OpenTibiaBR needed a livestream/cast viewer flow that crossed the Canary server runtime and the login-server stack. The feature had to expose active casts to clients through a normal client-compatible login path while preserving game-state safety.",
    problem:
      "Viewer sessions needed to be read-only, isolated from player actions, represented in login descriptors, and compatible with client expectations without turning spectators into normal game participants.",
    whatIOwned: [
      "Server-side livestream/cast flow",
      "Viewer restrictions and session state",
      "Login descriptor contract",
      "Lua command integration",
      "Persistence and runtime integration",
      "Documentation and compatibility work"
    ],
    technicalDecisions: [
      "Used explicit livestream login descriptors instead of hidden client assumptions",
      "Persisted active caster state so login services could list available sessions",
      "Kept viewer input restricted inside the game protocol path, not only at command level",
      "Separated Canary runtime behavior from login-server descriptor support so each repository owned the right part of the flow"
    ],
    solution:
      "Implemented livestream manager behavior in Canary, viewer restrictions, Lua command integration, persistence/runtime support, and matching login flow support in login-server.",
    impact:
      "Demonstrated multi-repo ownership across runtime behavior, protocol/login descriptors, persistence, commands, and client compatibility.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #3965", url: "https://github.com/opentibiabr/canary/pull/3965" },
      { label: "login-server PR #31", url: "https://github.com/opentibiabr/login-server/pull/31" }
    ],
    technologies: ["C++", "Lua", "Go", "protocol", "login stack"]
  },
  {
    id: "runtime-state-persistence-safety",
    title: "Runtime State & Persistence Safety",
    context:
      "Market, inbox, and offline-save flows need strong item and persistence invariants. Small mistakes can duplicate items, lose items, or overwrite valid player progression.",
    problem:
      "Full inboxes, stack splitting, partial insertions, market clone behavior, and partial offline-player saves had edge cases where mutation order could corrupt state.",
    whatIOwned: [
      "Capacity validation logic",
      "Stack and non-stack item handling",
      "Atomic batch insertion behavior",
      "Offline save protection",
      "Tests and edge-case coverage"
    ],
    technicalDecisions: [
      "Validated capacity before mutating item state",
      "Added dry-run/test-only insertion behavior for preflight checks",
      "Handled stackable and non-stackable items explicitly",
      "Centralized insertion behavior to reduce duplicated item movement logic",
      "Avoided saving incomplete offline-player state over valid persistent fields"
    ],
    solution:
      "Hardened inbox and market insertion paths with capacity checks, safer cloning/insertion behavior, batch insertion helpers, and offline save protections.",
    impact: "Reduced risk of duplicated/ghost items, item loss, and progression resets in economy and persistence flows.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #3893", url: "https://github.com/opentibiabr/canary/pull/3893" },
      { label: "Canary PR #3504", url: "https://github.com/opentibiabr/canary/pull/3504" },
      { label: "Canary PR #3538", url: "https://github.com/opentibiabr/canary/pull/3538" }
    ],
    technologies: ["C++", "SQL persistence", "inventory containers", "data safety", "tests"]
  },
  {
    id: "reproducible-runtime-environment-ci-smoke-tests",
    title: "Reproducible Runtime Environment & CI Smoke Tests",
    context:
      "New users and maintainers need a reproducible local stack, and CI needs to catch runtime startup failures.",
    problem:
      "Build success alone did not prove that the server could start with database, config, map data, login-server, and MyAAC account tooling integration.",
    whatIOwned: [
      "Docker quickstart architecture",
      "Startup scripts and documentation",
      "Runtime smoke-test flow",
      "CI integration"
    ],
    technicalDecisions: [
      "Validated runtime startup, not just compilation",
      "Used the published runtime image instead of requiring local compilation",
      "Included MariaDB, MyAAC account tooling, and login-server in one reproducible stack",
      "Added platform-specific startup scripts and LAN mode",
      "Validated runtime startup in CI across Linux, macOS, and Windows"
    ],
    solution:
      "Built a local stack with MariaDB, Canary runtime image, MyAAC account tooling, login-server, startup scripts, LAN mode, and runtime smoke tests.",
    impact: "Improved developer onboarding and increased confidence in runtime startup behavior.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #3973", url: "https://github.com/opentibiabr/canary/pull/3973" },
      { label: "Canary PR #3963", url: "https://github.com/opentibiabr/canary/pull/3963" },
      { label: "Canary PR #4004", url: "https://github.com/opentibiabr/canary/pull/4004" },
      { label: "Canary PR #4006", url: "https://github.com/opentibiabr/canary/pull/4006" }
    ],
    technologies: ["Docker", "MariaDB", "Go login-server", "GitHub Actions", "runtime validation", "release workflows"]
  },
  {
    id: "modern-client-asset-delivery-platform",
    title: "Modern Client Asset Delivery Platform",
    context:
      "Client delivery needed to support modern asset sets, server-specific modules, public launcher downloads, catalog visibility, operational monitoring, and update metadata without exposing private implementation details.",
    problem:
      "Partner client distribution was not a single-download problem. Different servers needed different asset trees, module sets, launch goals, update cadence, news, monitoring, and delivery rules while preserving one controlled public entry point.",
    whatIOwned: [
      "Client-side launcher/runtime integration",
      "Catalog-driven multiserver delivery flow",
      "Automatic asset download and install flow",
      "Archive extraction and integrity checks",
      "Admin-side asset monitoring and news APIs",
      "Windows release support"
    ],
    technicalDecisions: [
      "Kept final runtime files in existing client asset paths instead of introducing a second source of truth",
      "Used archive-first installation with manifest fallback behavior",
      "Kept server-specific assets, modules, launch metadata, and catalog visibility separated through delivery rules",
      "Scoped public claims to the current Windows launcher surface and public PR evidence",
      "Kept private repository names, source, internal endpoints, signing material, and asset internals out of public copy"
    ],
    solution:
      "Integrated client asset automation, launcher/API delivery flows, server-specific asset/module loading, partner catalog rules, admin asset monitoring, news APIs, HTTPS monitoring, signed metadata, and release support.",
    impact:
      "Gives players and operators a controlled public download/update path while preserving separation between server-specific packages and confidential partner operations.",
    evidenceStatus: "Public product",
    evidence: [
      { label: "OTCRP home", url: "https://otcrp.com/?lang=en" },
      { label: "OTCRP downloads", url: "https://otcrp.com/downloads" },
      { label: "OTClient PR #1727", url: "https://github.com/opentibiabr/otclient/pull/1727" },
      { label: "OTClient PR #1739", url: "https://github.com/opentibiabr/otclient/pull/1739" },
      { label: "partner-platform-service PR #1", url: "https://github.com/dudantas/partner-platform-service/pull/1" },
      { label: "partner-platform-service PR #2", url: "https://github.com/dudantas/partner-platform-service/pull/2" }
    ],
    technologies: ["C++", "Lua", "Go", "asset delivery", "launcher/API", "release operations", "monitoring"]
  },
  {
    id: "large-data-load-save-rendering-optimization",
    title: "Large Data Load/Save & Rendering Optimization",
    context:
      "Remere's Map Editor is a long-lived C++ desktop tool used to inspect, edit, load, save, render, and export large map/client-asset data sets.",
    problem:
      "Large-map workflows were paying too much allocation, traversal, binary I/O, save-path, repaint-invalidation, and generated asset export cost.",
    whatIOwned: [
      "Profiling and diagnosis",
      "Allocator and traversal changes",
      "Binary I/O and save-path improvements",
      "Rendering invalidation changes",
      "Cyclopedia/staticdata export support",
      "Before/after metrics in public PRs"
    ],
    technicalDecisions: [
      "Added a small-object slab allocator for hot Item/Tile/Floor allocation paths",
      "Cached floor/tile lookup and assigned tile locations directly during parsing",
      "Used direct tile-location traversal during save to reduce repeated lookup work",
      "Split scene-dirty refresh from overlay-only refresh so static overlays did not invalidate cached map rendering",
      "Kept Cyclopedia asset export focused on protobuf/staticdata paths and documented deferred optimization candidates"
    ],
    solution:
      "Added pooled allocation, cached floor/tile lookups, improved binary I/O, optimized save traversal, reduced unnecessary repaint work, and added large map asset export support.",
    impact:
      "Public PR metrics report slab refills dropping from 17,830 to 2,230, allocation CPU share dropping from 20.01% to 14.62%, and static viewport sampled CPU dropping from 139,767 to 126.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "RME PR #188", url: "https://github.com/opentibiabr/remeres-map-editor/pull/188" },
      { label: "RME PR #160", url: "https://github.com/opentibiabr/remeres-map-editor/pull/160" }
    ],
    technologies: ["C++", "allocator work", "binary I/O", "rendering", "Protocol Buffers"]
  }
];

export const selectedContributions: SelectedContribution[] = [
  {
    title: "Protobuf-lite Integration",
    category: "Build Systems / Protocol Tooling",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3935",
    summary: "Reduced protobuf dependency surface for lite-runtime protocol data."
  },
  {
    title: "OTClient HTTP/WebSocket Modernization",
    category: "Client Networking",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/otclient/pull/1312",
    summary: "Replaced in-house HTTP/WebSocket implementation with ixwebsocket while preserving public client APIs."
  },
  {
    title: "OTClient Logging Backend",
    category: "Diagnostics / Runtime Observability",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/otclient/pull/1643",
    summary: "Added spdlog backend, centralized logging, log levels, formatting, file output, and safer HTTP log handling."
  },
  {
    title: "RME Cyclopedia Asset Export",
    category: "Developer Tooling / Protocol Assets",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/remeres-map-editor/pull/160",
    summary: "Added Cyclopedia/staticdata protobuf export support and performance-oriented export path changes."
  },
  {
    title: "Market/Inbox Data Safety",
    category: "Runtime Stability / Data Safety",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3893",
    summary: "Hardened inbox insertion with capacity checks, stack-aware behavior, atomicity, and tests."
  },
  {
    title: "Release Workflow and Metadata Tooling",
    category: "Release Engineering",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/4004",
    summary: "Added tag-driven release workflow, metadata tooling, release docs, and artifact publishing support."
  },
  {
    title: "Login-server Structured Errors",
    category: "Operator DX / Stability",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/login-server/pull/33",
    summary: "Added structured public errors, admin hints, config validation, and tests."
  },
  {
    title: "Mbed TLS RSA Backend",
    category: "Security / Build Systems",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3938",
    summary: "Migrated login RSA backend abstraction from OpenSSL usage to Mbed TLS."
  },
  {
    title: "Release Tag Materialization",
    category: "CI/CD / Release Safety",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/4006",
    summary: "Materialized tags before publishing so release metadata and assets resolve consistently."
  },
  {
    title: "Launcher Relay and Capture Tooling",
    category: "Protocol Tooling",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/dudantas/TibiaAPI/pull/2",
    summary: "Added launcher relay, global capture tooling, parser resilience, and capture validation support."
  },
  {
    title: "Market Clone/Ghost Item Fix",
    category: "Runtime Stability / Data Safety",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3504",
    summary: "Reduced item duplication/loss risk in market and inbox flows."
  },
  {
    title: "OTClient Spectator Retrieval",
    category: "Client Performance",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/otclient/pull/1319",
    summary: "Optimized spectator retrieval and added tests."
  },
  {
    title: "Lua API Documentation Generator",
    category: "Developer Tooling",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3771",
    summary: "Added generated Lua API docs and stubs for developer tooling."
  }
];

export const privateWork = {
  title: "Private Client/Server Runtime Engineering",
  label: "Client-approved private work",
  summary:
    "Asteria client and server work across C++/Lua runtime systems, protocol compatibility, UI/runtime behavior, persistence, launcher/API integration, asset delivery, telemetry, crash reporting, and release operations.",
  reference: "Reference available on request.",
  clientVerifiedLabel: "Client-verified reference",
  whatCanBeSaid: [
    "Built and maintained substantial client and server systems",
    "Worked across runtime behavior, protocol compatibility, persistence, release operations, and diagnostics",
    "Integrated launcher/API, asset delivery, telemetry, and crash reporting flows"
  ],
  whatStaysPrivate: [
    "Customer names",
    "Private repository names",
    "Private URLs or internal service addresses",
    "Proprietary code, assets, logs, private diagnostic artifacts, screenshots, and business metrics"
  ]
};
