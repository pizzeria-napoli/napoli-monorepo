"use client";

import { useEffect, useState } from "react";

export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Corrected this line
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
}
