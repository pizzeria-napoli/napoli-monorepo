// napoli-pwa/src/app/components/ui/PaymentMethods.tsx

"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { IMAGES } from "../../lib/images";
import { useIsMounted } from "../../hooks/use-is-mounted"; // Se importa nuestro hook soberano

interface PaymentMethod {
  name: string;
  src?: string;
  light?: string;
  dark?: string;
}

export function PaymentMethods() {
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted(); // Se utiliza el hook

  // NIVELACIÓN SOBERANA Y DEFINITIVA: Guardián de Hidratación
  // Si el componente aún no está montado en el cliente, no renderizamos nada
  // para asegurar que el HTML del servidor y el del cliente coincidan perfectamente.
  if (!isMounted) {
    return null; // O un esqueleto/placeholder si se prefiere
  }

  return (
    <div className="flex items-center justify-center gap-2 md:justify-end">
      {IMAGES.paymentMethods.map((method: PaymentMethod) => {
        const imageSrc =
          resolvedTheme === "dark" && method.dark
            ? method.dark
            : method.light || method.src;

        if (!imageSrc) {
          return null;
        }

        return (
          <div
            key={method.name}
            className="flex h-10 w-16 items-center justify-center rounded-md bg-white/90 p-1 shadow-md"
            title={method.name}
          >
            <div className="relative h-full w-full">
              <Image
                src={imageSrc}
                alt={method.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
