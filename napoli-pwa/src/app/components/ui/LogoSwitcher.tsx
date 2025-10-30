// napoli-pwa/src/app/components/ui/LogoSwitcher.tsx

"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useIsMounted } from "../../hooks/use-is-mounted";
import { IMAGES } from "../../lib/images";

export function LogoSwitcher() {
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    // Renderiza un placeholder para evitar el "layout shift" y errores de hidratación.
    // Sus dimensiones coinciden con las del logo final.
    return <div style={{ width: 120, height: 40 }} aria-hidden="true" />;
  }

  const logoSrc = resolvedTheme === "dark" ? IMAGES.logo.light : IMAGES.logo.dark;

  return (
    <Image
      src={logoSrc}
      alt="Pizzaria Napoli Logo"
      width={120}
      height={40}
      priority // Esencial para el LCP (Largest Contentful Paint)
    />
  );
}
