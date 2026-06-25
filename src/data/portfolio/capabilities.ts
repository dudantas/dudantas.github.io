import type { CapabilityGroup, ImpactHighlight } from "./types";

export const capabilities: CapabilityGroup[] = [
  {
    title: "Core Systems",
    summary: "Runtime architecture and performance-sensitive C++/Lua systems.",
    skills: ["C++", "Lua", "runtime architecture", "profiling", "memory ownership", "hot-path optimization"]
  },
  {
    title: "Protocols & Networking",
    summary: "Client/server flows, compatibility work, and protocol tooling.",
    skills: ["TCP client/server flows", "protocol compatibility", "Protobuf", "login/session flows", "capture tooling"]
  },
  {
    title: "Build & Platform",
    summary: "Cross-platform build, packaging, and developer workflows.",
    skills: ["CMake", "vcpkg", "GitHub Actions", "Docker", "Linux workflows", "Windows workflows"]
  },
  {
    title: "Reliability & Data Safety",
    summary: "State mutation, persistence, and runtime correctness work.",
    skills: ["SQL / MariaDB", "persistence invariants", "mutation safety", "runtime stability", "test coverage"]
  },
  {
    title: "Product Delivery",
    summary: "Public delivery surfaces, launcher/API integration, and release operations.",
    skills: ["launcher/API integration", "asset delivery", "signed metadata", "telemetry", "crash reporting", "release operations"]
  }
];

export const impactHighlights: ImpactHighlight[] = [
  {
    value: "~54s -> 1.5-3.0s",
    label: "runtime startup",
    detail: "Reduced C++/Lua server startup time in public PR measurements.",
    url: "https://github.com/opentibiabr/canary/pull/3968",
    evidenceLabel: "Canary PR #3968"
  },
  {
    value: "508s -> 55s",
    label: "build step PoC",
    detail: "Reduced Protobuf lite runtime build time in local PoC measurements.",
    url: "https://github.com/protocolbuffers/protobuf/commit/7c090172a4f502a06e3a3c23df8a3242b03f3148",
    evidenceLabel: "Protobuf landed commit"
  },
  {
    value: "139,767 -> 126",
    label: "sampled CPU",
    detail: "Reduced sampled CPU in static viewport rendering.",
    url: "https://github.com/opentibiabr/remeres-map-editor/pull/188",
    evidenceLabel: "RME PR #188"
  },
  {
    value: "17,830 -> 2,230",
    label: "allocator refills",
    detail: "Reduced allocator slab refills during large map operations.",
    url: "https://github.com/opentibiabr/remeres-map-editor/pull/188",
    evidenceLabel: "RME PR #188"
  },
  {
    value: "Linux / macOS / Windows",
    label: "runtime CI",
    detail: "Added cross-platform runtime smoke coverage.",
    url: "https://github.com/opentibiabr/canary/pull/3963",
    evidenceLabel: "Canary PR #3963"
  },
  {
    value: "Multi-server",
    label: "delivery surface",
    detail: "Catalog-based client asset and module delivery for supported servers.",
    url: "https://otcrp.com/?lang=en",
    evidenceLabel: "OTCRP product"
  }
];
