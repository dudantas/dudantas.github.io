import type { CaseStudy } from "../../types";
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
} from "../../work";

const publicPrMerged = "PR público integrado";
const mergedAndFieldValidated = "Integrado e validado em campo";

export const workIndexPtBr: typeof workIndex = [
  {
    ...workIndex[0],
    category: "Desempenho de runtime",
    title: "Inicialização C++ / Lua mais rápida",
    summary: "Melhorias em caminhos críticos do carregamento de scripts e da inicialização do runtime."
  },
  {
    ...workIndex[1],
    category: "Ferramentas de build",
    title: "Builds mais leves do Protobuf",
    summary: "Empacotamento limitado para runtimes C++ no ambiente de destino."
  },
  {
    ...workIndex[2],
    category: "Protocolos e redes",
    title: "Um runtime. Várias gerações de clientes.",
    summary: "Contratos explícitos de transporte e compatibilidade em um runtime C++ compartilhado.",
    note: "Projetei codecs de transporte, perfis de runtime, indicações de sessão e payloads condicionados por versão para que gerações modernas e legadas de clientes compartilhem um runtime C++. O estudo de caso apresenta os limites de compatibilidade, as decisões de implementação e as evidências públicas."
  }
];

export const portfolioConfidentialityPtBr: typeof portfolioConfidentiality = {
  title: "Trabalho confidencial e NDAs",
  description:
    "A maior parte do meu trabalho para clientes é confidencial e protegida por acordos de não divulgação (NDAs). Os projetos apresentados aqui são uma seleção de trabalhos públicos e referências aprovadas pelos clientes, não um registro completo da minha atuação.",
  boundary: "Detalhes confidenciais, código e assets dos projetos permanecem privados."
};

export const publicEvidencePtBr: typeof publicEvidence = {
  title: "Evidências Públicas e Contribuições",
  headline: "Sempre que possível, as afirmações estão vinculadas a artefatos públicos.",
  description:
    "Este portfólio prioriza PRs integrados, commits upstream, páginas públicas de produtos e evidências entre repositórios. O trabalho privado fica separado e é descrito apenas no nível de arquitetura e resultado permitido para divulgação.",
  points: [
    {
      title: "Sistemas de código aberto",
      summary: "Contribuições para Canary, OTClient, Remere's Map Editor, Assets Editor, login-server, vcpkg e Protocol Buffers."
    },
    {
      title: "Sistemas validados em campo",
      summary: "Agendamento de runtime e implantações multiprotocolo, páginas públicas de launcher e download, smoke tests, fluxos de release e entrega a parceiros."
    },
    {
      title: "Limites do trabalho privado",
      summary: "Repositórios, endpoints, logs, artefatos de diagnóstico, capturas de tela, assets e métricas comerciais privadas não aparecem no conteúdo público."
    }
  ]
};

