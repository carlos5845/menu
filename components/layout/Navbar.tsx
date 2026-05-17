import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b border-surface-variant">
      <div className="mx-auto flex h-20 items-center justify-between px-4 sm:px-8 max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/LOGO-CEVICHE.png"
            alt="Coastal Zest Logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/menu" className="text-on-background text-body-md hover:text-primary transition-colors">
            Menu
          </Link>
          <Link href="/about" className="text-on-background text-body-md hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-on-background text-body-md hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
