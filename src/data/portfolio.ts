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
  { label: "Skills", href: "#skills" }
];

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
    context: "Remere's Map Editor is a C++ map editor used for large OTBM maps.",
    problem: "Large maps and static preview paths created unnecessary allocation, traversal, I/O, and repaint costs.",
    whatIOwned: [
      "Profiling and diagnosis",
      "Allocator and traversal changes",
      "Binary I/O and save-path improvements",
      "Rendering invalidation changes"
    ],
    technicalDecisions: [
      "Targeted allocation and traversal overhead instead of cosmetic UI changes",
      "Improved binary I/O and save behavior for large-map workflows",
      "Reduced repaint invalidation work for static viewport scenarios"
    ],
    solution:
      "Added pooled allocation, cached floor/tile lookups, improved binary I/O, optimized save traversal, and reduced unnecessary repaint work.",
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
      "OpenTibiaBR needed a viewer flow that connected game server state with login-server behavior and client compatibility.",
    problem: "Viewer sessions needed to be read-only, safe, and compatible with the login flow.",
    whatIOwned: [
      "Server-side livestream/cast flow",
      "Viewer restrictions and session state",
      "Login descriptor contract",
      "Lua command integration",
      "Documentation and compatibility work"
    ],
    technicalDecisions: [
      "Kept viewer sessions read-only by design",
      "Split server runtime behavior from login descriptor support",
      "Made the feature understandable through public PRs across both repositories"
    ],
    solution: "Implemented livestream manager behavior in Canary and login flow support in login-server.",
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
    context: "Market and inbox flows handle item movement where duplication, item loss, or partial mutation would be serious.",
    problem: "Capacity and insertion paths needed stronger preflight checks and atomic behavior.",
    whatIOwned: [
      "Capacity validation logic",
      "Stack and non-stack item handling",
      "Atomic batch insertion behavior",
      "Tests and edge-case coverage"
    ],
    technicalDecisions: [
      "Validated capacity before mutating item state",
      "Handled stackable and non-stackable items explicitly",
      "Added tests around edge cases that affect player data integrity"
    ],
    solution:
      "Hardened inbox and market insertion paths with capacity checks, safer cloning/insertion behavior, and tests.",
    impact: "Protects game economy and player data integrity.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #3893", url: "https://github.com/opentibiabr/canary/pull/3893" },
      { label: "Canary PR #3504", url: "https://github.com/opentibiabr/canary/pull/3504" }
    ],
    technologies: ["C++", "data safety", "persistence", "tests"]
  },
  {
    id: "docker-quickstart-runtime-smoke-tests",
    title: "Docker Quickstart and Runtime Smoke Tests",
    context:
      "New users and maintainers need a reproducible local stack, and CI needs to catch runtime startup failures.",
    problem:
      "Build success alone did not prove that the server could start with database, config, map data, login-server, and web account tooling integration.",
    whatIOwned: [
      "Docker quickstart architecture",
      "Startup scripts and documentation",
      "Runtime smoke-test flow",
      "CI integration"
    ],
    technicalDecisions: [
      "Validated runtime startup, not just compilation",
      "Used Docker to make local onboarding reproducible",
      "Connected database, server, login, and account tooling in one flow"
    ],
    solution:
      "Built a local stack with MariaDB, Canary runtime image, account tooling, login-server, startup scripts, LAN mode, and runtime smoke tests.",
    impact: "Improved developer onboarding and increased confidence in runtime startup behavior.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #3973", url: "https://github.com/opentibiabr/canary/pull/3973" },
      { label: "Canary PR #3963", url: "https://github.com/opentibiabr/canary/pull/3963" }
    ],
    technologies: ["Docker", "GitHub Actions", "MariaDB", "runtime validation"]
  },
  {
    id: "private-commercial-game-client",
    title: "Private Commercial Game Client",
    context:
      "Private commercial game work covered client systems, protocol compatibility, UI modules, release operations, diagnostics, and production support.",
    problem:
      "The project needed substantial client engineering while keeping company, repository, asset, service, and operational details confidential.",
    whatIOwned: [
      "C++/Lua client systems",
      "Protocol compatibility",
      "Launcher/API integration",
      "Release operations",
      "Telemetry and crash reporting"
    ],
    technicalDecisions: [
      "Kept public language architectural and anonymized",
      "Separated client runtime claims from private project identifiers",
      "Prepared the case for future client-verified testimonial support"
    ],
    solution:
      "Built and maintained substantial client systems while keeping private details confidential.",
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
    summary: "Built a reproducible local Canary stack with MariaDB, account tooling, runtime image, and login-server."
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
  whatCanBeSaid: [
    "Built and maintained substantial client systems",
    "Worked across client runtime, protocol compatibility, release operations, and diagnostics",
    "Integrated client systems with launcher/API, asset delivery, telemetry, and crash reporting"
  ],
  whatStaysPrivate: [
    "Customer names",
    "Private repository names",
    "Private URLs or internal service addresses",
    "Proprietary code, assets, logs, network traces, screenshots, and business metrics"
  ]
};
