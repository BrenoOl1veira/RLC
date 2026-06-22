import {
  BadgeCheck,
  Building2,
  Factory,
  Forklift,
  HardHat,
  LandPlot,
  MapPinned,
  MessagesSquare,
  Route,
  ShieldCheck,
  Truck,
  Wrench
} from "lucide-react";

export const navItems = [
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Servicos" },
  { href: "/equipamentos", label: "Equipamentos" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" }
];

export const services = [
  {
    title: "Construcao Civil",
    description: "Execucao planejada para obras corporativas, comerciais e operacionais.",
    icon: Building2
  },
  {
    title: "Terraplenagem",
    description: "Preparacao de terrenos com produtividade, controle tecnico e seguranca.",
    icon: LandPlot
  },
  {
    title: "Infraestrutura",
    description: "Solucoes para bases, drenagem, acesso, redes e urbanizacao.",
    icon: MapPinned
  },
  {
    title: "Pavimentacao",
    description: "Implantacao e recuperacao de pavimentos com acabamento profissional.",
    icon: Route
  },
  {
    title: "Locacao de Maquinas",
    description: "Frota pronta para ampliar capacidade operacional em campo.",
    icon: Truck
  },
  {
    title: "Locacao de Equipamentos",
    description: "Equipamentos revisados para execucao rapida, segura e eficiente.",
    icon: Forklift
  },
  {
    title: "Obras Industriais",
    description: "Intervencoes robustas para ambientes industriais e plantas produtivas.",
    icon: Factory
  },
  {
    title: "Obras Comerciais",
    description: "Projetos com previsibilidade, organizacao e foco em prazo.",
    icon: HardHat
  }
];

export const differentiators = [
  {
    title: "Seguranca operacional",
    description: "Processos, EPIs, checklists e lideranca tecnica em cada frente de obra.",
    icon: ShieldCheck
  },
  {
    title: "Gestao de prazo",
    description: "Planejamento executivo, cronogramas claros e acompanhamento continuo.",
    icon: BadgeCheck
  },
  {
    title: "Frota revisada",
    description: "Maquinas e equipamentos com manutencao preventiva e suporte rapido.",
    icon: Wrench
  },
  {
    title: "Atendimento consultivo",
    description: "Diagnostico da demanda e proposta alinhada ao escopo real do cliente.",
    icon: MessagesSquare
  }
];

export const equipments = [
  {
    name: "Retroescavadeira",
    description: "Versatil para escavacao, carregamento, nivelamento e apoio geral em obras.",
    image: "/assets/equip-retro.svg"
  },
  {
    name: "Escavadeira Hidraulica",
    description: "Alta produtividade para terraplenagem, cortes, valas e movimentacao de solo.",
    image: "/assets/equip-escavadeira.svg"
  },
  {
    name: "Rolo Compactador",
    description: "Compactacao eficiente para bases, vias, patios e pavimentacao.",
    image: "/assets/equip-rolo.svg"
  },
  {
    name: "Caminhao Basculante",
    description: "Transporte robusto de agregados, terra, entulho e materiais de obra.",
    image: "/assets/equip-caminhao.svg"
  }
];

export const projects = [
  {
    title: "Base logistica corporativa",
    category: "Infraestrutura",
    image: "/assets/project-infra.svg"
  },
  {
    title: "Patio comercial pavimentado",
    category: "Comercial",
    image: "/assets/project-comercial.svg"
  },
  {
    title: "Adequacao de planta industrial",
    category: "Industrial",
    image: "/assets/project-industrial.svg"
  },
  {
    title: "Preparacao de terreno",
    category: "Terraplenagem",
    image: "/assets/project-terra.svg"
  }
];

export const testimonials = [
  {
    quote:
      "A RLC trouxe previsibilidade para uma obra sensivel, com equipe presente e equipamentos em excelente estado.",
    author: "Diretoria de Operacoes",
    company: "Grupo empresarial"
  },
  {
    quote:
      "O atendimento foi tecnico desde a primeira conversa. A proposta veio clara e a execucao acompanhou o combinado.",
    author: "Gerente de Engenharia",
    company: "Industria regional"
  }
];

export const faqs = [
  {
    question: "A RLC atende empresas de quais segmentos?",
    answer:
      "Atendemos demandas comerciais, industriais, corporativas e de infraestrutura, com escopo definido conforme necessidade da obra."
  },
  {
    question: "E possivel contratar obra e locacao juntas?",
    answer:
      "Sim. A RLC pode estruturar uma solucao completa combinando equipe, execucao e equipamentos adequados ao projeto."
  },
  {
    question: "Como solicitar um orcamento?",
    answer:
      "Envie os dados da demanda pelo formulario ou WhatsApp. Nossa equipe avalia escopo, prazo, local e recursos necessarios."
  }
];

export const stats = [
  { value: "360", label: "graus de suporte operacional" },
  { value: "8", label: "frentes de servico especializadas" },
  { value: "24h", label: "retorno comercial agil" }
];

export const projectCategories = ["Todos", "Infraestrutura", "Comercial", "Industrial", "Terraplenagem"];
