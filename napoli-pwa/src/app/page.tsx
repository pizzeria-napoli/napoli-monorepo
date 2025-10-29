import { HeroSection } from "./components/sections/home/Hero";
import { AboutSection } from "./components/sections/home/About";
import { FeaturesSection } from "./components/sections/home/Features";
import { MenuCarousel } from "./components/sections/home/MenuCarousel";
import { GallerySection } from "./components/sections/home/Gallery";
import { ContactSection } from "./components/sections/home/Contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <MenuCarousel />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
