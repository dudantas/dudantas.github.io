import { capabilities, impactHighlights } from "../../capabilities";

export const capabilitiesPtBr: typeof capabilities = [
  {
    title: "Sistemas Fundamentais",
    summary: "Arquitetura de runtime, concorrência e sistemas C++/Lua sensíveis a desempenho.",
    skills: ["C++", "Lua", "arquitetura de runtime", "concorrência", "agendamento limitado", "profiling", "gerenciamento de memória", "otimização de caminhos críticos"]
  },
  {
    title: "Protocolos e Redes",
    summary: "Contratos de transporte, perfis de runtime, compatibilidade e ferramentas de protocolo.",
    skills: ["fluxos cliente/servidor TCP", "codecs de transporte", "perfis de protocolo em runtime", "compatibilidade binária", "Protobuf", "fluxos de login e sessão"]
  },
  {
    title: "Build e Plataforma",
    summary: "Builds multiplataforma, empacotamento e fluxos de desenvolvimento.",
    skills: ["CMake", "vcpkg", "GitHub Actions", "Docker", "integridade de releases", "fluxos Linux / Windows"]
  },
  {
    title: "Confiabilidade e Segurança de Dados",
    summary: "Mutação de estado, persistência, validação determinística e correção de runtime.",
    skills: ["SQL / MariaDB", "invariantes de persistência", "segurança de mutações", "análise estática determinística", "validação de schema", "cobertura de testes"]
  },
  {
    title: "Entrega de Produtos",
    summary: "Superfícies públicas de entrega, integração launcher/API e operação de releases.",
    skills: ["integração launcher/API", "entrega de assets", "metadados assinados", "telemetria", "relatórios de falha", "operação de releases"]
  }
];

export const impactHighlightsPtBr: typeof impactHighlights = [
  { ...impactHighlights[0], label: "inicialização do runtime", detail: "Redução do tempo de inicialização do servidor C++/Lua em medições públicas do PR." },
  { ...impactHighlights[1], label: "distribuição de tarefas assíncronas", detail: "Redução da parcela inclusiva de CPU amostrada durante uma carga documentada de estresse com monstros." },
  { ...impactHighlights[2], label: "etapa de build em PoC", detail: "Redução do tempo de build do runtime lite do Protobuf em medições locais de PoC.", evidenceLabel: "Commit integrado no Protobuf" },
  { ...impactHighlights[3], value: "3 famílias / 1 runtime", label: "arquitetura de protocolo", detail: "Suporte às famílias de clientes modernos 15.x, 11.00 e 8.60 sem portas ou builds separados por versão." },
  { ...impactHighlights[4], label: "CPU amostrada", detail: "Redução da CPU amostrada na renderização de uma viewport estática." },
  { ...impactHighlights[5], label: "recargas do alocador", detail: "Redução das recargas de slabs do alocador durante operações em mapas grandes." }
];
