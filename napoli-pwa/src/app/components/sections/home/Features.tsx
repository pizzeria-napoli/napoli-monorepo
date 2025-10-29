import { Smartphone, Phone, Share2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/Card";

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-red-600" />,
    title: "App Pizzaria Napoli",
    description:
      "Instale o nosso app e realize seu pedido com conforto e segurança.",
  },
  {
    icon: <Phone className="h-8 w-8 text-red-600" />,
    title: "Tele-Entrega",
    description:
      "A Pizzaria Napoli entrega para todos os bairros de Florianópolis. Confira nosso horário de atendimento.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-red-600" />,
    title: "Redes Sociais",
    description: "Acompanhe as ofertas e promoções pelo Instagram.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full bg-background py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Nossos Serviços
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Peça de Onde Estiver
          </h2>
          <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Oferecemos diversas maneiras para você saborear a melhor pizza da
            ilha. Escolha a que mais combina com você!
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col items-center p-6 text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <CardHeader className="p-0 mb-2">
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardDescription>{feature.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