export const featuredWorkPtBr: typeof featuredWork = [
  {
    ...featuredWork[0],
    title: "Desempenho da Inicialização de Runtime C++ com Integração Lua",
    eyebrow: "Engenharia de Desempenho",
    evidenceStatus: publicPrMerged,
    summary: "Otimizei caminhos críticos da inicialização no carregamento Lua, parsing do mapa, caches, indexação e spawns.",
    impact: "Reduzi um grande gargalo de inicialização do runtime C++ preservando o comportamento da integração Lua.",
    metrics: [{ value: "~54s -> 1.5-3.0s", label: "carregamento de scripts e módulos" }]
  },
  {
    ...featuredWork[1],
    title: "Agendamento Justo de Runtime e Computação Paralela",
    eyebrow: "Concorrência e Desempenho de Runtime",
    evidenceStatus: mergedAndFieldValidated,
    summary: "Projetei agendamento limitado e consciente de filas, além de computação multinúcleo para decisões caras, preservando a mutação de estado autoritativa.",
    impact: "Melhorei a responsividade percebida pelos jogadores sob cargas pesadas usando justiça, backpressure, snapshots imutáveis e rejeição de resultados obsoletos.",
    metrics: [
      { value: "264 / 264", label: "testes unitários e de regressão" },
      { value: "Multinúcleo", label: "serviço de computação limitada" }
    ]
  },
  {
    ...featuredWork[2],
    title: "Arquitetura de Rede Multiprotocolo em Runtime",
    eyebrow: "Protocolos e Redes",
    evidenceStatus: mergedAndFieldValidated,
    summary: "Projetei codecs de transporte, perfis de protocolo, indicações de sessão e contratos de payload condicionados por versão para várias gerações de clientes.",
    impact: "Substituí verificações de versão espalhadas por contratos explícitos e testáveis em um único runtime C++, sem portas ou builds separados por versão.",
    metrics: [
      { value: "3 famílias de clientes", label: "15.x, 11.00 e 8.60" },
      { value: "1 runtime C++", label: "pilha de protocolo compartilhada" }
    ]
  },
  {
    ...featuredWork[3],
    title: "Otimização do Sistema de Build C++ e do Empacotamento do Protobuf",
    eyebrow: "Sistemas de Build",
    evidenceStatus: "Commit público no upstream",
    evidenceLabel: "Commit integrado no Protobuf",
    summary: "Adicionei empacotamento limitado do runtime lite do Protobuf e suporte no vcpkg para builds no ambiente de destino.",
    impact: "Reduzi custos desnecessários de build e instalação em fluxos C++ com gerenciadores de pacotes e builds cruzados.",
    metrics: [
      { value: "508s -> 55s", label: "etapa de build em PoC" },
      { value: "113,754 KB -> 21,579 KB", label: "espaço instalado em PoC" }
    ]
  },
  {
    ...featuredWork[4],
    title: "Plataforma Versionada de Entrega de Assets e Releases do Cliente",
    eyebrow: "Entrega de Produto",
    evidenceStatus: "Produto público",
    summary: "Construí fluxos de entrega no cliente e no serviço com arquivos associados à versão, integridade de catálogo, assets por servidor, monitoramento e distribuição por launcher.",
    impact: "Fornece uma superfície controlada de release para vários servidores, evitando incompatibilidade de versão, entradas duplicadas no catálogo e mistura de pacotes entre servidores.",
    metrics: [
      { value: "Versão compatível", label: "arquivos de release" },
      { value: "9,209 / 9,209", label: "nomes únicos de sprites" }
    ]
  },
  {
    ...featuredWork[5],
    title: "Otimização de Carga, Salvamento e Renderização de Grandes Volumes de Dados",
    eyebrow: "Ferramentas de Desenvolvimento",
    evidenceStatus: publicPrMerged,
    summary: "Melhorei os caminhos de carga e salvamento de mapas grandes, alocação, renderização da viewport e exportação de assets da Cyclopedia.",
    impact: "Tornei os fluxos com OTBM e assets gerados mais rápidos e fáceis de operar para autores de mapas e ferramentas.",
    metrics: [
      { value: "17,830 -> 2,230", label: "recargas de slabs" },
      { value: "139,767 -> 126", label: "CPU amostrada na viewport estática" }
    ]
  }
];

type CaseStudyTranslation = Pick<CaseStudy, "title" | "context" | "problem" | "whatIOwned" | "technicalDecisions" | "solution" | "impact" | "evidenceStatus">;

