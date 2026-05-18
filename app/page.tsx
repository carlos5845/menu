import { Hero } from "@/components/sections/Hero";
import { MenuShowcase } from "@/components/sections/MenuShowcase";
import Carrusel from "@/components/ui/carrusel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Carrusel />
      <MenuShowcase />
    </main>
  );
}

