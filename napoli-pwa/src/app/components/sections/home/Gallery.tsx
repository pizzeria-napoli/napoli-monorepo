"use client";

import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/Carousel";
import { Card, CardContent } from "../../../components/ui/Card";
import { IMAGES } from "../../../lib/images";

export function GallerySection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section
      id="gallery"
      className="w-full bg-background py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm dark:bg-gray-800">
            Nossa Galeria
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Momentos e Sabores
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Explore a atmosfera única e os pratos que fazem do Pizzaria Napoli
            um lugar especial.
          </p>
        </div>
        <div className="mx-auto max-w-5xl pt-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent>
              {IMAGES.gallery.map((src: string, index: number) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="relative flex aspect-square items-center justify-center p-0">
                        <Image
                          src={src}
                          alt={`Galeria de Imagens ${index + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
