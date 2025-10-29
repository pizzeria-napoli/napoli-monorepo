"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "../../../components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../components/ui/Carousel";
import { IMAGES } from "../../../lib/images";

interface HeroImage {
  src: string;
  alt: string;
}

export function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 z-0">
        <Carousel
          plugins={[plugin.current]}
          className="h-full w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={() => plugin.current.play()}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {IMAGES.hero.carousel.map((image: HeroImage, index: number) => (
              <CarouselItem key={index}>
                <div className="relative h-screen w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    quality={85}
                    priority={index === 0}
                    className="brightness-50"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Content */}
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
