// napoli-pwa/src/app/components/ui/PaymentMethods.tsx

"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { IMAGES } from "../../lib/images";

// PILAR #2: Definición de tipo explícita.
interface PaymentMethod {
  name: string;
  src?: string;
  light?: string;
  dark?: string;
}

export function PaymentMethods() {
  const { resolvedTheme } = useTheme();

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
