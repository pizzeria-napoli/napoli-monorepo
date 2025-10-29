import Image from "next/image";
import { ShoppingCart } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./Card";
import { Button } from "./Button";

interface Pizza {
  name: string;
  description: string;
  price: string;
  image: string;
}

export function PizzaCard({ pizza }: { pizza: Pizza }) {
  return (
    <Card className="w-full max-w-sm transform overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            src={pizza.image}
            alt={pizza.name}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-2 text-xl font-bold">{pizza.name}</CardTitle>
        <CardDescription className="mb-4 h-12 text-gray-600 dark:text-gray-400">
          {pizza.description}
        </CardDescription>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-primary">{pizza.price}</p>
          <Button size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