const caseStudyTranslations: Record<string, CaseStudyTranslation> = {
  "cpp-lua-runtime-startup-performance": {
    title: "Desempenho da Inicialização de Runtime C++ com Integração Lua",
    context: "O OpenTibiaBR Canary é um grande runtime de servidor online em C++/Lua cuja inicialização percorre scripts, dados do mapa, caches de tiles, configuração de spawns e registros de runtime.",
    problem: "A inicialização tinha caminhos críticos caros que atrasavam a iteração e a subida operacional do servidor.",
    whatIOwned: ["Profiling e diagnóstico", "Implementação nos caminhos críticos", "Preservação de comportamento", "Documentação de medições e trade-offs"],
    technicalDecisions: [
      "Priorizei os caminhos críticos da inicialização antes de alterar a arquitetura mais ampla do runtime",
      "Preservei o comportamento esperado de scripts, mapas, tiles, zonas e spawns",
      "Usei medições públicas de antes e depois para documentar o impacto"
    ],
    solution: "Otimizei o carregamento Lua, o parsing do mapa, a construção do cache de tiles, a indexação de zonas e a inicialização de spawns sem alterar o comportamento esperado do runtime.",
    impact: "O carregamento de scripts e módulos caiu de cerca de 54 segundos para aproximadamente 1,5–3,0 segundos nas medições públicas do PR.",
    evidenceStatus: publicPrMerged
  },
  "fair-runtime-scheduling-parallel-compute": {
    title: "Agendamento Justo de Runtime e Computação Paralela",
    context: "Um runtime de servidor C++ de longa duração precisa manter entradas e movimentos visíveis ao jogador responsivos enquanto processa pathfinding, seleção de alvos, preparação de combate, manutenção e trabalhos assíncronos caros em segundo plano.",
    problem: "Filas amplas do dispatcher permitiam que grandes cargas em segundo plano competissem com tarefas sensíveis a latência. Tarefas assíncronas repetidas, decisões obsoletas, custo de ownership e fanout ilimitado também reduziam a justiça e o uso de múltiplos núcleos.",
    whatIOwned: [
      "Arquitetura de filas e modos de execução do dispatcher",
      "Agendamento por déficit ponderado e justo entre produtores",
      "Admissão limitada, backpressure e telemetria",
      "Serviço paralelo de pathfinding e computação de decisões",
      "Snapshots imutáveis de navegação e rejeição de resultados obsoletos",
      "Validação em runtime, rollout, documentação e testes"
    ],
    technicalDecisions: [
      "Mantive mutações do mapa, Lua, RNG, combate, condições, cooldowns e estado visível na rede no dispatcher autoritativo",
      "Permiti que workers recebessem apenas valores ou snapshots imutáveis e retornassem sugestões",
      "Limitei todas as filas e reservei capacidade de conclusão para requisições aceitas",
      "Revalidei geração da entidade, posição, época e revisões de topologia antes de aplicar resultados dos workers",
      "Adaptei os orçamentos de segundo plano à latência percebida pelo jogador, preservando a justiça entre produtores",
      "Usei backlog exato e sustentado para alertas, sem tratar amostras transitórias de histograma como incidentes"
    ],
    solution: "Introduzi agendamento consciente de filas, orçamentos adaptativos de runtime, computação multinúcleo limitada, snapshots imutáveis de navegação, promoção baseada em visibilidade, coalescência, telemetria de filas e validação rigorosa de conclusões obsoletas.",
    impact: "Melhorei o comportamento do runtime e a responsividade percebida pelos jogadores sob cargas intensas de monstros. A arquitetura passou por 264 testes unitários e de regressão e foi validada em campo em vários servidores OT, enquanto o retorno operacional mais amplo continua sendo coletado.",
    evidenceStatus: mergedAndFieldValidated
  },
  "runtime-multiprotocol-networking-architecture": {
    title: "Arquitetura de Rede Multiprotocolo em Runtime",
    context: "Um runtime cliente/servidor C++ precisava atender às famílias de clientes modernos 15.x, protocolo antigo 11.00 e compatíveis 8.60 sem binários ou portas separados nem verificações frágeis de versão espalhadas pela pilha de protocolo.",
    problem: "As famílias de clientes diferem no enquadramento TCP, checksums, layout de criptografia, compactação, handshake, payloads de login, assinaturas de assets, mapeamento de itens e campos de mensagens específicos por versão.",
    whatIOwned: [
      "Arquitetura de codecs de transporte e perfis",
      "Contratos de perfil de protocolo e feature flags",
      "Layouts de login de conta e de jogo",
      "Resolução de indicações de sessão entre as conexões de login e jogo",
      "Atualizações de compatibilidade do cliente atual e depuração de pacotes",
      "Exportação de assets legados e integração de releases versionados do cliente"
    ],
    technicalDecisions: [
      "Separei o enquadramento de transporte do comportamento das features de protocolo",
      "Mantive o perfil moderno como padrão seguro quando não existe uma indicação legada válida",
      "Usei feature flags explícitas no perfil em vez de acumular comparações diretas de versão",
      "Permiti que a política bloqueasse um perfil detectado sem deixá-la inferir o enquadramento legado",
      "Resolvi perfis compatíveis a partir de indicações de sessão, dados de protocolo e assinaturas de assets",
      "Preservei fallbacks legados enquanto corrigia os limites de pacotes do cliente atual"
    ],
    solution: "Implementei codecs de transporte, comportamento da conexão inicial, perfis de protocolo em runtime, indicações de sessão, contratos de payload condicionados por versão, testes de compatibilidade, perfis de exportação de assets legados e empacotamento coordenado de releases do cliente.",
    impact: "Três famílias de clientes compartilham agora um runtime C++ e um modelo de implantação validados em campo, sem exigir portas ou builds de servidor separados por versão.",
    evidenceStatus: mergedAndFieldValidated
  },
  "cpp-build-system-protobuf-packaging-optimization": {
    title: "Otimização do Sistema de Build C++ e do Empacotamento do Protobuf",
    context: "Alguns fluxos C++ com gerenciadores de pacotes e builds cruzados usam um protoc do host, enquanto os pacotes de destino precisam apenas de protobuf::libprotobuf-lite.",
    problem: "O pacote do Protobuf para o destino ainda podia pagar o custo de build e instalação do runtime completo e de artefatos do compilador que o grafo de dependências do destino não utilizava.",
    whatIOwned: ["Definição do problema para o upstream", "Implementação em CMake", "Atualização do pacote vcpkg", "Iteração com mantenedores", "Verificação do commit integrado"],
    technicalDecisions: [
      "Mantive inalterado o comportamento padrão do Protobuf",
      "Adicionei um modo estrito somente lite quando artefatos do compilador, testes, conformidade, exemplos e upb estão desativados",
      "Exportei e instalei apenas os targets que realmente existem",
      "Interpretei o estado fechado do PR do Protobuf pelo commit público integrado via Copybara, não pelo indicador de merge do GitHub"
    ],
    solution: "Implementei no upstream do Protobuf o suporte CMake a um build limitado do runtime lite e contribuí com a alteração do port vcpkg que torna libprotoc opcional em builds para destinos não nativos.",
    impact: "A alteração no Protobuf foi integrada via Copybara no commit público 7c090172. A PoC local mediu a queda da etapa de build de 508,063s para 55,648s e do espaço instalado de 113.754 KB para 21.579 KB.",
    evidenceStatus: "Commit público no upstream"
  },
  "runtime-state-persistence-safety": {
    title: "Segurança do Estado de Runtime e da Persistência",
    context: "Fluxos de market, inbox e salvamento offline precisam de invariantes fortes para itens e persistência. Pequenos erros podem duplicar ou perder itens e sobrescrever progresso válido do jogador.",
    problem: "Inboxes cheios, divisão de stacks, inserções parciais, clonagem do market e salvamentos parciais de jogadores offline tinham casos extremos nos quais a ordem das mutações podia corromper o estado.",
    whatIOwned: ["Lógica de validação de capacidade", "Tratamento de itens empilháveis e não empilháveis", "Inserção atômica em lote", "Proteção do salvamento offline", "Testes e cobertura de casos extremos"],
    technicalDecisions: [
      "Validei a capacidade antes de alterar o estado dos itens",
      "Adicionei comportamento de inserção somente para teste e dry-run nas verificações prévias",
      "Tratei explicitamente itens empilháveis e não empilháveis",
      "Centralizei a inserção para reduzir lógica duplicada de movimentação de itens",
      "Evitei salvar estado incompleto de jogadores offline sobre campos persistentes válidos"
    ],
    solution: "Fortaleci os caminhos de inserção do inbox e do market com verificações de capacidade, clonagem e inserção mais seguras, helpers de inserção em lote e proteções no salvamento offline.",
    impact: "Reduzi o risco de itens duplicados ou fantasmas, perda de itens e regressões de progresso nos fluxos de economia e persistência.",
    evidenceStatus: publicPrMerged
  },
  "profile-aware-content-integrity-auditor": {
    title: "Auditor de Integridade de Conteúdo Consciente de Perfis",
    context: "Um grande runtime C++/Lua carrega perfis de conteúdo mutuamente exclusivos com scripts Lua, registros XML, definições de itens em Protobuf, storages, actions, movements, weapons, spells, monstros e NPCs.",
    problem: "Definições entre perfis podiam satisfazer umas às outras incorretamente, expressões Lua dinâmicas podiam ser confundidas com referências autoritativas, intervalos XML inválidos podiam ser ignorados silenciosamente pelo runtime e varreduras ingênuas do repositório inteiro produziam resultados ruidosos ou inseguros.",
    whatIOwned: [
      "Arquitetura da análise estática e CLI em Python",
      "Extração consciente de perfis e modelo de símbolos",
      "Análise de dados Lua, XML e Protobuf",
      "Artefatos determinísticos validados por schema",
      "Segurança de caminhos, limites de recursos e saída atômica",
      "Gate de CI, fingerprints de baseline, documentação e testes"
    ],
    technicalDecisions: [
      "Mantive os perfis mutuamente exclusivos isolados durante toda a extração e validação",
      "Usei análise Lua conservadora e deixei expressões dinâmicas sem resolução em vez de fabricar referências ausentes",
      "Analisei campos autoritativos do Protobuf em vez de tratar todo valor numérico como definição de item",
      "Rejeitei escapes por symlink e limitei os caminhos de descoberta e saída ao repositório",
      "Apliquei limites de tokens, fatos, diagnósticos e achados a entradas grandes ou adversariais",
      "Incluí a multiplicidade das ocorrências nos fingerprints semânticos para que dispensas não escondessem novas duplicidades"
    ],
    solution: "Construí um auditor determinístico e consciente de perfis que produz registros tipados de símbolos, relatórios de referências, cobertura de itens não resolvidos, fingerprints estáveis, anotações de CI e artefatos JSON/Markdown validados por schemas incluídos.",
    impact: "Analisei 39.311 fatos em dois perfis de runtime, corrigi oito erros bloqueantes de conteúdo, reduzi os achados de storage de 1.225 para 405 ao remover falsos positivos e concluí 72 testes sem erros restantes na varredura.",
    evidenceStatus: publicPrMerged
  },
  "modern-client-asset-delivery-platform": {
    title: "Plataforma Versionada de Entrega de Assets e Releases do Cliente",
    context: "A entrega do cliente precisava atender a conjuntos de assets modernos e legados, módulos por servidor, downloads públicos do launcher, visibilidade de catálogo, monitoramento operacional e metadados versionados de atualização sem expor detalhes privados de implementação.",
    problem: "A distribuição para parceiros não era um problema de download único. Diferentes servidores e versões de cliente exigiam árvores de assets, conjuntos de módulos, objetivos de inicialização, cadência de atualização, seleção de arquivos, integridade de catálogo, notícias, monitoramento e regras de entrega isolados por um ponto público controlado.",
    whatIOwned: [
      "Integração do launcher e runtime no cliente",
      "Fluxo multisservidor orientado por catálogo",
      "Download e instalação automáticos de assets",
      "Extração de arquivos e verificações de integridade",
      "Seleção de arquivos de release por versão",
      "Validação de colisões no catálogo de spritesheets",
      "Monitoramento de assets e APIs de notícias no painel administrativo",
      "Suporte a releases no Windows"
    ],
    technicalDecisions: [
      "Mantive os arquivos finais do runtime nos caminhos de assets existentes no cliente, sem criar uma segunda fonte de verdade",
      "Priorizei instalação por arquivo compactado com fallback para manifesto",
      "Associei os arquivos de release à versão de cliente solicitada, sem aceitar apenas o primeiro arquivo com extensão compatível",
      "Reservei nomes de spritesheets gerados em cada lote de importação e falhei de forma segura diante de entradas ausentes ou duplicadas",
      "Mantive assets, módulos, metadados de inicialização e visibilidade de catálogo por servidor separados nas regras de entrega",
      "Limitei as alegações públicas à superfície atual do launcher no Windows e às evidências de PRs públicos",
      "Mantive nomes de repositórios privados, código, endpoints internos, material de assinatura e detalhes de assets fora do conteúdo público"
    ],
    solution: "Integrei automação de assets no cliente, fluxos de entrega por launcher/API, arquivos associados à versão, validação de catálogo, carregamento de assets e módulos por servidor, regras de parceiros, monitoramento administrativo, APIs de notícias, metadados assinados e suporte a releases.",
    impact: "Oferece a jogadores e operadores um caminho controlado de download e atualização, evitando pacotes de versão incorreta, corrigindo 11 colisões de spritesheets e preservando a separação entre pacotes por servidor e operações confidenciais de parceiros.",
    evidenceStatus: "Produto público"
  },
  "large-data-load-save-rendering-optimization": {
    title: "Otimização de Carga, Salvamento e Renderização de Grandes Volumes de Dados",
    context: "O Remere's Map Editor é uma ferramenta desktop C++ de longa duração usada para inspecionar, editar, carregar, salvar, renderizar e exportar grandes conjuntos de dados de mapas e assets do cliente.",
    problem: "Fluxos com mapas grandes tinham custos excessivos de alocação, travessia, E/S binária, salvamento, invalidação de repintura e exportação de assets gerados.",
    whatIOwned: ["Profiling e diagnóstico", "Alterações no alocador e na travessia", "Melhorias em E/S binária e no salvamento", "Alterações na invalidação da renderização", "Suporte à exportação de Cyclopedia/staticdata", "Métricas públicas de antes e depois nos PRs"],
    technicalDecisions: [
      "Adicionei um alocador por slabs para objetos pequenos nos caminhos críticos de Item, Tile e Floor",
      "Mantive em cache a busca de floors e tiles e atribuí localizações de tiles diretamente durante o parsing",
      "Usei travessia direta das localizações de tiles durante o salvamento para reduzir buscas repetidas",
      "Separei a atualização de cena suja da atualização apenas de overlays para que overlays estáticos não invalidassem a renderização em cache do mapa",
      "Mantive a exportação de assets da Cyclopedia focada nos caminhos Protobuf/staticdata e documentei candidatos de otimização adiados"
    ],
    solution: "Adicionei alocação em pool, cache de buscas de floors e tiles, melhorias em E/S binária, travessia otimizada no salvamento, redução de repinturas desnecessárias e suporte à exportação de assets de mapas grandes.",
    impact: "As métricas públicas dos PRs registram a queda das recargas de slabs de 17.830 para 2.230, da parcela de CPU de alocação de 20,01% para 14,62% e da CPU amostrada em uma viewport estática de 139.767 para 126.",
    evidenceStatus: publicPrMerged
  }
};

