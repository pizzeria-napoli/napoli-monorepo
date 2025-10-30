// napoli-pwa/src/app/page.tsx

import { HeroSection } from "./components/sections/home/Hero";
import { AboutSection } from "./components/sections/home/About";
import { FeaturesSection } from "./components/sections/home/Features";
import { MenuCarousel } from "./components/sections/home/MenuCarousel";
import { GallerySection } from "./components/sections/home/Gallery";
import { ContactSection } from "./components/sections/home/Contact";
import { HealthCheck } from "./components/ui/HealthCheck"; // <-- 1. IMPORTA EL APARATO

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MenuCarousel />
      <GallerySection />
      <ContactSection />
      <HealthCheck /> {/* <-- 2. AÑADE EL APARATO AQUÍ */}
    </main>
  );
}
