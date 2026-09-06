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
    "Senior C++ systems engineer offering custom software development, performance optimization, integrations, and developer tooling across Linux and Windows.",
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
  language: { label: "Language" },
  theme: { label: "Appearance", light: "Light", dark: "Dark" },
  sidebar: {
    role: "Senior C++ systems engineer",
    introduction: ["Performance-critical runtimes, protocols, and tooling.", "Custom software development, from idea to delivery."],
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
    "Meet Eduardo Dantas: senior C++ systems engineer, custom software developer, and open-source contributor working across different application domains.",
  eyebrow: "About",
  headline: "Eduardo Dantas",
  lead:
    "Senior C++ software engineer working across performance-critical runtimes, protocols, reliability, developer tooling, and data safety.",
  paragraphs: [
    "I develop custom software for different industries, from an idea for a new application to improvements in an existing product. The scope and technology are chosen around the users, requirements, and constraints.",
    "I investigate how systems behave, assess technical feasibility, and turn complex problems into focused engineering work. My experience spans C++ and Lua runtimes, client/server software, large-data tools, and build and release workflows across Linux and Windows.",
    "OpenTibia is one of the domains where I apply that experience. Public contributions to its servers, clients, and editors sit alongside upstream C++ tooling contributions and private client engagements."
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
  closingTitle: "Have a software project in mind?",
  closingDescription: "Explore custom development and specialist engineering services, or get in touch with a short description of your idea."
};

export const homePage = {
  title: "Eduardo Dantas — Senior C++ Systems Engineer",
  eyebrow: "Selected engineering work",
  headline: ["Problems solved.", "Decisions explained."],
  introduction: "A selection of public work, with implementation evidence.",
  result: "Result",
  evidence: "Evidence",
  allWork: "Explore the case studies",
  caseStudiesTitle: "Engineering case studies",
  caseStudiesDescription: "The context, decisions, and public evidence behind the work.",
  capabilitiesTitle: "Expertise & tools",
  measurementsTitle: "Measurements & outcomes",
  contributionsTitle: "Open-source contributions",
  moreContributions: "View more contributions",
  privateTitle: "Private work",
  privateLink: "More about my experience",
  recommendationsLink: "Read recommendations on LinkedIn",
  contactTitle: "Have a software project in mind?",
  contactDescription: "Available for custom software development, technical consulting, and senior C++ engineering roles.",
  caseLabels: {
    context: "Context", problem: "Problem", solution: "Solution", impact: "Impact",
    ownership: "What I owned", decisions: "Technical decisions", evidence: "Public evidence", technologies: "Technologies"
  }
};

export const contactPage = {
  title: "Contact Eduardo Dantas — Custom Software & Engineering",
  description:
    "Discuss custom software development, new applications, integrations, automation, technical consulting, or senior C++ engineering roles with Eduardo Dantas.",
  eyebrow: "Contact",
  headline: "Let's discuss your project.",
  lead:
    "Have an idea for new software or an existing product to improve? Tell me who it is for, what it should do, and what a useful outcome would look like.",
  channel: {
    label: "Message me on LinkedIn",
    href: profile.links.find((link) => link.label === "LinkedIn")!.href,
    description: "Start with a short message on LinkedIn. We can agree on the next step and a suitable channel for the technical discussion."
  },
  briefTitle: "Useful context for your first message",
  briefIntroduction: "An idea or a short description is enough to start; a full specification or existing codebase is not required.",
  brief: [
    { title: "Project or idea", description: "What you want to build, who will use it, and whether you are starting from scratch or extending an existing product." },
    { title: "Goal & requirements", description: "The outcome you need, key workflows or integrations, and any constraints you already know." },
    { title: "Timeline", description: "Your target date and whether it is flexible." },
    { title: "Budget range", description: "An approximate range to help shape a realistic scope." }
  ],
  privacyTitle: "Keep the first message high level",
  privacyDescription:
    "Please do not send credentials, private source code, production data, or sensitive logs. If technical access is needed, we will agree on scope, confidentiality, and a suitable sharing method first.",
  nextTitle: "What happens next",
  nextDescription:
    "We clarify the goals and technical fit, then define scope, technology, timeline, and deliverables in a proposal. A paid discovery or assessment may be useful when requirements or feasibility need investigation.",
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
