// napoli-pwa/src/app/components/sections/home/Hero.tsx

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "../../../components/ui/Button";
import { IMAGES } from "../../../lib/images";

// La interfaz no cambia, seguimos necesitando la misma estructura de datos.
interface HeroImage {
  src: string;
  alt: string;
}

// Duración de cada imagen en milisegundos
const SLIDE_DURATION = 5000;

export function HeroSection() {
  // Estado para controlar qué imagen está visible actualmente
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect para manejar el ciclo automático de las imágenes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === IMAGES.hero.carousel.length - 1 ? 0 : prevIndex + 1
      );
    }, SLIDE_DURATION);

    // Limpiamos el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Contenedor de las imágenes de fondo */}
      <div className="absolute inset-0 z-0">
        {IMAGES.hero.carousel.map((image: HeroImage, index: number) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
            quality={85}
            priority={index === 0}
            className={`
              brightness-50
              transition-opacity duration-1000 ease-in-out
              ${index === currentIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Contenido superpuesto (no cambia) */}
      <div className="relative z-20 flex h-full items-center justify-center text-center text-white">
        <div className="flex flex-col items-center p-4">
          <h1 className="animate-fade-in-down text-4xl font-bold tracking-tighter text-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            O Sabor da Itália, no Coração de Floripa
          </h1>
          <p className="max-w-[900px] animate-fade-in-up text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Feita com os melhores ingredientes, com massa de fermentação natural
            e assada no forno a lenha. Sabor autêntico em cada fatia.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 animate-fade-in transform rounded-full bg-red-600 px-6 py-3 text-lg font-bold text-white shadow-lg hover:scale-105 hover:bg-red-700"
            style={{ animationDelay: "0.4s" }}
          >
            <Link href="#menu">
              Ver Cardápio
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
