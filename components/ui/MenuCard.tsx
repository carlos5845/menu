import Image from "next/image";
import { Chip } from "./Chip";

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  tags?: string[];
}

export function MenuCard({ title, description, price, imageSrc, tags = [] }: MenuCardProps) {
  return (
    <article className="group bg-surface-container rounded-lg overflow-hidden border-2 border-surface-variant hover:border-outline transition-colors relative flex flex-col h-full">
      {/* Price Pill */}
      <div className="absolute top-4 right-4 z-10 bg-primary text-on-primary rounded-full px-4 py-1 text-label-sm font-bold shadow-hard-pop-primary">
        {price}
      </div>

      <div className="relative h-48 w-full overflow-hidden bg-surface-container-high">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex gap-2 mb-3 flex-wrap">
          {tags.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </div>
        <h3 className="text-headline-md text-on-surface mb-2">{title}</h3>
        <p className="text-body-md text-on-surface-variant flex-grow line-clamp-3">
          {description}
        </p>
      </div>
    </article>
  );
}
