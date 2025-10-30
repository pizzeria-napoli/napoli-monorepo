"use client";

import { Button } from "../../../components/ui/Button";
import { Input } from "../../../components/ui/Input";
import { Textarea } from "../../../components/ui/TextArea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/Select";
import { BRAND_INFO } from "../../../lib/branding";
import { MapComponent } from "../../ui/GoogleMap";

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Entre em Contato ou Visite-nos
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Tem alguma dúvida ou quer fazer uma reserva? Fale conosco ou clique
            no mapa para traçar sua rota!
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="mx-auto w-full max-w-sm space-y-4">
            <h3 className="text-center text-2xl font-semibold">Envie uma Mensagem</h3>
            <form className="flex flex-col space-y-2">
              <Input type="text" placeholder="Nome" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Telefone/WhatsApp" />
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a unidade" />
                </SelectTrigger>
                <SelectContent>
                  {BRAND_INFO.addresses.map((location) => (
                    <SelectItem key={location.name} value={location.name}>
                      {location.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea placeholder="Sua mensagem" />
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="h-[400px] w-full md:h-full">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
