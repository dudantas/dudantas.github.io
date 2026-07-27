import type { CaseStudy, FeaturedWorkItem, SelectedContribution } from "./types";

export const publicEvidence = {
  title: "Public Evidence & Contributions",
  headline: "Claims are tied to public artifacts wherever possible.",
  description:
    "This portfolio prioritizes merged PRs, upstream commits, public product pages, and cross-repository evidence. Private work is separated and described only at a public-safe architecture and outcome level.",
  points: [
    {
      title: "Open-source systems",
      summary:
        "Canary, OTClient, Remere's Map Editor, Assets Editor, login-server, vcpkg, and Protocol Buffers contributions."
    },
    {
      title: "Field-validated systems",
      summary:
        "Runtime scheduling and multiprotocol deployments, public launcher/download pages, smoke tests, release workflows, and partner delivery flows."
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
    title: "Fair Runtime Scheduling & Parallel Compute",
    eyebrow: "Concurrency & Runtime Performance",
    evidenceStatus: "Merged and field validated",
    caseStudyId: "fair-runtime-scheduling-parallel-compute",
    url: "https://github.com/opentibiabr/canary/pull/4030",
    evidenceLabel: "Canary PR #4030",
    relatedUrls: [
      { label: "Canary PR #4023", url: "https://github.com/opentibiabr/canary/pull/4023" },
      { label: "Canary PR #4036", url: "https://github.com/opentibiabr/canary/pull/4036" },
      { label: "Canary PR #3987", url: "https://github.com/opentibiabr/canary/pull/3987" }
    ],
    summary:
      "Designed bounded, lane-aware scheduling and multi-core compute for expensive runtime decisions while preserving authoritative state mutation.",
    impact:
      "Improved player-visible responsiveness under heavy workloads with fairness, backpressure, immutable snapshots, and stale-result rejection.",
    metrics: [
      { value: "264 / 264", label: "unit and regression tests" },
      { value: "Multi-core", label: "bounded compute service" }
    ],
    tags: ["C++", "concurrency", "scheduling", "backpressure", "pathfinding", "runtime telemetry"]
  },
  {
    title: "Runtime Multiprotocol Networking Architecture",
    eyebrow: "Protocols & Networking",
    evidenceStatus: "Merged and field validated",
    caseStudyId: "runtime-multiprotocol-networking-architecture",
    url: "https://github.com/opentibiabr/canary/pull/4009",
    evidenceLabel: "Canary PR #4009",
    relatedUrls: [
      { label: "Canary PR #4020", url: "https://github.com/opentibiabr/canary/pull/4020" },
      { label: "Canary PR #4022", url: "https://github.com/opentibiabr/canary/pull/4022" },
      { label: "Assets Editor PR #90", url: "https://github.com/Arch-Mina/Assets-Editor/pull/90" }
    ],
    summary:
      "Designed transport codecs, protocol profiles, session hints, and version-gated payload contracts for multiple client generations.",
    impact:
      "Replaced scattered version checks with explicit, testable contracts in one C++ runtime without per-version ports or builds.",
    metrics: [
      { value: "3 client families", label: "15.x, 11.00, and 8.60" },
      { value: "1 C++ runtime", label: "shared protocol stack" }
    ],
    tags: ["C++", "TCP", "transport codecs", "protocol profiles", "compatibility", "unit tests"]
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
    title: "Versioned Client Asset Delivery & Release Platform",
    eyebrow: "Product Delivery",
    evidenceStatus: "Public product",
    caseStudyId: "modern-client-asset-delivery-platform",
    url: "https://otcrp.com/?lang=en",
    evidenceLabel: "OTCRP site",
    relatedUrls: [
      { label: "Downloads", url: "https://otcrp.com/downloads" },
      { label: "OTClient PR #1766", url: "https://github.com/opentibiabr/otclient/pull/1766" },
      { label: "Assets Editor PR #91", url: "https://github.com/Arch-Mina/Assets-Editor/pull/91" }
    ],
    summary:
      "Built client-side and service-side delivery flows with version-aware archives, catalog integrity, server-specific assets, monitoring, and launcher distribution.",
    impact:
      "Provides a controlled multi-server release surface while preventing version mismatches, duplicate catalog entries, and cross-server package mixing.",
    metrics: [
      { value: "Version-matched", label: "release archives" },
      { value: "9,209 / 9,209", label: "unique sprite filenames" }
    ],
    tags: ["C++", "Lua", "Go", "launcher", "asset integrity", "release operations"]
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
    id: "fair-runtime-scheduling-parallel-compute",
    title: "Fair Runtime Scheduling & Parallel Compute",
    context:
      "A long-running C++ server runtime must keep player-visible input and movement responsive while processing expensive background pathfinding, target selection, combat preparation, maintenance, and asynchronous work.",
    problem:
      "Broad dispatcher queues allowed large background workloads to compete with latency-sensitive work, while repeated asynchronous tasks, stale decisions, ownership churn, and unbounded fanout limited fairness and multi-core utilization.",
    whatIOwned: [
      "Dispatcher lane and execution-mode architecture",
      "Weighted deficit and producer-fair scheduling",
      "Bounded admission, backpressure, and telemetry",
      "Parallel pathfinding and decision compute service",
      "Immutable navigation snapshots and stale-result rejection",
      "Runtime validation, rollout, documentation, and tests"
    ],
    technicalDecisions: [
      "Kept map mutation, Lua, RNG, combat, conditions, cooldowns, and network-visible state on the authoritative dispatcher",
      "Allowed workers to receive values or immutable snapshots and return suggestions only",
      "Bounded every queue and reserved completion capacity for accepted requests",
      "Revalidated entity generation, position, epoch, and topology revisions before applying worker results",
      "Adapted background budgets from player-visible latency while preserving producer fairness",
      "Used sustained exact backlog state for warnings instead of treating transient histogram samples as incidents"
    ],
    solution:
      "Introduced lane-aware scheduling, adaptive runtime budgets, bounded multi-core compute, immutable navigation snapshots, visibility-aware promotion, coalescing, queue telemetry, and strict stale-completion validation.",
    impact:
      "Improved runtime behavior and player-visible responsiveness under monster-heavy workloads. The architecture passed 264 unit and regression tests and has been field validated across multiple OT server deployments while broader operational feedback continues.",
    evidenceStatus: "Merged and field validated",
    evidence: [
      { label: "Canary PR #4030", url: "https://github.com/opentibiabr/canary/pull/4030" },
      { label: "Canary PR #4023", url: "https://github.com/opentibiabr/canary/pull/4023" },
      { label: "Canary PR #4036", url: "https://github.com/opentibiabr/canary/pull/4036" },
      { label: "Canary PR #3987", url: "https://github.com/opentibiabr/canary/pull/3987" },
      { label: "Canary PR #4007", url: "https://github.com/opentibiabr/canary/pull/4007" }
    ],
    technologies: [
      "C++",
      "concurrency",
      "weighted deficit round robin",
      "bounded queues",
      "immutable snapshots",
      "runtime telemetry"
    ]
  },
  {
    id: "runtime-multiprotocol-networking-architecture",
    title: "Runtime Multiprotocol Networking Architecture",
    context:
      "A C++ client/server runtime needed to support modern 15.x, old-protocol 11.00, and compatible 8.60 client families without separate binaries, ports, or fragile version checks spread across the protocol stack.",
    problem:
      "The client families differ in TCP framing, checksums, encryption layout, compression, handshake behavior, login payloads, asset signatures, item mapping, and version-specific message fields.",
    whatIOwned: [
      "Transport codec and profile architecture",
      "Protocol profile and feature-flag contracts",
      "Account-login and game-login layouts",
      "Session-hint resolution between login and game connections",
      "Current-client compatibility updates and packet debugging",
      "Legacy asset export and versioned client release integration"
    ],
    technicalDecisions: [
      "Separated transport framing from protocol feature behavior",
      "Kept the modern profile as the safe default when no valid legacy hint exists",
      "Used explicit profile feature flags instead of accumulating direct version comparisons",
      "Allowed policy to block a detected profile without letting policy guess legacy framing",
      "Resolved compatible profiles from session hints, protocol data, and asset signatures",
      "Preserved legacy fallbacks while correcting current-client packet boundaries"
    ],
    solution:
      "Implemented transport codecs, initial-connection behavior, runtime protocol profiles, session hints, version-gated payload contracts, compatibility tests, legacy asset export profiles, and coordinated client release packaging.",
    impact:
      "Three client families now share one field-validated C++ runtime and deployment model without requiring per-version ports or server builds.",
    evidenceStatus: "Merged and field validated",
    evidence: [
      { label: "Canary PR #4009", url: "https://github.com/opentibiabr/canary/pull/4009" },
      { label: "Canary PR #4020", url: "https://github.com/opentibiabr/canary/pull/4020" },
      { label: "Canary PR #4022", url: "https://github.com/opentibiabr/canary/pull/4022" },
      { label: "Assets Editor PR #90", url: "https://github.com/Arch-Mina/Assets-Editor/pull/90" },
      { label: "Canary PR #4019", url: "https://github.com/opentibiabr/canary/pull/4019" }
    ],
    technologies: [
      "C++",
      "TCP framing",
      "XTEA",
      "checksums",
      "compression",
      "protocol profiles",
      "feature flags",
      "unit tests"
    ]
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
    id: "profile-aware-content-integrity-auditor",
    title: "Profile-Aware Content Integrity Auditor",
    context:
      "A large C++/Lua runtime loads mutually exclusive content profiles containing Lua scripts, XML registrations, protobuf-backed item definitions, storages, actions, movements, weapons, spells, monsters, and NPCs.",
    problem:
      "Cross-profile definitions could incorrectly satisfy each other, dynamic Lua expressions could be mistaken for authoritative references, invalid XML ranges could be silently skipped at runtime, and naive whole-repository scans produced noisy or unsafe results.",
    whatIOwned: [
      "Static-analysis architecture and Python CLI",
      "Profile-aware extraction and symbol model",
      "Lua, XML, and protobuf-backed data analysis",
      "Deterministic schema-validated artifacts",
      "Path safety, resource bounds, and atomic output",
      "CI gating, baseline fingerprints, documentation, and tests"
    ],
    technicalDecisions: [
      "Kept mutually exclusive runtime profiles isolated throughout extraction and validation",
      "Used conservative Lua analysis and left dynamic expressions unresolved instead of fabricating missing references",
      "Parsed authoritative protobuf fields instead of treating every numeric value as an item definition",
      "Rejected symlink escapes and constrained discovery and output paths to the repository",
      "Applied bounded token, fact, diagnostic, and finding limits for large or adversarial inputs",
      "Included occurrence multiplicity in semantic fingerprints so waivers cannot hide new duplicates"
    ],
    solution:
      "Built a deterministic profile-aware auditor that produces typed symbol registries, reference reports, unresolved coverage, stable fingerprints, CI annotations, and JSON/Markdown artifacts validated against bundled schemas.",
    impact:
      "Scanned 39,311 facts across two runtime profiles, corrected eight blocking content errors, reduced storage findings from 1,225 to 405 by removing false positives, and completed 72 tests with zero remaining scan errors.",
    evidenceStatus: "Public PR merged",
    evidence: [
      { label: "Canary PR #4031", url: "https://github.com/opentibiabr/canary/pull/4031" },
      { label: "Canary PR #4034", url: "https://github.com/opentibiabr/canary/pull/4034" }
    ],
    technologies: ["Python", "Lua analysis", "XML", "Protocol Buffers", "JSON Schema", "static analysis", "GitHub Actions"]
  },
  {
    id: "modern-client-asset-delivery-platform",
    title: "Versioned Client Asset Delivery & Release Platform",
    context:
      "Client delivery needed to support modern and legacy asset sets, server-specific modules, public launcher downloads, catalog visibility, operational monitoring, and versioned update metadata without exposing private implementation details.",
    problem:
      "Partner distribution was not a single-download problem. Different servers and client versions needed isolated asset trees, module sets, launch goals, update cadence, archive selection, catalog integrity, news, monitoring, and delivery rules through one controlled public entry point.",
    whatIOwned: [
      "Client-side launcher/runtime integration",
      "Catalog-driven multiserver delivery flow",
      "Automatic asset download and install flow",
      "Archive extraction and integrity checks",
      "Version-aware release archive selection",
      "Spritesheet catalog collision validation",
      "Admin-side asset monitoring and news APIs",
      "Windows release support"
    ],
    technicalDecisions: [
      "Kept final runtime files in existing client asset paths instead of introducing a second source of truth",
      "Used archive-first installation with manifest fallback behavior",
      "Matched release archives against the requested client version instead of accepting the first compatible file extension",
      "Reserved generated spritesheet names across each import batch and failed closed on duplicate or missing catalog entries",
      "Kept server-specific assets, modules, launch metadata, and catalog visibility separated through delivery rules",
      "Scoped public claims to the current Windows launcher surface and public PR evidence",
      "Kept private repository names, source, internal endpoints, signing material, and asset internals out of public copy"
    ],
    solution:
      "Integrated client asset automation, launcher/API delivery flows, version-aware archives, catalog validation, server-specific asset/module loading, partner rules, admin monitoring, news APIs, signed metadata, and release support.",
    impact:
      "Gives players and operators a controlled download/update path while preventing version-mismatched packages, repairing 11 spritesheet collisions, and preserving separation between server-specific packages and confidential partner operations.",
    evidenceStatus: "Public product",
    evidence: [
      { label: "OTCRP home", url: "https://otcrp.com/?lang=en" },
      { label: "OTCRP downloads", url: "https://otcrp.com/downloads" },
      { label: "OTClient PR #1727", url: "https://github.com/opentibiabr/otclient/pull/1727" },
      { label: "OTClient PR #1739", url: "https://github.com/opentibiabr/otclient/pull/1739" },
      { label: "OTClient PR #1766", url: "https://github.com/opentibiabr/otclient/pull/1766" },
      { label: "Assets Editor PR #91", url: "https://github.com/Arch-Mina/Assets-Editor/pull/91" },
      { label: "Canary PR #4019", url: "https://github.com/opentibiabr/canary/pull/4019" }
    ],
    technologies: [
      "C++",
      "Lua",
      "Go",
      "asset delivery",
      "catalog integrity",
      "launcher/API",
      "release operations",
      "monitoring"
    ]
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
    title: "Market/Inbox Data Safety",
    category: "Runtime Stability / Data Safety",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3893",
    summary: "Hardened inbox insertion with capacity checks, stack-aware behavior, atomicity, and tests."
  },
  {
    title: "Cross-Repository Release Integrity",
    category: "Release Engineering / CI",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/4019",
    summary:
      "Linked exact client/server release tags, validated required packages before publishing, and preserved authoritative client metadata."
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
    title: "Runtime Memory Ownership & Hot-path Safety",
    category: "C++ Runtime Reliability",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3987",
    summary: "Hardened Lua shared-userdata finalizers and reduced avoidable shared-pointer churn in synchronous hot paths."
  },
  {
    title: "Reproducible Runtime Stack & Smoke Tests",
    category: "Runtime Validation / Platform",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3963",
    summary:
      "Validated runtime startup across Linux, macOS, and Windows and provided a Docker quickstart with database and login services."
  },
  {
    title: "Livestream Protocol/Login Flow",
    category: "Multi-Repo Protocol Engineering",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3965",
    summary:
      "Connected read-only viewer sessions across C++ runtime state, protocol restrictions, persistence, Lua commands, and a Go login service."
  },
  {
    title: "Lua API Documentation Generator",
    category: "Developer Tooling",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/3771",
    summary: "Added generated Lua API docs and stubs for developer tooling."
  },
  {
    title: "Windows vcpkg Cache Coordination",
    category: "Build Systems / CI Reliability",
    evidenceStatus: "Public PR merged",
    url: "https://github.com/opentibiabr/canary/pull/4041",
    summary:
      "Serialized only Windows cache writers while preserving parallel read-only jobs, preventing duplicate NuGet publication races."
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
    "Other customer and partner names without publication approval",
    "Private repository names",
    "Private URLs or internal service addresses",
    "Proprietary code, assets, logs, private diagnostic artifacts, screenshots, and business metrics"
  ]
};
