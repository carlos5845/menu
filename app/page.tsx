import { Hero } from "@/components/sections/Hero";
import { MenuShowcase } from "@/components/sections/MenuShowcase";
import { SmartNavigation } from "@/components/sections/SmartNavigation";
import Carrusel from "@/components/ui/carrusel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carrusel />
      <SmartNavigation />
      <MenuShowcase />
    </main>
  );
}

