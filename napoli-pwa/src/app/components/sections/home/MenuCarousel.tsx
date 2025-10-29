"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/Carousel";
import { PizzaCarouselCard } from "../../../components/ui/PizzaCarouselCard";
import { PizzaDetailModal } from "../../../components/ui/PizzaDetailModal";
import { menuData } from "../../../lib/menu-data";

// Definimos la interfaz para ser consistentes
interface Pizza {
  name: string;
  description: string;
  price: string;
  image: string;
}

// Juntamos todas las pizzas en un solo array para el carrusel
const allPizzas: Pizza[] = [
  ...menuData.tradicionais,
  ...menuData.especiais,
  ...menuData.doces,
];

export function MenuCarousel() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedPizza, setSelectedPizza] = React.useState<Pizza | null>(null);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const handleCardClick = (pizza: Pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  return (
    <section
      id="menu-carousel"
      className="w-full bg-muted/40 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">
            Nosso Cardápio
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Sabores que Encantam
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore nosso rodízio visual de pizzas. Clique em qualquer uma para
            ver os detalhes.
          </p>
        </div>

        <Carousel
          plugins={[autoplayPlugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-full max-w-6xl"
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={() => autoplayPlugin.current.play()}
        >
          <CarouselContent className="-ml-4">
            {allPizzas.map((pizza, index) => (
              <CarouselItem
                key={index}
                className="basis-4/5 pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="p-1">
                  <PizzaCarouselCard
                    pizza={pizza}
                    onClick={() => handleCardClick(pizza)}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>

      <PizzaDetailModal
        pizza={selectedPizza}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}
