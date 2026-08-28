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

export const heroMetrics: Metric[] = [
  { label: "Primary focus", value: "C++ backend systems", detail: "Runtime, protocols, performance" },
  { label: "Platforms", value: "Linux / Windows", detail: "Builds, CI/CD, debugging" },
  { label: "Evidence", value: "Public evidence", detail: "PRs, products, upstream commits" }
];

export const recommendations = {
  profileUrl: "https://www.linkedin.com/in/dudantas",
  title: "Client and collaborator feedback",
  headline: "References are available on request.",
  description:
    "Public recommendations are added only after the author approves publication.",
  cardLabel: "Client-approved reference",
  cardTitle: "Request a reference",
  cardDescription:
    "Contact me on LinkedIn to request a relevant client or collaborator reference.",
  cardLinkLabel: "Contact on LinkedIn"
};
