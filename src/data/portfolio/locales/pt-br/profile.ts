import {
  aboutPage,
  contactPage,
  heroMetrics,
  homePage,
  navItems,
  pageNavItems,
  profile,
  recommendations,
  siteCopy
} from "../../profile";

export const profilePtBr: typeof profile = {
  ...profile,
  headline: "Engenheiro de Software C++ Sênior para Sistemas Críticos de Desempenho",
  subtitle:
    "Desenvolvo, otimizo e mantenho runtimes de backend em C++, sistemas integrados a Lua, software cliente/servidor orientado a protocolos, ferramentas multiplataforma e sistemas nos quais desempenho, estabilidade e correção dos dados são essenciais.",
  secondaryContext:
    "Experiência aplicada a infraestrutura online, plataformas de código aberto, produtos privados cliente/servidor e ferramentas de desenvolvimento no Linux e Windows.",
  description:
    "Engenheiro sênior de sistemas C++ que oferece desenvolvimento de software sob demanda, otimização de desempenho, apoio ao treinamento de modelos de IA para código, integrações e ferramentas para Linux e Windows.",
  expertise: [
    "engenharia de sistemas C++",
    "sistemas críticos de desempenho",
    "arquitetura de runtime",
    "protocolos cliente/servidor",
    "concorrência",
    "integração com Lua",
    "desenvolvimento para Linux e Windows",
    "software de código aberto",
    "desenvolvimento de software sob demanda",
    "inteligência artificial aplicada à engenharia de software",
    "apoio ao treinamento de modelos de código",
    "raciocínio sobre código"
  ],
  heroChips: ["Sistemas Runtime em C++", "Protocolos e Redes", "Desempenho e Confiabilidade", "Linux / Windows"]
};

export const navItemsPtBr: typeof navItems = [
  { label: "Competências", href: "#capabilities" },
  { label: "Impacto", href: "#impact-highlights" },
  { label: "Trabalhos", href: "#featured-work" },
  { label: "Evidências", href: "#evidence" }
];

export const pageNavItemsPtBr: typeof pageNavItems = [
  { label: "Portfólio", href: "/" },
  { label: "Serviços", href: "/services" },
  { label: "Sobre", href: "/about" },
  { label: "Contato", href: "/contact" }
];

export const siteCopyPtBr: typeof siteCopy = {
  menu: "Menu",
  navigation: "Navegação principal",
  portfolioNavigation: "Seções do portfólio",
  skipLink: "Ir para o conteúdo",
  footer: "Engenharia de sistemas C++ · Linux / Windows",
  backToTop: "Voltar ao topo",
  discussProject: "Falar sobre seu projeto",
  viewServices: "Conhecer os serviços",
  caseStudy: "Ler estudo de caso",
  language: { label: "Idioma" },
  theme: { label: "Aparência", light: "Claro", dark: "Escuro" },
  sidebar: {
    role: "Engenheiro sênior de sistemas C++",
    introduction: ["Runtimes, protocolos e ferramentas críticas de desempenho.", "Software sob demanda, da ideia à entrega."],
    contact: "Entrar em contato",
    platforms: "Linux / Windows"
  },
  business: {
    title: "Contratação e nota fiscal",
    description:
      "Os serviços profissionais podem ser contratados e faturados por meio da minha empresa brasileira (LTDA). Os dados da empresa e de faturamento são fornecidos durante a elaboração da proposta."
  }
};

export const aboutPagePtBr: typeof aboutPage = {
  title: "Sobre Eduardo Dantas — Engenheiro de Sistemas C++",
  description:
    "Conheça Eduardo Dantas: engenheiro sênior de sistemas C++, desenvolvedor de software sob demanda e colaborador de código aberto com experiência técnica no treinamento de modelos de IA voltados a código.",
  eyebrow: "Sobre",
  headline: "Eduardo Dantas",
  lead:
    "Engenheiro de software C++ sênior com atuação em runtimes críticos de desempenho, protocolos, confiabilidade, ferramentas de desenvolvimento e segurança de dados.",
  paragraphs: [
    "Desenvolvo software sob demanda para diferentes setores, desde a ideia de uma nova aplicação até melhorias em um produto existente. O escopo e a tecnologia são escolhidos de acordo com os usuários, requisitos e restrições.",
    "Investigo o comportamento de sistemas, avalio a viabilidade técnica e transformo problemas complexos em trabalhos de engenharia bem definidos. Minha experiência abrange runtimes C++ e Lua, software cliente/servidor, ferramentas para grandes volumes de dados e fluxos de build e release no Linux e Windows. Essa mesma experiência também dá suporte a trabalhos técnicos voltados ao treinamento de modelos de código, sem identificar clientes ou expor detalhes confidenciais dos projetos.",
    "OpenTibia é um dos domínios em que aplico essa experiência. Contribuições públicas em servidores, clientes e editores convivem com trabalho em ferramentas C++ upstream e projetos privados para clientes."
  ],
  approachTitle: "Como trabalho",
  approach: [
    "Investigar o comportamento e as restrições antes de escolher uma solução.",
    "Definir responsabilidades, dependências e critérios de aceitação desde o início.",
    "Entregar mudanças focadas, acompanhadas de uma transferência técnica clara."
  ],
  experienceTitle: "Trabalhos selecionados em código aberto",
  experienceDescription: "Um resumo rápido. O portfólio reúne contexto técnico, decisões e evidências públicas.",
  collaborationTitle: "Colaboração em produtos",
  privateTitle: "Trabalho privado",
  privateDescription: "Projetos selecionados para clientes, divulgados com a aprovação de seus responsáveis.",
  closingTitle: "Tem um projeto de software em mente?",
  closingDescription: "Conheça os serviços de desenvolvimento sob demanda e engenharia especializada ou entre em contato com um breve resumo da sua ideia."
};

