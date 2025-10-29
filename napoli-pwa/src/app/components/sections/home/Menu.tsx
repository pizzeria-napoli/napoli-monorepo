import { PizzaCard } from "../../../components/ui/PizzaCard";
import { menuData } from "../../../lib/menu-data";
import { Separator } from "../../../components/ui/Separator";

// Interfaz para asegurar la integridad de tipos de los datos de la pizza
interface Pizza {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function MenuSection() {
  return (
    <section id="menu" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Nosso Cardápio
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Sabores que Encantam
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Feitas com ingredientes frescos e massa de fermentação natural,
              nossas pizzas são uma explosão de sabor. Escolha a sua favorita!
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {/* Pizzas Tradicionais */}
          <div className="col-span-full">
            <h3 className="mb-4 text-2xl font-bold tracking-tight">
              Tradicionais
            </h3>
            <Separator />
          </div>
          {menuData.tradicionais.map((pizza: Pizza, index: number) => (
            <PizzaCard key={`trad-${index}`} pizza={pizza} />
          ))}

          {/* Pizzas Especiais */}
          <div className="col-span-full mt-8">
            <h3 className="mb-4 text-2xl font-bold tracking-tight">
              Especiais
            </h3>
            <Separator />
          </div>
          {menuData.especiais.map((pizza: Pizza, index: number) => (
            <PizzaCard key={`esp-${index}`} pizza={pizza} />
          ))}

          {/* Pizzas Doces */}
          <div className="col-span-full mt-8">
            <h3 className="mb-4 text-2xl font-bold tracking-tight">Doces</h3>
            <Separator />
          </div>
          {menuData.doces.map((pizza: Pizza, index: number) => (
            <PizzaCard key={`doce-${index}`} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  );
}