const technologyTranslations: Record<string, string> = {
  profiling: "análise de desempenho",
  "server runtime": "runtime de servidor",
  concurrency: "concorrência",
  "weighted deficit round robin": "round robin ponderado por déficit",
  "bounded queues": "filas limitadas",
  "immutable snapshots": "snapshots imutáveis",
  "runtime telemetry": "telemetria de runtime",
  "TCP framing": "enquadramento TCP",
  compression: "compactação",
  "protocol profiles": "perfis de protocolo",
  "feature flags": "feature flags",
  "unit tests": "testes unitários",
  "package management": "gerenciamento de pacotes",
  "cross-builds": "builds cruzados",
  "SQL persistence": "persistência SQL",
  "inventory containers": "contêineres de inventário",
  "data safety": "segurança de dados",
  tests: "testes",
  "Lua analysis": "análise Lua",
  "static analysis": "análise estática",
  "asset delivery": "entrega de assets",
  "catalog integrity": "integridade de catálogo",
  "release operations": "operação de releases",
  monitoring: "monitoramento",
  "allocator work": "trabalho no alocador",
  "binary I/O": "E/S binária",
  rendering: "renderização"
};

export const caseStudiesPtBr: typeof caseStudies = caseStudies.map((study) => {
  const translation = caseStudyTranslations[study.id];
  if (!translation) throw new Error(`Missing pt-BR case-study translation: ${study.id}`);

  return {
    ...study,
    ...translation,
    technologies: study.technologies.map((technology) => technologyTranslations[technology] ?? technology)
  };
});

