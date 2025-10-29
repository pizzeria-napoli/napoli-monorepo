"use client";

import Image from "next/image";
import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./Dialog";
import { Button } from "./Button";

interface Pizza {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface PizzaDetailModalProps {
  pizza: Pizza | null;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export function PizzaDetailModal({
  pizza,
  isOpen,
  onOpenChange,
}: PizzaDetailModalProps) {
  if (!pizza) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{pizza.name}</DialogTitle>
          <DialogDescription className="text-lg font-semibold text-primary">
            {pizza.price}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2">
          <div className="relative aspect-square">
            <Image
              src={pizza.image}
              alt={pizza.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="mb-2 text-lg font-semibold">Ingredientes</h3>
            <p className="text-muted-foreground">{pizza.description}</p>
          </div>
        </div>

        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            size="lg"
            className="bg-green-600 hover:bg-green-700"
          >
            Adicionar ao Pedido
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Fechar
            </Button>
          </DialogClose>
        </DialogFooter>

        {/* Este botón es redundante ya que DialogContent ahora lo incluye por defecto, pero se mantiene por si se desea un control explícito */}
        <DialogClose className="absolute top-4 right-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
