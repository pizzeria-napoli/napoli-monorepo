"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useIsMounted } from "../../hooks/use-is-mounted";
import { IMAGES } from "../../lib/images";

export function LogoSwitcher() {
  const { resolvedTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) {
    // Render a placeholder or nothing on the server to avoid mismatch
    return <div style={{ width: 120, height: 40 }} />;
  }

  const logoSrc = resolvedTheme === "dark" ? IMAGES.logo.light : IMAGES.logo.dark;

  return (
    <Image
      src={logoSrc}
      alt="Pizzaria Napoli Logo"
      width={120}
      height={40}
      priority
    />
  );
}
