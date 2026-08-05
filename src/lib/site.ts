/**
 * Single source of truth for the institutional copy and contact details.
 * Editing this file is enough to update the site — no component changes needed.
 */

export const site = {
  nome: "DarioTech",
  razaoSocial: "DarioTech LTDA",
  tagline: "Tecnologia que facilita a vida de negócios e pessoas.",
  descricao:
    "Empresa de tecnologia brasileira. Construímos produtos que tiram o peso da operação do dia a dia de quem empreende.",
  email: "contato@senhorcardapio.com",
  telefone: "(11) 93311-2752",
  // E.164 sem símbolos, para o link do WhatsApp.
  whatsapp: "5511933112752",
} as const;

export const missao = {
  titulo: "Nossa missão",
  texto:
    "Através da tecnologia, facilitar a vida de negócios e pessoas. Softwares que resolvem problemas reais, sem complicar o que já é difícil.",
  pilares: [
    {
      titulo: "Simples de usar",
      texto:
        "Se precisa de manual, a gente errou. Nossos produtos são feitos para quem tem um negócio para tocar, não tempo para aprender sistema.",
    },
    {
      titulo: "Feito para o dia a dia",
      texto:
        "Construímos ouvindo quem está no balcão, na cozinha e no atendimento. A tecnologia acompanha a rotina — não o contrário.",
    },
    {
      titulo: "Perto de quem usa",
      texto:
        "Você fala com quem constrói o produto. Suporte direto, sem fila de espera e sem robô no meio do caminho.",
    },
  ],
} as const;

export const fundadores = [
  {
    nome: "Anderson Dutra de Oliveira",
    papel: "Cofundador",
  },
  {
    nome: "André Dutra de Oliveira",
    papel: "Cofundador",
  },
  {
    nome: "Matheus Dutra di Nizo",
    papel: "Cofundador",
  },
] as const;

export const produtos = [
  {
    nome: "Senhor Cardápio",
    // Sem www: www.senhorcardapio.com não resolve, só o domínio raiz.
    url: "https://senhorcardapio.com",
    urlRotulo: "senhorcardapio.com",
    resumo: "Cardápio digital e pedidos online para bares, restaurantes e lanchonetes.",
    descricao:
      "O cliente abre o cardápio pelo QR Code na mesa ou pelo link no Instagram, monta o pedido e envia. O restaurante recebe tudo organizado, sem intermediário cobrando comissão por venda.",
    destaques: [
      "Cardápio digital com fotos, categorias e preços sempre atualizados",
      "Pedidos por QR Code na mesa ou link para delivery e retirada",
      "Painel de gestão com acompanhamento dos pedidos em tempo real",
      "Sem comissão por pedido — o que é do restaurante fica com o restaurante",
    ],
    status: "Disponível",
  },
] as const;
