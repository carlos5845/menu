import { Hero } from "@/components/sections/Hero";
import { MenuShowcase } from "@/components/sections/MenuShowcase";
import { SmartNavigation } from "@/components/sections/SmartNavigation";
import Carrusel from "@/components/ui/carrusel";
import { getMenuData } from "@/lib/supabase/menu";

export const revalidate = 0; // Datos siempre frescos desde la base de datos

export default async function Home() {
  const menuData = await getMenuData();

  return (
    <main>
      <Hero />
      <Carrusel />
      <SmartNavigation menuData={menuData} />
      <MenuShowcase menuData={menuData} />
    </main>
  );
}

