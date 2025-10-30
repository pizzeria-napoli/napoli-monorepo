// src/lib/menu-data.ts

/**
 * @file menu-data.ts
 * @description Fuente Única de Verdad (SSoT) para los datos del menú de pizzas.
 * @version 2.1.0
 * @author IA Asistente de Élite
 *
 * @soberano
 * Sincronizado com a SSoT `images.ts` para garantir a integridade das rotas de imagem.
 */

import { IMAGES } from "./images";

export const menuData = {
  tradicionais: [
    {
      name: "Mussarela",
      description: "A simplicidade perfeita: nosso molho de tomate artesanal coberto com queijo mussarela de alta qualidade e um toque de orégano.",
      price: "R$ 40,00",
      image: IMAGES.menu.mussarela,
    },
    {
      name: "Calabresa",
      description: "Um clássico irresistível: fatias de calabresa premium sobre uma generosa camada de mussarela, finalizada com cebolas fatiadas finamente.",
      price: "R$ 45,00",
      image: IMAGES.menu.calabresa,
    },
    {
      name: "Margherita",
      description: "A rainha das pizzas, direto da Itália para Floripa: molho de tomate fresco, mussarela de búfala cremosa e folhas de manjericão fresco.",
      price: "R$ 48,00",
      image: IMAGES.menu.margherita,
    },
    {
        name: "Portuguesa",
        description: "Uma combinação completa de sabores brasileiros: presunto, ovos cozidos, cebola, azeitonas e pimentão sobre uma base de mussarela.",
        price: "R$ 50,00",
        image: IMAGES.menu.portuguesa,
    },
  ],
  especiais: [
    {
      name: "Quatro Queijos",
      description: "Para os amantes de queijo: uma fusão cremosa e inesquecível de mussarela, provolone, parmesão e gorgonzola, perfeitamente equilibrados.",
      price: "R$ 55,00",
      image: IMAGES.menu.quatroQueijos,
    },
    {
      name: "Frango com Catupiry",
      description: "A favorita do Brasil, com nosso toque especial: frango desfiado e temperado, coberto com o autêntico e cremoso Catupiry® Original.",
      price: "R$ 52,00",
      image: IMAGES.menu.frangoCatupiry,
    },
    {
        name: "Pepperoni",
        description: "Intensa e irresistivelmente saborosa: molho de tomate especial, mussarela e fatias generosas de pepperoni com um leve toque picante.",
        price: "R$ 53,00",
        image: IMAGES.menu.pepperoni,
    },
    {
        name: "Lombinho",
        description: "Sabor defumado e marcante que surpreende: lombo canadense, cebola fresca, azeitonas pretas e uma cobertura de queijo mussarela derretido.",
        price: "R$ 54,00",
        image: IMAGES.menu.lombinho,
    }
  ],
  doces: [
    {
      name: "Chocolate com Morango",
      description: "A sobremesa dos sonhos em forma de pizza: uma base crocante coberta com um delicioso creme de chocolate e morangos frescos fatiados.",
      price: "R$ 45,00",
      image: IMAGES.menu.chocolateMorango,
    },
    {
      name: "Romeu e Julieta",
      description: "O final perfeito com sotaque mineiro: a clássica e deliciosa combinação de goiabada cremosa derretida sobre queijo minas frescal.",
      price: "R$ 42,00",
      image: IMAGES.menu.romeuJulieta,
    },
  ],
};