export const homePagePtBr: typeof homePage = {
  title: "Eduardo Dantas — Engenheiro Sênior de Sistemas C++",
  eyebrow: "Trabalhos de engenharia selecionados",
  headline: ["Problemas resolvidos.", "Decisões explicadas."],
  introduction: "Uma seleção de trabalhos públicos, com evidências de implementação.",
  result: "Resultado",
  evidence: "Evidência",
  allWork: "Explorar os estudos de caso",
  caseStudiesTitle: "Estudos de caso de engenharia",
  caseStudiesDescription: "O contexto, as decisões e as evidências públicas por trás de cada trabalho.",
  capabilitiesTitle: "Competências e ferramentas",
  measurementsTitle: "Medições e resultados",
  contributionsTitle: "Contribuições de código aberto",
  moreContributions: "Ver mais contribuições",
  privateTitle: "Trabalho privado",
  privateLink: "Conhecer mais sobre minha experiência",
  recommendationsLink: "Ler recomendações no LinkedIn",
  contactTitle: "Tem um projeto de software em mente?",
  contactDescription: "Disponível para desenvolvimento de software sob demanda, consultoria técnica e posições seniores em engenharia C++.",
  caseLabels: {
    context: "Contexto",
    problem: "Problema",
    solution: "Solução",
    impact: "Impacto",
    ownership: "Minha responsabilidade",
    decisions: "Decisões técnicas",
    evidence: "Evidências públicas",
    technologies: "Tecnologias"
  }
};

export const contactPagePtBr: typeof contactPage = {
  title: "Contato — Software sob Demanda e Engenharia | Eduardo Dantas",
  description:
    "Converse com Eduardo Dantas sobre software sob demanda, novas aplicações, integrações, automação, consultoria técnica ou posições seniores em engenharia C++.",
  eyebrow: "Contato",
  headline: "Vamos conversar sobre seu projeto.",
  lead:
    "Tem uma ideia para um novo software ou um produto existente para melhorar? Conte para quem ele se destina, o que deve fazer e qual seria um bom resultado.",
  channel: {
    ...contactPage.channel,
    label: "Enviar mensagem no LinkedIn",
    description: "Comece com uma mensagem breve no LinkedIn. Podemos combinar o próximo passo e o canal mais adequado para a conversa técnica."
  },
  briefTitle: "Contexto útil para a primeira mensagem",
  briefIntroduction: "Uma ideia ou descrição breve é suficiente para começar; não é necessário ter uma especificação completa ou uma base de código existente.",
  brief: [
    { title: "Projeto ou ideia", description: "O que você quer construir, quem usará e se o trabalho começará do zero ou ampliará um produto existente." },
    { title: "Objetivo e requisitos", description: "O resultado esperado, os principais fluxos ou integrações e as restrições que você já conhece." },
    { title: "Prazo", description: "A data desejada e se existe flexibilidade." },
    { title: "Faixa de orçamento", description: "Uma estimativa aproximada para ajudar a definir um escopo realista." }
  ],
  privacyTitle: "Mantenha a primeira mensagem em alto nível",
  privacyDescription:
    "Não envie credenciais, código-fonte privado, dados de produção ou logs sensíveis. Se for necessário acesso técnico, primeiro combinaremos o escopo, a confidencialidade e uma forma adequada de compartilhamento.",
  nextTitle: "Próximos passos",
  nextDescription:
    "Esclarecemos os objetivos e a compatibilidade técnica e então definimos escopo, tecnologia, prazo e entregas em uma proposta. Uma descoberta ou avaliação paga pode ser útil quando os requisitos ou a viabilidade exigirem investigação.",
  rolesTitle: "Posições de engenharia e colaboração",
  rolesDescription: "Você também pode entrar em contato sobre posições seniores em engenharia C++ ou uma colaboração técnica bem definida."
};

export const heroMetricsPtBr: typeof heroMetrics = [
  { label: "Foco principal", value: "Sistemas backend em C++", detail: "Runtime, protocolos e desempenho" },
  { label: "Plataformas", value: "Linux / Windows", detail: "Builds, CI/CD e depuração" },
  { label: "Evidências", value: "PRs públicos", detail: "Código aberto, produtos e commits upstream" }
];

export const recommendationsPtBr: typeof recommendations = {
  ...recommendations,
  title: "Recomendações",
  headline: "Avaliações verificáveis de clientes e colaboradores.",
  description: "Depoimentos recentes de clientes e colegas estão disponíveis publicamente no meu perfil do LinkedIn."
};
