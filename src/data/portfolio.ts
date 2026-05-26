export const profile = {
  name: "Eduardo Dantas",
  handle: "dudantas",
  headline: "Senior Software Engineer for complex game systems.",
  subtitle:
    "I build and maintain MMORPG servers, game clients, protocol tooling, performance-critical C++/Lua systems, and open-source infrastructure.",
  location: "Brazil",
  links: [
    { label: "GitHub", href: "https://github.com/dudantas" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dudantas" }
  ]
};

export const navItems = [
  { label: "Work", href: "#featured-work" },
  { label: "Cases", href: "#case-studies" },
  { label: "Contributions", href: "#selected-contributions" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export const heroMetrics = [
  { label: "Public ecosystem", value: "OpenTibiaBR", detail: "Server, client, tooling, infrastructure" },
  { label: "Primary stack", value: "C++ / Lua", detail: "Performance-critical game systems" },
  { label: "Positioning", value: "End-to-end", detail: "Server, client, protocol, build, CI/CD" }
];

export const featuredWork = [
  {
    title: "Canary Startup Loading Performance",
    eyebrow: "Game Server Engineering",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3968",
    summary:
      "Profiled and optimized Canary startup across Lua loading, map parsing, tile cache construction, zone indexing, and spawn startup.",
    impact:
      "Public measurements report script/module loading dropping from about 54 seconds to roughly 1.5-3.0 seconds.",
    metric: "~54s -> 1.5-3.0s",
    metricLabel: "script/module loading",
    tags: ["C++", "Lua", "profiling", "startup", "server runtime"]
  },
  {
    title: "RME OTBM Load/Save and Rendering Performance",
    eyebrow: "Developer Tooling",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/remeres-map-editor/pull/188",
    summary:
      "Optimized OTBM load/save/rendering paths through allocator, traversal, binary I/O, and repaint invalidation work.",
    impact:
      "Public metrics report slab refills from 17,830 to 2,230 and static viewport sampled CPU from 139,767 to 126.",
    metric: "17,830 -> 2,230",
    metricLabel: "slab refills",
    tags: ["C++", "performance", "allocator", "binary I/O", "rendering"]
  },
  {
    title: "Livestream/Cast System Across Canary and Login Stack",
    eyebrow: "Protocol & Networking",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3965",
    relatedUrls: ["https://github.com/opentibiabr/login-server/pull/31"],
    summary:
      "Designed a read-only viewer flow across Canary server state, login descriptor support, Lua commands, persistence, and client compatibility.",
    impact:
      "Demonstrates multi-repo ownership across server runtime, protocol/login behavior, persistence, commands, and client compatibility.",
    metric: "2 repos",
    metricLabel: "server + login stack",
    tags: ["C++", "Lua", "Go", "protocol", "login flow"]
  },
  {
    title: "Private Commercial Game Client",
    eyebrow: "Game Client Engineering",
    evidenceStatus: "Private / Anonymized",
    summary:
      "Built and maintained substantial client systems across C++/Lua, protocol compatibility, UI modules, launcher/API integration, asset delivery, telemetry, crash reporting, and release operations.",
    impact:
      "Demonstrates commercial production experience beyond open-source patches while keeping private details confidential.",
    metric: "Private / Anonymized",
    metricLabel: "commercial game client",
    tags: ["C++", "Lua", "client runtime", "release operations", "telemetry"]
  }
];

export const caseStudies = [
  {
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
    solution:
      "Optimized Lua loading, map parsing, tile cache construction, zone indexing, and spawn startup without changing expected runtime behavior.",
    impact:
      "Script/module loading dropped from about 54 seconds to roughly 1.5-3.0 seconds in the public PR measurements.",
    evidenceStatus: "Public PR merged",
    evidence: ["https://github.com/opentibiabr/canary/pull/3968"],
    technologies: ["C++", "Lua", "profiling", "MMORPG server runtime"]
  },
  {
    title: "RME OTBM Load/Save/Rendering Performance",
    context: "Remere's Map Editor is a C++ map editor used for large OTBM maps.",
    problem: "Large maps and static preview paths created unnecessary allocation, traversal, I/O, and repaint costs.",
    whatIOwned: [
      "Profiling and diagnosis",
      "Allocator and traversal changes",
      "Binary I/O and save-path improvements",
      "Rendering invalidation changes"
    ],
    solution:
      "Added pooled allocation, cached floor/tile lookups, improved binary I/O, optimized save traversal, and reduced unnecessary repaint work.",
    impact:
      "Public PR metrics report slab refills dropping from 17,830 to 2,230, allocation CPU share dropping from 20.01% to 14.62%, and static viewport sampled CPU dropping from 139,767 to 126.",
    evidenceStatus: "Public PR merged",
    evidence: ["https://github.com/opentibiabr/remeres-map-editor/pull/188"],
    technologies: ["C++", "allocator work", "binary I/O", "rendering"]
  },
  {
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
    solution: "Implemented livestream manager behavior in Canary and login flow support in login-server.",
    impact:
      "The work demonstrates multi-repo ownership across server runtime, protocol/login behavior, persistence, commands, and client compatibility.",
    evidenceStatus: "Public PR merged",
    evidence: [
      "https://github.com/opentibiabr/canary/pull/3965",
      "https://github.com/opentibiabr/login-server/pull/31"
    ],
    technologies: ["C++", "Lua", "Go", "protocol", "login stack"]
  },
  {
    title: "Market/Inbox Data Safety",
    context: "Market and inbox flows handle item movement where duplication, item loss, or partial mutation would be serious.",
    problem: "Capacity and insertion paths needed stronger preflight checks and atomic behavior.",
    whatIOwned: [
      "Capacity validation logic",
      "Stack and non-stack item handling",
      "Atomic batch insertion behavior",
      "Tests and edge-case coverage"
    ],
    solution:
      "Hardened inbox and market insertion paths with capacity checks, safer cloning/insertion behavior, and tests.",
    impact: "Protects game economy and player data integrity.",
    evidenceStatus: "Public PR merged",
    evidence: [
      "https://github.com/opentibiabr/canary/pull/3893",
      "https://github.com/opentibiabr/canary/pull/3504"
    ],
    technologies: ["C++", "data safety", "persistence", "tests"]
  },
  {
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
    solution:
      "Built a local stack with MariaDB, Canary runtime image, account tooling, login-server, startup scripts, LAN mode, and runtime smoke tests.",
    impact: "Improved developer onboarding and increased confidence in runtime startup behavior.",
    evidenceStatus: "Public PR merged",
    evidence: [
      "https://github.com/opentibiabr/canary/pull/3973",
      "https://github.com/opentibiabr/canary/pull/3963"
    ],
    technologies: ["Docker", "GitHub Actions", "MariaDB", "runtime validation"]
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
    title: "Protobuf Lite-only Upstream Proposal",
    category: "Build Systems / Upstream",
    evidenceStatus: "Public issue/proposal",
    url: "https://github.com/protocolbuffers/protobuf/issues/27231",
    summary: "Proposed and measured a lite-only target runtime mode for downstream consumers."
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
    title: "MyAAC Livestream Compatibility",
    category: "Compatibility",
    evidenceStatus: "Public PR open",
    url: "https://github.com/slawkens/myaac/pull/363",
    summary: "Submitted Canary-compatible event schedule and livestream login support."
  },
  {
    title: "Lua API Documentation Generator",
    category: "Developer Tooling",
    evidenceStatus: "Public PR open",
    url: "https://github.com/opentibiabr/canary/pull/3771",
    summary: "Active/open tooling work for generated Lua API docs and stubs."
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
  whatCanBeSaid: [
    "Built and maintained substantial client systems",
    "Worked across client runtime, protocol compatibility, release operations, and diagnostics",
    "Integrated client systems with launcher/API, asset delivery, telemetry, and crash reporting"
  ],
  whatStaysPrivate: [
    "Customer names",
    "Private repository names",
    "Private URLs or internal endpoints",
    "Proprietary code, assets, logs, packet captures, screenshots, and business metrics"
  ]
};
