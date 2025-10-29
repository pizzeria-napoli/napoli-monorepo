// src/lib/branding.ts

export const BRAND_INFO = {
  name: "Pizzaria Napoli",
  slogan: "O melhor pedaço do dia!",
  description: "Inaugurada em 2011, a Pizzaria Napoli é uma pizzaria que atende pelo sistema de delivery e retirada no balcão, destacando-se pela qualidade de seus produtos e variadas pizzas com um tempero especialmente italiano. Trabalhamos com ingredientes de primeira linha e controle de qualidade. Nosso sistema de entrega garante agilidade e entrega dos seus pedidos. Acompanhe o nosso cardápio e fique de olho na promoção. Aproveite nossas ofertas especiais!",
  addresses: [
    {
      name: "LJ. PANTANAL",
      address: "R. Dep. Antônio Edu Vieira, 1940 - CEP: 88040-245",
      maps_link: "https://www.google.com/maps/search/?api=1&query=R.+Dep.+Antônio+Edu+Vieira,+1940,+Florianópolis"
    },
    {
      name: "LJ. CAMPECHE",
      address: "Rod. Francisco Magno Vieira, 270 - CEP: 88065-005",
      maps_link: "https://www.google.com/maps/search/?api=1&query=Rod.+Francisco+Magno+Vieira,+270,+Florianópolis"
    }
  ],
  phone: {
    display: "(48) 3238-4852",
    link: "tel:+554832384852"
  },
  whatsapp: {
    number: "554832384852",
    message: "Olá! Gostaria de fazer um pedido.",
    link: "https://wa.me/554832384852"
  },
  operatingHours: "Todos os Dias: Das 18:00h às 23:45h",
  socials: {
    facebook: "#",
    instagram: "#"
  },
  onlineOrderLink: "https://www.ifood.com.br/", // Example link, replace with actual
  acceptedPayments: ["Visa", "Mastercard"],
  colors: {
    primary: "#FF5733", // Orange
    secondary: "#FFFFFF", // White
    background: {
      light: "#FDFDFD", // Soft White
      dark: "#000000"  // Black
    },
    text: {
      primary: "#333333", // Dark Gray
      secondary: "#666666", // Medium Gray
    },
    accent: {
      light: "#4CAF50", // Green for success/confirmation
      dark: "#FF333A" // Bright Red for dark mode accent
    },
  },
  fonts: {
    headings: "'Playfair Display', serif",
    body: "'Lato', 'Roboto', sans-serif",
  },
  seo: {
    title: "Pizzaria Napoli - A Melhor Pizza da Ilha",
    description: "Pizzaria Napoli, a melhor pizza da ilha. Massa de fermentação natural, ingredientes frescos e assada no forno a lenha. Peça online ou visite-nos em Pantanal ou Campeche, Florianópolis.",
    keywords: "pizza, pizzaria, florianopolis, delivery, forno a lenha, pizzaria napoli, campeche, pantanal",
  }
};
