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

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Entre em Contato
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Tem alguma dúvida ou quer fazer uma reserva? Fale conosco!
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col space-y-2">
            <Input type="text" placeholder="Nome" className="max-w-lg flex-1" />
            <Input
              type="email"
              placeholder="Email"
              className="max-w-lg flex-1"
            />
            <Input
              type="tel"
              placeholder="Telefone/WhatsApp"
              className="max-w-lg flex-1"
            />
            <Select>
              <SelectTrigger className="w-full">
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
            <Textarea
              placeholder="Sua mensagem"
              className="max-w-lg flex-1"
            />
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
