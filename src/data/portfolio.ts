export const profile = {
  name: "Eduardo Dantas",
  handle: "dudantas",
  headline: "Senior Software Engineer for complex game systems.",
  subtitle:
    "I build and maintain MMORPG servers, game clients, protocol tooling, performance-critical C++/Lua systems, and open-source infrastructure.",
  description:
    "Portfolio of Eduardo Dantas, focused on MMORPG servers, game clients, C++/Lua, protocol compatibility, performance, tooling, and open-source infrastructure.",
  links: [
    { label: "GitHub", href: "https://github.com/dudantas" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dudantas" }
  ]
};

export const navItems = [
  { label: "Work", href: "#featured-work" },
  { label: "Impact", href: "#open-source-impact" },
  { label: "Cases", href: "#case-studies" },
  { label: "Contributions", href: "#selected-contributions" },
  { label: "Skills", href: "#skills" },
  { label: "Recommendations", href: "#recommendations" }
];

export const recommendations = {
  profileUrl:
    "https://www.linkedin.com/in/dudantas/details/recommendations/",
  title: "Recommendations",
  headline: "Direct feedback from collaborators and clients is available on LinkedIn.",
  description:
    "Selected recommendations are linked from my public LinkedIn profile, where recent endorsements and testimonials are available."
};

export const heroMetrics = [
  { label: "Public ecosystem", value: "OpenTibiaBR", detail: "Server, client, tooling" },
  { label: "Primary stack", value: "C++ / Lua", detail: "Performance-critical systems" },
  { label: "Scope", value: "End-to-end", detail: "Server, client, protocol, CI/CD" }
];

export const openSourceImpact =
  "My public work focuses on OpenTibiaBR's game platform: Canary server runtime, OTClient, Remere's Map Editor, login-server, protocol compatibility, Docker workflows, CI smoke tests, and developer tooling. I prioritize changes that make complex systems faster, safer, easier to operate, and easier to maintain.";

export const featuredWork = [
  {
    title: "Canary Startup Loading Performance",
    eyebrow: "Game Server Engineering",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3968",
    evidenceLabel: "Canary PR #3968",
    summary: "Optimized Canary startup hot paths across Lua loading, map parsing, caches, indexing, and spawns.",
    impact: "Reduced a major startup bottleneck while preserving runtime behavior.",
    metrics: [{ value: "~54s -> 1.5-3.0s", label: "script/module loading" }],
    tags: ["C++", "Lua", "profiling", "startup"]
  },
  {
    title: "RME OTBM Load/Save and Rendering Performance",
    eyebrow: "Developer Tooling",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/remeres-map-editor/pull/188",
    evidenceLabel: "RME PR #188",
    summary: "Improved large-map load, save, allocation, and viewport rendering paths in Remere's Map Editor.",
    impact: "Made large OTBM workflows faster and easier to operate for map authors.",
    metrics: [
      { value: "17,830 -> 2,230", label: "slab refills" },
      { value: "139,767 -> 126", label: "static viewport sampled CPU" }
    ],
    tags: ["C++", "allocator", "binary I/O", "rendering"]
  },
  {
    title: "Livestream/Cast System Across Canary and Login Stack",
    eyebrow: "Protocol & Networking",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3965",
    evidenceLabel: "Canary PR #3965",
    relatedUrls: [{ label: "login-server PR #31", url: "https://github.com/opentibiabr/login-server/pull/31" }],
    summary: "Built a read-only viewer flow across server state, login descriptors, persistence, commands, and compatibility.",
    impact: "Connected runtime, protocol, login flow, and client compatibility across repositories.",
    metrics: [{ value: "2 repos", label: "server + login stack" }],
    tags: ["C++", "Lua", "Go", "protocol"]
  },
  {
    title: "Private Commercial Game Client",
    eyebrow: "Game Client Engineering",
    evidenceStatus: "Private / Anonymized",
    summary:
      "Built and maintained substantial client systems across C++/Lua, protocol compatibility, UI, release operations, telemetry, and crash reporting.",
    impact: "Shows production ownership beyond open-source work while keeping client and project details confidential.",
    metrics: [{ value: "Private / Anonymized", label: "commercial game client" }],
    clientVerifiedLabel: "Private / Anonymized · Client-verified",
    tags: ["C++", "Lua", "client runtime", "release operations"]
  }
];

export const caseStudies = [
  {
    id: "canary-startup-loading-performance",
    title: "Canary Startup Loading Performance",
    context:
      "Canary is a large C++/Lua MMORPG server where startup touches scripts, map data, tile caches, spawn configuration, and runtime registries.",
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
    technologies: ["C++", "Lua", "profiling", "MMORPG server runtime"]
  },
  {
    id: "rme-otbm-load-save-rendering-performance",
    title: "RME OTBM Load/Save/Rendering Performance",
    context:
      "Remere's Map Editor is a long-lived C++ desktop tool used by OpenTibia mappers to inspect, edit, load, save, and render large OTBM maps. Performance problems in this tool directly affect map iteration speed and contributor productivity.",
    problem:
      "Large-map workflows were paying too much allocation, traversal, binary I/O, save-path, and repaint-invalidation cost. Static preview/rendering paths also spent CPU where the viewport should have been mostly idle.",
    whatIOwned: [
      "Profiling and diagnosis",
      "Allocator and traversal changes",
      "Binary I/O and save-path improvements",
      "Rendering invalidation changes",
      "Before/after metrics in the public PR"
    ],
    technicalDecisions: [
      "Added a small-object slab allocator for hot Item/Tile/Floor allocation paths",
      "Cached floor/tile lookup and assigned tile locations directly during parsing",
      "Used direct tile-location traversal during save to reduce repeated lookup work",
      "Split scene-dirty refresh from overlay-only refresh so static overlays did not invalidate cached map rendering",
      "Throttled preview animation without breaking real animated scene updates"
    ],
    solution:
      "Added pooled allocation, cached floor/tile lookups, improved binary I/O, optimized save traversal, and reduced unnecessary repaint work in the editor rendering path.",
    impact:
      "Public PR metrics report slab refills dropping from 17,830 to 2,230, allocation CPU share dropping from 20.01% to 14.62%, and static viewport sampled CPU dropping from 139,767 to 126.",
    evidenceStatus: "Public PR merged",
    evidence: [{ label: "RME PR #188", url: "https://github.com/opentibiabr/remeres-map-editor/pull/188" }],
    technologies: ["C++", "allocator work", "binary I/O", "rendering"]
  },
  {
    id: "livestream-cast-system",
    title: "Livestream/Cast System",
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
      "Separated Canary runtime behavior from login-server descriptor support so each repository owned the right part of the flow",
      "Made the public evidence traceable across both repositories with linked PRs"
    ],
    solution:
      "Implemented livestream manager behavior in Canary, viewer restrictions, Lua command integration, persistence/runtime support, and matching login flow support in login-server.",
    impact:
      "The work demonstrates multi-repo ownership across server runtime, protocol/login behavior, persistence, commands, and client compatibility.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #3965", url: "https://github.com/opentibiabr/canary/pull/3965" },
      { label: "login-server PR #31", url: "https://github.com/opentibiabr/login-server/pull/31" }
    ],
    technologies: ["C++", "Lua", "Go", "protocol", "login stack"]
  },
  {
    id: "market-inbox-data-safety",
    title: "Market/Inbox Data Safety",
    context:
      "MMORPG market, inbox, and offline-save flows need strong item and persistence invariants. Small mistakes can duplicate items, lose items, or overwrite valid player progression.",
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
    id: "docker-quickstart-runtime-smoke-tests",
    title: "Docker Quickstart and Runtime Smoke Tests",
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
      "Used the published Canary runtime image instead of requiring local compilation",
      "Included MariaDB, MyAAC account tooling, and login-server in one reproducible stack",
      "Kept the quickstart on the intended login-server flow",
      "Added platform-specific startup scripts and LAN mode",
      "Validated runtime startup in CI across Linux, macOS, and Windows"
    ],
    solution:
      "Built a local stack with MariaDB, Canary runtime image, MyAAC account tooling, login-server, startup scripts, LAN mode, and runtime smoke tests.",
    impact: "Improved developer onboarding and increased confidence in runtime startup behavior.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #3973", url: "https://github.com/opentibiabr/canary/pull/3973" },
      { label: "Canary PR #3963", url: "https://github.com/opentibiabr/canary/pull/3963" }
    ],
    technologies: ["Docker", "MariaDB", "MyAAC", "Go login-server", "GitHub Actions", "runtime validation"]
  },
  {
    id: "private-commercial-game-client",
    title: "Private Commercial Game Client",
    context:
      "Private commercial game work covered client systems, protocol compatibility, UI modules, release operations, diagnostics, and production support for a custom game client.",
    problem:
      "The project needed substantial client engineering while keeping company, repository, asset, service, and operational details confidential.",
    whatIOwned: [
      "C++/Lua client systems",
      "Protocol compatibility",
      "UI/module runtime work",
      "Launcher/API integration",
      "Release operations",
      "Telemetry and crash reporting"
    ],
    technicalDecisions: [
      "Kept public language architectural and anonymized",
      "Separated client runtime claims from private project identifiers",
      "Prepared the case for future client-verified testimonial support after explicit approval"
    ],
    solution:
      "Built and maintained substantial client systems across runtime behavior, protocol compatibility, UI modules, release support, operational diagnostics, and production maintenance while keeping private details confidential.",
    impact:
      "Shows production ownership beyond open-source work while keeping client and project details confidential.",
    evidenceStatus: "Private / Anonymized",
    evidence: [{ label: "Client reference available on request." }],
    technologies: ["C++", "Lua", "client runtime", "release operations", "telemetry"]
  }
];

