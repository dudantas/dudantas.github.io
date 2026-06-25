export type LinkItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type EvidenceLink = {
  label: string;
  url?: string;
};

export type CapabilityGroup = {
  title: string;
  summary: string;
  skills: string[];
};

export type ImpactHighlight = {
  value: string;
  label: string;
  detail: string;
  url?: string;
  evidenceLabel?: string;
};

export type FeaturedWorkItem = {
  title: string;
  eyebrow: string;
  evidenceStatus: string;
  caseStudyId?: string;
  url?: string;
  evidenceLabel?: string;
  relatedUrls?: EvidenceLink[];
  summary: string;
  impact: string;
  metrics: Metric[];
  tags: string[];
  clientVerifiedLabel?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  context: string;
  problem: string;
  whatIOwned: string[];
  technicalDecisions: string[];
  solution: string;
  impact: string;
  evidenceStatus: string;
  evidence: EvidenceLink[];
  technologies: string[];
};

export type SelectedContribution = {
  title: string;
  category: string;
  evidenceStatus: string;
  url: string;
  linkLabel?: string;
  summary: string;
};
