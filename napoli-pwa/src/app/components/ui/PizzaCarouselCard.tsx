"use client";

import Image from "next/image";
import { Button } from "./Button";

interface Pizza {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface PizzaCarouselCardProps {
  pizza: Pizza;
  onClick: () => void;
}

export function PizzaCarouselCard({ pizza, onClick }: PizzaCarouselCardProps) {
  return (
    <div
      className="group relative aspect-4/5 transform cursor-pointer overflow-hidden rounded-xl transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalhes da pizza ${pizza.name}`}
    >
      {/* Imagen de Fondo */}
      <Image
        src={pizza.image}
        alt={pizza.name}
        fill
        style={{ objectFit: "cover" }}
        className="z-0 transition-transform duration-300 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      />

      {/* Overlay para legibilidad del texto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Contenido de la Tarjeta */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
        <h3 className="mb-2 font-serif text-2xl font-bold">{pizza.name}</h3>
        <Button
          variant="secondary"
          className="w-full"
          onClick={onClick}
        >
          Ver Detalhes
        </Button>
      </div>
    </div>
  );
}
