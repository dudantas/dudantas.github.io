import type { ServiceOffering } from "./types";

export const servicesPage = {
  title: "Engineering Services — Eduardo Dantas",
  description:
    "Scoped C++ and Lua engineering: performance and stability assessments, feature and protocol integration, and developer tooling and automation.",
  eyebrow: "Services",
  headline: "Engineering services for C++ runtime systems.",
  lead:
    "Focused technical work for teams that need better performance, reliable behavior, clear protocol contracts, or a more effective development workflow.",
  primaryCta: "Discuss your project",
  secondaryCta: "Find the right scope",
  fitTitle: "When to bring me in",
  fit: [
    "A runtime is slow, unstable, or difficult to diagnose.",
    "A feature or protocol change needs careful integration.",
    "Manual tooling or fragile builds are slowing delivery."
  ],
  offersTitle: "Three focused engagements",
  offersDescription: "Choose a starting point. The supported environment, deliverables, and acceptance criteria are agreed for each engagement.",
  deliverablesLabel: "What you receive",
  scopeLabel: "Scope & prerequisites",
  outsideLabel: "Outside the initial scope",
  assessmentLabel: "Before implementation",
  evidenceLabel: "Related work",
  openTibia: {
    eyebrow: "OpenTibia systems",
    title: "Systems expertise, applied to your server and tools.",
    description:
      "Scoped engineering across Canary, OTClient, Remere's Map Editor, C++/Lua integration, protocol compatibility, runtime performance, data safety, and asset workflows.",
    scope:
      "Each proposal names the supported base, versions, dependencies, and delivery boundary. Full server bases and ongoing support for an unlimited set of forks are outside these engagements.",
    rights:
      "Work involving code or asset packaging starts with the applicable licenses and distribution rights. Public code remains subject to its original license.",
    linkLabel: "Explore the engineering portfolio"
  },
  processTitle: "A clear path from problem to handover",
  process: [
    { title: "Brief", description: "Share the problem, goals, environment, timeline, and budget range." },
    { title: "Assess", description: "Use a paid investigation when the cause, feasibility, or delivery risk is unclear." },
    { title: "Agree", description: "Define scope, deliverables, dependencies, and acceptance criteria in a proposal." },
    { title: "Implement", description: "Execute the approved work within the agreed technical boundary." },
    { title: "Hand over", description: "Review the agreed criteria, deliver the work, and document the next steps." }
  ],
  supportTitle: "Follow-up support",
  supportDescription:
    "Maintenance can be scoped separately, subject to capacity and agreed hours, response expectations, and coverage. Engagements do not include unlimited support or 24/7 availability.",
  closingTitle: "Start with the problem you need to solve.",
  closingDescription: "A short briefing is enough to begin. Technical access and sensitive materials can wait until the scope and confidentiality arrangements are clear.",
  assessmentCta: "Request a technical assessment"
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "assessment",
    title: "Performance & Stability Assessment",
    summary: "A bounded investigation into slow startup, expensive runtime behavior, crashes, or data correctness risks.",
    deliverables: [
      "Evidence-backed findings within the agreed environment.",
      "Prioritized bottlenecks, risks, and unresolved questions.",
      "A practical correction plan and recommended next steps."
    ],
    outsideScope: "Implementation, continuous monitoring, incident response, and guaranteed performance gains. A security audit is a separate scope.",
    assessment: "The assessment is the paid deliverable. Reproduction constraints and access requirements are agreed up front; implementation can be proposed separately.",
    caseStudyIds: ["cpp-lua-runtime-startup-performance"]
  },
  {
    id: "integration",
    title: "Feature & Protocol Integration",
    summary: "Specific implementation or adaptation work for C++/Lua runtimes and protocol-driven client/server software.",
    deliverables: [
      "An agreed feature or integration in the supported codebase.",
      "Explicit version boundaries and acceptance criteria.",
      "Validation against the agreed criteria and a technical handover."
    ],
    outsideScope: "Whole-codebase ports, universal compatibility, unrelated features, and ongoing maintenance of every client or fork.",
    assessment: "A paid assessment may be needed for an unfamiliar fork, incomplete protocol evidence, uncertain dependencies, or unclear compatibility requirements.",
    caseStudyIds: ["runtime-multiprotocol-networking-architecture"]
  },
  {
    id: "tooling",
    title: "Developer Tooling & Automation",
    summary: "Purpose-built improvements for diagnostics, data and asset workflows, builds, and development operations.",
    deliverables: [
      "A focused tool or automation for an agreed workflow.",
      "Defined inputs, outputs, and failure behavior.",
      "Usage documentation and a maintainable handover."
    ],
    outsideScope: "A new SaaS platform, unlimited integrations, continuous infrastructure operations, or redistribution without the necessary rights.",
    assessment: "A paid assessment may be needed when the workflow, data formats, environment, or packaging rights require investigation.",
    caseStudyIds: ["cpp-build-system-protobuf-packaging-optimization", "large-data-load-save-rendering-optimization"]
  }
];
