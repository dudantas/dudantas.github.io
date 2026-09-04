import type { ServiceOffering } from "./types";

export const servicesPage = {
  title: "Custom Software Development & Engineering — Eduardo Dantas",
  description:
    "Custom software development for new and existing products: applications, APIs, integrations, automation, and specialist C++ systems engineering.",
  eyebrow: "Services",
  headline: "Custom software development & engineering.",
  lead:
    "Software built around your needs: applications, APIs, integrations, automations, and internal tools. From an initial idea to an existing product, the technology and scope are chosen for the project.",
  primaryCta: "Discuss your project",
  secondaryCta: "Find the right scope",
  fitTitle: "When to bring me in",
  fit: [
    "You have an idea for a new application, service, or internal tool.",
    "An existing product needs new features or integrations.",
    "Software is slow, unstable, or difficult to diagnose.",
    "Manual workflows or fragile tooling are slowing your team down."
  ],
  offersTitle: "Ways we can work together",
  offersDescription: "Start with what you need to build or improve. Scope, technology, deliverables, and acceptance criteria are agreed for each project.",
  deliverablesLabel: "What you receive",
  scopeLabel: "Scope & prerequisites",
  outsideLabel: "Outside the initial scope",
  assessmentLabel: "Before implementation",
  evidenceLabel: "Related work",
  openTibia: {
    eyebrow: "Domain experience · OpenTibia",
    title: "Client, server & tooling engineering.",
    description:
      "OpenTibia is one domain where I apply this work. Experience across Canary, OTClient, and Remere's Map Editor covers C++/Lua integration, protocol compatibility, runtime performance, data safety, and asset workflows.",
    scope:
      "Each proposal names the supported base, versions, dependencies, and delivery boundary. Full server bases and ongoing support for an unlimited set of forks are outside these engagements.",
    rights:
      "Work involving code or asset packaging starts with the applicable licenses and distribution rights. Public code remains subject to its original license.",
    linkLabel: "Explore the engineering portfolio"
  },
  processTitle: "A clear path from idea to handover",
  process: [
    { title: "Brief", description: "Share your idea or problem, intended users, goals, timeline, and budget range." },
    { title: "Assess", description: "Clarify requirements and feasibility, with paid discovery or investigation when needed." },
    { title: "Agree", description: "Define scope, technology, deliverables, dependencies, and acceptance criteria in a proposal." },
    { title: "Implement", description: "Execute the approved work within the agreed technical boundary." },
    { title: "Hand over", description: "Review the agreed criteria, deliver the work, and document the next steps." }
  ],
  supportTitle: "Follow-up support",
  supportDescription:
    "Maintenance can be scoped separately, subject to capacity and agreed hours, response expectations, and coverage. Engagements do not include unlimited support or 24/7 availability.",
  closingTitle: "Start with an idea or a problem to solve.",
  closingDescription: "A short briefing is enough to begin. Technical access and sensitive materials can wait until the scope and confidentiality arrangements are clear.",
  assessmentCta: "Request a technical assessment"
};

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "custom-development",
    title: "Custom Software Development",
    summary: "Web and desktop applications, APIs, and internal tools, built from scratch or as part of an existing product.",
    deliverables: [
      "A defined scope, milestones, and acceptance criteria.",
      "The agreed software, with tests for its core workflows.",
      "Usage documentation and an agreed technical handover."
    ],
    outsideScope: "Extra features, third-party costs, and ongoing operations or maintenance unless included in the proposal.",
    assessment: "We clarify users, workflows, integrations, and delivery needs before selecting the technology. A paid discovery phase may be proposed when requirements or feasibility need investigation.",
    caseStudyIds: []
  },
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
    title: "Features & Integrations",
    summary: "Features, APIs, and protocol integrations for existing applications and client/server systems, including C++/Lua runtimes.",
    deliverables: [
      "An agreed feature or integration in your application or service.",
      "Explicit version boundaries and acceptance criteria.",
      "Validation against the agreed criteria and a technical handover."
    ],
    outsideScope: "Whole-codebase ports, universal compatibility, unrelated features, and ongoing maintenance unless agreed separately.",
    assessment: "A paid assessment may be needed for undocumented APIs or protocols, legacy code, uncertain dependencies, or unclear compatibility requirements.",
    caseStudyIds: ["runtime-multiprotocol-networking-architecture"]
  },
  {
    id: "tooling",
    title: "Tooling & Automation",
    summary: "Tools and automations for repetitive tasks, data workflows, diagnostics, builds, and development operations.",
    deliverables: [
      "A focused tool or automation for an agreed workflow.",
      "Defined inputs, outputs, and failure behavior.",
      "Usage documentation and a maintainable handover."
    ],
    outsideScope: "A full application or SaaS platform belongs in a custom development scope. Unlimited integrations, continuous operations, and redistribution without the necessary rights are not included.",
    assessment: "A paid assessment may be needed when the workflow, data formats, environment, or packaging rights require investigation.",
    caseStudyIds: ["cpp-build-system-protobuf-packaging-optimization", "large-data-load-save-rendering-optimization"]
  }
];