export const selectedContributions = [
  {
    title: "Market/Inbox Data Safety",
    category: "Runtime Stability / Data Safety",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3893",
    summary: "Hardened inbox insertion with capacity checks, stack-aware behavior, atomicity, and tests."
  },
  {
    title: "Market Clone/Ghost Item Fix",
    category: "Runtime Stability / Data Safety",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3504",
    summary: "Reduced item duplication/loss risk in market and inbox flows."
  },
  {
    title: "Docker Quickstart",
    category: "DevOps / Developer Experience",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3973",
    summary: "Built a reproducible local Canary stack with MariaDB, MyAAC account tooling, runtime image, and login-server."
  },
  {
    title: "Runtime Smoke Tests",
    category: "CI/CD / Stability",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3963",
    summary: "Added cross-platform runtime startup checks in CI."
  },
  {
    title: "Mbed TLS RSA Backend",
    category: "Security / Build Systems",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3938",
    summary: "Migrated login RSA backend abstraction from OpenSSL usage to Mbed TLS."
  },
  {
    title: "Protobuf-lite Integration",
    category: "Build Systems / Protocol Tooling",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3935",
    summary: "Reduced protobuf dependency surface for lite-runtime protocol data."
  },
  {
    title: "OTClient Spectator Retrieval",
    category: "Client Performance",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/otclient/pull/1319",
    summary: "Optimized spectator retrieval and added tests."
  },
  {
    title: "RME Modern Asset Support",
    category: "Developer Tooling / Client Assets",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/remeres-map-editor/pull/70",
    summary: "Added modern client asset/appearance support for map editor workflows."
  },
  {
    title: "Login-server Structured Errors",
    category: "Operator DX / Stability",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/login-server/pull/33",
    summary: "Added structured public errors, admin hints, config validation, and tests."
  },
  {
    title: "Lua API Documentation Generator",
    category: "Developer Tooling",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3771",
    summary: "Added generated Lua API docs and stubs for developer tooling."
  }
];

