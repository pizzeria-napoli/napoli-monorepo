/**
 * @file branding.ts
 * @description Fuente Única de Verdad (SSoT) para toda la información de marca y negocio.
 * @version 4.0.0
 * @author IA Asistente de Élite
 *
 * @soberano
 * Se ha inyectado una interfaz de tipo explícita (`BrandInfo`) para garantizar
 * la Seguridad de Tipos Absoluta en todos los aparatos consumidores.
 * Cero regresiones, máxima integridad.
 */

// PILAR #2: Definición de tipo explícita para el contrato soberano.
interface BrandInfo {
  name: string;
  slogan: string;
  description: string;
  addresses: {
    name: string;
    address: string;
    maps_link: string;
    coords: {
      lat: number;
      lng: number;
    };
  }[];
  phone: {
    display: string;
    link: string;
  };
  whatsapp: {
    number: string;
    message: string;
    link: string;
  };
  operatingHours: string;
  socials: {
    facebook: string;
    instagram: string;
  };
  onlineOrderLink: string;
  acceptedPayments: string[];
  colors: {
    primary: string;
    secondary: string;
    background: {
      light: string;
      dark: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    accent: {
      light: string;
      dark: string;
    };
  };
  fonts: {
    headings: string;
    body: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

// Se aplica el tipo al objeto para garantizar el cumplimiento del contrato.
export const BRAND_INFO: BrandInfo = {
  name: "Pizzaria Napoli",
  slogan: "O melhor pedaço do dia!",
  description: "Inaugurada em 2011, a Pizzaria Napoli é uma pizzaria que atende pelo sistema de delivery e retirada no balcão, destacando-se pela qualidade de seus produtos e variadas pizzas com um tempero especialmente italiano. Trabalhamos com ingredientes de primeira linha e controle de qualidade. Nosso sistema de entrega garante agilidade e entrega dos seus pedidos. Acompanhe o nosso cardápio e fique de olho na promoção. Aproveite nossas ofertas especiais!",
  addresses: [
    {
      name: "Unidade PANTANAL",
      address: "R. Dep. Antônio Edu Vieira, 1940 - CEP: 88040-245",
      maps_link: "https://www.google.com/maps/search/?api=1&query=R.+Dep.+Antônio+Edu+Vieira,+1940,+Florianópolis",
      coords: { lat: -27.6033, lng: -48.5153 },
    },
    {
      name: "Unidade CAMPECHE",
      address: "Rod. Francisco Magno Vieira, 270 - CEP: 88065-005",
      maps_link: "https://www.google.com/maps/search/?api=1&query=Rod.+Francisco+Magno+Vieira,+270,+Florianópolis",
      coords: { lat: -27.6749, lng: -48.4975 },
    },
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
  onlineOrderLink: "https://www.ifood.com.br/",
  acceptedPayments: ["Visa", "Mastercard", "Elo"],
  colors: {
    primary: "#FF5733",
    secondary: "#FFFFFF",
    background: {
      light: "#FDFDFD",
      dark: "#000000"
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
    accent: {
      light: "#4CAF50",
      dark: "#FF333A"
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
