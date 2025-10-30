// napoli-pwa/src/app/components/sections/home/About.tsx

import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "../../../components/ui/Button";
import { IMAGES } from "../../../lib/images";
import { BRAND_INFO } from "../../../lib/branding";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center md:items-start md:text-left">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Nossa História
            </div>
            <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-5xl">
              Uma Tradição de Sabor Familiar
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {BRAND_INFO.description}
            </p>
            <Button
              asChild
              className="mt-4 bg-red-600 font-bold text-white hover:bg-red-700"
            >
              <a href="#menu">
                Veja Nosso Cardápio
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            {/* Este Guardián de Contrato asegura que la imagen solo se renderice si la ruta es válida */}
            {IMAGES.about.chef && (
              <Image
                src={IMAGES.about.chef} // Consumirá la ruta soberana: /images/about/pizzaiolo-trabalhando-550x550.jpg
                width={550}
                height={550}
                alt="Chef pizzaiolo da Pizzaria Napoli em Florianópolis"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