export const skillGroups = [
  {
    title: "Core",
    skills: [
      "C++ / Lua",
      "Game server engineering",
      "Game client engineering",
      "Protocol compatibility",
      "Performance profiling",
      "Runtime stability",
      "Data safety"
    ]
  },
  {
    title: "Infrastructure",
    skills: ["CMake / vcpkg", "Docker", "GitHub Actions", "MySQL / MariaDB", "Release engineering"]
  },
  {
    title: "Tooling",
    skills: ["Go services", "C# protocol tooling", "Developer tooling", "Open-source maintenance"]
  }
];

export const privateWork = {
  title: "Private Commercial Game Client",
  label: "Private / Anonymized",
  summary:
    "Commercial game client work across C++/Lua systems, protocol compatibility, UI modules, launcher/API integration, asset delivery, telemetry, crash reporting, and release operations.",
  reference: "Client reference available on request.",
  clientVerifiedLabel: "Private / Anonymized · Client-verified",
  whatCanBeSaid: [
    "Built and maintained substantial client systems",
    "Worked across client runtime, protocol compatibility, release operations, and diagnostics",
    "Integrated client systems with launcher/API, asset delivery, telemetry, and crash reporting"
  ],
  whatStaysPrivate: [
    "Customer names",
    "Private repository names",
    "Private URLs or internal service addresses",
    "Proprietary code, assets, logs, packet captures / network traces, screenshots, and business metrics"
  ]
};
