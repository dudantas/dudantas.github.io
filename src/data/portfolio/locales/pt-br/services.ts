import { serviceOfferings, servicesPage } from "../../services";

export const servicesPagePtBr: typeof servicesPage = {
  title: "Desenvolvimento de Software sob Demanda — Eduardo Dantas",
  description:
    "Desenvolvimento de software para produtos novos e existentes: aplicações, APIs, integrações, automação e engenharia especializada de sistemas C++.",
  eyebrow: "Serviços",
  headline: "Software sob demanda & engenharia.",
  lead:
    "Software construído para sua necessidade: aplicações, APIs, integrações, automações e ferramentas internas. Da ideia inicial a um produto existente, a tecnologia e o escopo são definidos para cada projeto.",
  primaryCta: "Falar sobre seu projeto",
  secondaryCta: "Encontrar o escopo adequado",
  fitTitle: "Quando posso ajudar",
  fit: [
    "Você tem uma ideia para uma nova aplicação, serviço ou ferramenta interna.",
    "Um produto existente precisa de novos recursos ou integrações.",
    "Um software está lento, instável ou difícil de diagnosticar.",
    "Processos manuais ou ferramentas frágeis estão atrasando sua equipe."
  ],
  offersTitle: "Formas de trabalharmos juntos",
  offersDescription: "Comece pelo que você precisa construir ou melhorar. Escopo, tecnologia, entregas e critérios de aceitação são combinados para cada projeto.",
  deliverablesLabel: "O que você recebe",
  scopeLabel: "Escopo e pré-requisitos",
  outsideLabel: "Fora do escopo inicial",
  assessmentLabel: "Antes da implementação",
  evidenceLabel: "Trabalhos relacionados",
  openTibia: {
    eyebrow: "Experiência no domínio · OpenTibia",
    title: "Engenharia de cliente, servidor e ferramentas.",
    description:
      "OpenTibia é um dos domínios em que aplico esse trabalho. A experiência com Canary, OTClient e Remere's Map Editor envolve integração C++/Lua, compatibilidade de protocolos, desempenho de runtime, segurança de dados e fluxos de assets.",
    scope:
      "Cada proposta define a base suportada, versões, dependências e limites de entrega. Bases completas de servidor e suporte contínuo a um conjunto ilimitado de forks ficam fora desses projetos.",
    rights:
      "Trabalhos que envolvem código ou empacotamento de assets começam pela verificação das licenças e direitos de distribuição aplicáveis. O código público permanece sujeito à licença original.",
    linkLabel: "Explorar o portfólio de engenharia"
  },
  processTitle: "Um caminho claro da ideia à entrega",
  process: [
    { title: "Resumo", description: "Compartilhe sua ideia ou problema, usuários, objetivos, prazo e faixa de orçamento." },
    { title: "Avaliação", description: "Esclarecemos requisitos e viabilidade, com descoberta ou investigação paga quando necessário." },
    { title: "Acordo", description: "Definimos escopo, tecnologia, entregas, dependências e critérios de aceitação em uma proposta." },
    { title: "Implementação", description: "Executamos o trabalho aprovado dentro dos limites técnicos combinados." },
    { title: "Entrega", description: "Revisamos os critérios acordados, entregamos o trabalho e documentamos os próximos passos." }
  ],
  supportTitle: "Suporte posterior",
  supportDescription:
    "A manutenção pode ser contratada separadamente, conforme disponibilidade, carga horária e expectativas de atendimento e cobertura. Os projetos não incluem suporte ilimitado nem disponibilidade 24 horas por dia.",
  closingTitle: "Comece com uma ideia ou um problema para resolver.",
  closingDescription: "Um resumo breve é suficiente para começar. Acesso técnico e materiais sensíveis podem aguardar até que o escopo e os termos de confidencialidade estejam claros.",
  assessmentCta: "Solicitar uma avaliação técnica"
};

export const serviceOfferingsPtBr: typeof serviceOfferings = [
  {
    ...serviceOfferings[0],
    title: "Desenvolvimento de Software sob Demanda",
    summary: "Aplicações web e desktop, APIs e ferramentas internas, construídas do zero ou como parte de um produto existente.",
    deliverables: [
      "Escopo, marcos e critérios de aceitação definidos.",
      "O software combinado, com testes para seus fluxos principais.",
      "Documentação de uso e transferência técnica conforme acordado."
    ],
    outsideScope: "Recursos adicionais, custos de terceiros e operação ou manutenção contínua, salvo quando incluídos na proposta.",
    assessment: "Esclarecemos usuários, fluxos, integrações e necessidades de entrega antes de selecionar a tecnologia. Uma etapa paga de descoberta pode ser proposta quando requisitos ou viabilidade exigirem investigação."
  },
  {
    ...serviceOfferings[1],
    title: "Avaliação de Desempenho e Estabilidade",
    summary: "Uma investigação delimitada sobre inicialização lenta, comportamento caro em runtime, falhas ou riscos de correção dos dados.",
    deliverables: [
      "Conclusões baseadas em evidências no ambiente combinado.",
      "Gargalos, riscos e questões pendentes priorizados.",
      "Um plano prático de correção e próximos passos recomendados."
    ],
    outsideScope: "Implementação, monitoramento contínuo, resposta a incidentes e ganhos de desempenho garantidos. Uma auditoria de segurança exige escopo próprio.",
    assessment: "A avaliação é a entrega paga. Restrições de reprodução e necessidades de acesso são combinadas previamente; a implementação pode ser proposta separadamente."
  },
  {
    ...serviceOfferings[2],
    title: "Recursos e Integrações",
    summary: "Recursos, APIs e integrações de protocolo para aplicações e sistemas cliente/servidor existentes, incluindo runtimes C++/Lua.",
    deliverables: [
      "O recurso ou a integração acordada em sua aplicação ou serviço.",
      "Limites de versão e critérios de aceitação explícitos.",
      "Validação segundo os critérios combinados e transferência técnica."
    ],
    outsideScope: "Migrações de bases completas, compatibilidade universal, recursos não relacionados e manutenção contínua, salvo acordo separado.",
    assessment: "Uma avaliação paga pode ser necessária para APIs ou protocolos sem documentação, código legado, dependências incertas ou requisitos de compatibilidade pouco claros."
  },
  {
    ...serviceOfferings[3],
    title: "Ferramentas e Automação",
    summary: "Ferramentas e automações para tarefas repetitivas, fluxos de dados, diagnósticos, builds e operações de desenvolvimento.",
    deliverables: [
      "Uma ferramenta ou automação focada no fluxo acordado.",
      "Entradas, saídas e comportamento em caso de falha definidos.",
      "Documentação de uso e uma transferência técnica sustentável."
    ],
    outsideScope: "Uma aplicação completa ou plataforma SaaS pertence ao escopo de software sob demanda. Integrações ilimitadas, operação contínua e redistribuição sem os direitos necessários não estão incluídas.",
    assessment: "Uma avaliação paga pode ser necessária quando o fluxo, os formatos de dados, o ambiente ou os direitos de empacotamento exigirem investigação."
  }
];
