// napoli-pwa/src/app/lib/images.ts

/**
 * @file images.ts
 * @description Fuente Única de Verdad (SSoT) para todas las rutas de imágenes de la aplicación.
 * @version 6.1.0
 * @author IA Asistente de Élite
 *
 * @soberano
 * Nivelado atómicamente según la verdad física del sistema de archivos (tree output).
 * CADA RUTA EN ESTE ARCHIVO ES UN REFLEJO EXACTO DE UN ARCHIVO FÍSICO EXISTENTE.
 * Cero discrepancias. Cero regresiones. Esta es la configuración final.
 */

export const IMAGES = {
  logo: {
    // Sincronizado con la verdad física: logo-light.jpg y logo-dark.jpg
    light: "/images/logo-light.jpg", // Para tema oscuro
    dark: "/images/logo-dark.jpg",   // Para tema claro
  },
  hero: {
    carousel: [
      {
        src: "/images/hero/pizza-sabor-1-1920x1080.jpg",
        alt: "Close-up de uma fatia de pizza de pepperoni sendo retirada, queijo derretendo, na Pizzaria Napoli.",
      },
      {
        src: "/images/hero/pizza-margherita-2-1920x1080.jpg",
        alt: "Pizza Margherita artesanal da Pizzaria Napoli com manjericão fresco e queijo derretido.",
      },
      {
        src: "/images/hero/ambiente-restaurante-1-1920x1080.jpg",
        alt: "Clientes desfrutando do ambiente acolhedor e rústico da Pizzaria Napoli em Florianópolis.",
      },
      {
        src: "/images/hero/chef-preparando-pizza-1920x1080.jpg",
        alt: "Chef pizzaiolo da Pizzaria Napoli preparando uma massa de pizza artesanal em frente ao forno a lenha.",
      },
    ],
  },
  about: {
    // Sincronizado con la verdad física: se elige la versión sin prefijo por ser más limpia.
    chef: "/images/about/pizzaiolo-trabalhando-550x550.jpg",
  },
  gallery: [
    // Sincronizado con la verdad física: se utilizan los nombres con prefijo 'gallery-' por consistencia.
    "/images/gallery/gallery-pizza-calabresa-detalhe-400x400.jpg",
    "/images/gallery/gallery-pizza-e-coca-cola-400x400.jpg",
    "/images/gallery/gallery-pizza-doce-chocolate-400x400.jpg",
    "/images/gallery/gallery-pizza-mussarela-forno-400x400.jpg",
    "/images/gallery/gallery-pizza-queijo-derretido-400x400.jpg",
    "/images/gallery/gallery-cortando-pizza-400x400.jpg",
    "/images/gallery/gallery-pizza-variedade-400x400.jpg",
    "/images/gallery/gallery-pizza-especial-nozes-400x400.jpg",
  ],
  menu: {
    // Sincronizado con la verdad física: todos los nombres de archivo incluyen el prefijo 'menu-'.
    mussarela: "/images/menu/menu-mussarela-400x300.jpg",
    calabresa: "/images/menu/menu-calabresa-acebolada-400x300.jpg",
    margherita: "/images/menu/menu-margherita-bufala-400x300.jpg",
    portuguesa: "/images/menu/menu-portuguesa-completa-400x300.jpg",
    quatroQueijos: "/images/menu/menu-quatro-queijos-cremosa-400x300.jpg",
    frangoCatupiry: "/images/menu/menu-frango-catupiry-400x300.jpg",
    pepperoni: "/images/menu/menu-pepperoni-picante-400x300.jpg",
    lombinho: "/images/menu/menu-lombinho-cebola-400x300.jpg",
    chocolateMorango: "/images/menu/menu-chocolate-morango-400x300.jpg",
    romeuJulieta: "/images/menu/menu-romeu-julieta-400x300.jpg",
  },
  paymentMethods: [
    // Sincronizado con la verdad física: nombres de archivo exactos y asignación correcta a temas.
    {
      name: "Visa",
      dark: "/images/cards/Visa_Brandmark_Blue_RGB_2021.png",  // Logo azul para fondo claro (tema claro)
      light: "/images/cards/Visa_Brandmark_White_RGB_2021.png", // Logo blanco para fondo oscuro (tema oscuro)
    },
    {
      name: "Mastercard",
      dark: "/images/cards/mc_vrt_opt_pos_4c_3x.png",  // Logo de color para fondo claro
      light: "/images/cards/mc_vrt_opt_rev_4c_3x.png", // Logo reverso (blanco) para fondo oscuro
    },
    {
      name: "Elo",
      src: "/images/cards/ELO_Marca_principal_RGB-01.png", // Versión única para ambos temas
    },
  ],
  // ADVERTENCIA SOBERANA: La carpeta 'icons' está vacía. Estas propiedades se dejan
  // fuera para evitar el uso de cadenas vacías y mantener la integridad de tipos.
  // Los componentes resilientes simplemente no renderizarán los íconos faltantes.
  // icons: {},
};