export const selectedContributionsPtBr: typeof selectedContributions = [
  { ...selectedContributions[0], title: "Modernização HTTP/WebSocket do OTClient", category: "Rede do Cliente", evidenceStatus: publicPrMerged, summary: "Substituí a implementação interna de HTTP/WebSocket por ixwebsocket preservando as APIs públicas do cliente." },
  { ...selectedContributions[1], title: "Backend de Logs do OTClient", category: "Diagnóstico / Observabilidade de Runtime", evidenceStatus: publicPrMerged, summary: "Adicionei o backend spdlog, centralização de logs, níveis, formatação, saída em arquivo e tratamento mais seguro de logs HTTP." },
  { ...selectedContributions[2], title: "Segurança de Dados no Market e Inbox", category: "Estabilidade de Runtime / Segurança de Dados", evidenceStatus: publicPrMerged, summary: "Fortaleci a inserção no inbox com verificações de capacidade, tratamento de stacks, atomicidade e testes." },
  { ...selectedContributions[3], title: "Integridade de Releases entre Repositórios", category: "Engenharia de Release / CI", evidenceStatus: publicPrMerged, summary: "Vinculei tags exatas de releases de cliente e servidor, validei pacotes obrigatórios antes da publicação e preservei os metadados autoritativos do cliente." },
  { ...selectedContributions[4], title: "Erros Estruturados no Login-server", category: "Experiência do Operador / Estabilidade", evidenceStatus: publicPrMerged, summary: "Adicionei erros públicos estruturados, orientações administrativas, validação de configuração e testes." },
  { ...selectedContributions[5], title: "Backend RSA com Mbed TLS", category: "Segurança / Sistemas de Build", evidenceStatus: publicPrMerged, summary: "Migrei a abstração do backend RSA de login do uso de OpenSSL para Mbed TLS." },
  { ...selectedContributions[6], title: "Ownership de Memória e Segurança nos Caminhos Críticos", category: "Confiabilidade do Runtime C++", evidenceStatus: publicPrMerged, summary: "Fortaleci finalizadores de userdata compartilhada em Lua e reduzi movimentações evitáveis de shared pointers em caminhos síncronos críticos." },
  { ...selectedContributions[7], title: "Pilha de Runtime Reproduzível e Smoke Tests", category: "Validação de Runtime / Plataforma", evidenceStatus: publicPrMerged, summary: "Validei a inicialização do runtime no Linux, macOS e Windows e forneci um quickstart Docker com serviços de banco de dados e login." },
  { ...selectedContributions[8], title: "Fluxo de Protocolo e Login para Livestream", category: "Engenharia de Protocolo entre Repositórios", evidenceStatus: publicPrMerged, summary: "Conectei sessões de visualização somente leitura ao estado do runtime C++, restrições de protocolo, persistência, comandos Lua e um serviço de login em Go." },
  { ...selectedContributions[9], title: "Gerador de Documentação da API Lua", category: "Ferramentas de Desenvolvimento", evidenceStatus: publicPrMerged, summary: "Adicionei documentação e stubs gerados da API Lua para as ferramentas de desenvolvimento." },
  { ...selectedContributions[10], title: "Coordenação do Cache vcpkg no Windows", category: "Sistemas de Build / Confiabilidade da CI", evidenceStatus: publicPrMerged, summary: "Serializei apenas os processos que escrevem no cache do Windows, mantendo jobs somente leitura em paralelo e evitando disputas na publicação duplicada de pacotes NuGet." }
];

