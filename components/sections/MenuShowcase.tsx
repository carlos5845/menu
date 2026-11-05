import { MenuCategory, MENU_DATA } from "@/lib/data";
import { MenuShowcaseClient } from "./MenuShowcaseClient";

export function MenuShowcase({ menuData }: { menuData?: MenuCategory[] }) {
  const currentMenu = menuData && menuData.length > 0 ? menuData : MENU_DATA;
  return <MenuShowcaseClient menuData={currentMenu} />;
}
