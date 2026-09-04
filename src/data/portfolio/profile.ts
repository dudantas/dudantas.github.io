import type { LinkItem, Metric } from "./types";

export const profile = {
  name: "Eduardo Dantas",
  handle: "dudantas",
  headline: "Senior C++ Software Engineer for Performance-Critical Systems",
  subtitle:
    "I build, optimize, and maintain C++ backend runtimes, Lua-integrated systems, protocol-driven client/server software, cross-platform tooling, and production-grade systems where performance, stability, and data correctness matter.",
  secondaryContext:
    "Applied across online infrastructure, open-source platforms, private client/server products, and developer tooling across Linux and Windows.",
  description:
    "Senior C++ engineer focused on performance-critical backend runtimes, protocols, Linux/Windows systems, build tooling, reliability, and data safety.",
  heroChips: ["C++ Runtime Systems", "Protocols & Networking", "Performance & Reliability", "Linux / Windows"],
  links: [
    { label: "GitHub", href: "https://github.com/dudantas" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dudantas" }
  ] satisfies LinkItem[]
};

export const navItems: LinkItem[] = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Impact", href: "#impact-highlights" },
  { label: "Work", href: "#featured-work" },
  { label: "Evidence", href: "#evidence" }
];

export const pageNavItems: LinkItem[] = [
  { label: "Portfolio", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const siteCopy = {
  menu: "Menu",
  navigation: "Main navigation",
  portfolioNavigation: "Portfolio sections",
  skipLink: "Skip to content",
  footer: "C++ systems engineering · Linux / Windows",
  backToTop: "Back to top",
  discussProject: "Discuss your project",
  viewServices: "Explore services",
  caseStudy: "Read case study",
  sidebar: {
    role: "Senior C++ systems engineer",
    introduction: "Performance-critical runtimes, protocols, and tooling. Built with care for reliability and data safety.",
    contact: "Get in touch",
    platforms: "Linux / Windows"
  },
  business: {
    title: "Business & invoicing",
    description:
      "Professional services can be contracted and invoiced through my Brazilian limited liability company (LTDA). Company and invoicing details are provided during the proposal process."
  }
};

export const aboutPage = {
  title: "About Eduardo Dantas — C++ Systems Engineer",
  description:
    "Meet Eduardo Dantas: senior C++ systems engineer, open-source contributor, and collaborator on client/server products and developer tools.",
  eyebrow: "About",
  headline: "Eduardo Dantas",
  lead:
    "Senior C++ software engineer working across performance-critical runtimes, protocols, reliability, developer tooling, and data safety.",
  paragraphs: [
    "I investigate how systems behave, assess technical feasibility, and turn complex problems into focused engineering work. My experience spans C++ and Lua runtimes, client/server software, large-data tools, and build and release workflows across Linux and Windows.",
    "OpenTibia is a long-standing application of that work. Public contributions to its servers, clients, and editors sit alongside upstream C++ tooling contributions and private client engagements."
  ],
  approachTitle: "How I work",
  approach: [
    "Investigate the behavior and constraints before choosing a solution.",
    "Define ownership, dependencies, and acceptance criteria early.",
    "Deliver focused changes with a clear technical handover."
  ],
  experienceTitle: "Selected open-source work",
  experienceDescription: "A quick overview. The portfolio has the technical context, decisions, and public evidence.",
  collaborationTitle: "Product collaboration",
  privateTitle: "Private work",
  privateDescription: "Selected client work, shared with the owner's approval.",
  closingTitle: "Have a systems problem to work through?",
  closingDescription: "Explore the service scopes or get in touch with a short description of your project."
};

export const contactPage = {
  title: "Contact Eduardo Dantas — Engineering & Consulting",
  description:
    "Contact Eduardo Dantas about C++ engineering, technical assessments, client/server integration, developer tooling, or senior engineering roles.",
  eyebrow: "Contact",
  headline: "Let's discuss your project.",
  lead:
    "Tell me what you are building, what is getting in the way, and what a useful outcome would look like.",
  channel: {
    label: "Message me on LinkedIn",
    href: profile.links.find((link) => link.label === "LinkedIn")!.href,
    description: "Start with a short message on LinkedIn. We can agree on the next step and a suitable channel for the technical discussion."
  },
  briefTitle: "Useful context for your first message",
  briefIntroduction: "A few details help establish whether the work is a good fit. A full specification is not required.",
  brief: [
    { title: "System & version", description: "The product, codebase or fork, relevant version, and operating environment." },
    { title: "Problem & intended outcome", description: "What happens today, what you need to change, and any constraints you already know." },
    { title: "Timeline", description: "Your target date and whether it is flexible." },
    { title: "Budget range", description: "An approximate range to help shape a realistic scope." }
  ],
  privacyTitle: "Keep the first message high level",
  privacyDescription:
    "Please do not send credentials, private source code, production data, or sensitive logs. If technical access is needed, we will agree on scope, confidentiality, and a suitable sharing method first.",
  nextTitle: "What happens next",
  nextDescription:
    "We establish the problem and fit, then define a proposal or a paid assessment when investigation is needed. Timing, deliverables, and any follow-up support are agreed for the engagement.",
  rolesTitle: "Engineering roles & collaboration",
  rolesDescription:
    "You can also reach out about senior C++ engineering roles or a clearly defined technical collaboration."
};

export const heroMetrics: Metric[] = [
  { label: "Primary focus", value: "C++ backend systems", detail: "Runtime, protocols, performance" },
  { label: "Platforms", value: "Linux / Windows", detail: "Builds, CI/CD, debugging" },
  { label: "Evidence", value: "Public PRs", detail: "Open source, products, upstream commits" }
];

export const recommendations = {
  profileUrl:
    "https://www.linkedin.com/in/dudantas/details/recommendations/",
  title: "Recommendations",
  headline: "Verified feedback from clients and collaborators.",
  description:
    "Recent client and peer testimonials are available on my public LinkedIn profile."
};