export const privateWorkPtBr: typeof privateWork = {
  title: "Engenharia Privada de Runtime Cliente/Servidor",
  shortTitle: "Asteria",
  shortSummary: "Engenharia C++/Lua de cliente e servidor envolvendo comportamento de runtime, compatibilidade de protocolo, persistência e fluxos de entrega.",
  label: "Trabalho privado aprovado pelo cliente",
  summary: "Trabalho no cliente e servidor da Asteria envolvendo sistemas de runtime C++/Lua, compatibilidade de protocolo, comportamento de UI e runtime, persistência, integração launcher/API, entrega de assets, telemetria, relatórios de falha e operação de releases.",
  reference: "Referência disponível mediante solicitação.",
  clientVerifiedLabel: "Referência validada pelo cliente",
  whatCanBeSaid: [
    "Construí e mantive sistemas substanciais de cliente e servidor",
    "Atuei em comportamento de runtime, compatibilidade de protocolo, persistência, operação de releases e diagnósticos",
    "Integrei fluxos de launcher/API, entrega de assets, telemetria e relatórios de falha"
  ],
  whatStaysPrivate: [
    "Outros nomes de clientes e parceiros sem aprovação para divulgação",
    "Nomes de repositórios privados",
    "URLs privadas ou endereços internos de serviços",
    "Código proprietário, assets, logs, artefatos privados de diagnóstico, capturas de tela e métricas comerciais"
  ]
};

export const experienceSummariesPtBr: typeof experienceSummaries = [
  { ...experienceSummaries[0], focus: "Runtimes C++ / Lua", summary: "Contribuições em inicialização de runtime, agendamento, compatibilidade de protocolos e segurança de dados." },
  { ...experienceSummaries[1], focus: "Ferramentas para grandes volumes de dados", summary: "Melhorias em carga e salvamento de mapas, alocação, renderização e exportação de assets." },
  { ...experienceSummaries[2], focus: "Engenharia e entrega do cliente", summary: "Contribuições em rede do cliente, logs, entrega de assets e fluxos de release." },
  { ...experienceSummaries[3], focus: "Ferramentas upstream para build C++", summary: "Empacotamento limitado do runtime e alterações CMake para builds no ambiente de destino." }
];

export const premiumClientPtBr: typeof premiumClient = {
  ...premiumClient,
  label: "Produto público",
  summary: "Um cliente disponível publicamente para download, desenvolvido em colaboração com Qatari, Mehah e Lury.",
  description: "O OTClient Redemption Premium está disponível em sua página oficial de download. É um produto compartilhado com implementação privada.",
  link: { ...premiumClient.link, label: "Produto oficial e downloads" }
};
