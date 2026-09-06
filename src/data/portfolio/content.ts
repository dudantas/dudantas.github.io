import { capabilities, impactHighlights } from "./capabilities";
import { aboutPage, contactPage, heroMetrics, homePage, navItems, pageNavItems, profile, recommendations, siteCopy } from "./profile";
import { serviceOfferings, servicesPage } from "./services";
import {
  caseStudies,
  experienceSummaries,
  featuredWork,
  portfolioConfidentiality,
  premiumClient,
  privateWork,
  publicEvidence,
  selectedContributions,
  workIndex
} from "./work";
import { ptBrContent } from "./locales/pt-br";
import type { Locale } from "../../i18n/routes";

export const englishContent = {
  profile,
  navItems,
  pageNavItems,
  siteCopy,
  aboutPage,
  homePage,
  contactPage,
  heroMetrics,
  recommendations,
  servicesPage,
  serviceOfferings,
  capabilities,
  impactHighlights,
  workIndex,
  portfolioConfidentiality,
  publicEvidence,
  featuredWork,
  caseStudies,
  selectedContributions,
  privateWork,
  experienceSummaries,
  premiumClient
};

export type PortfolioContent = typeof englishContent;

const contentByLocale: Record<Locale, PortfolioContent> = {
  en: englishContent,
  "pt-BR": ptBrContent
};

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return contentByLocale[locale];
}
