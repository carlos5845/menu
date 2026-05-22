import type { Metadata } from "next";
import { Anybody, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coastal Zest",
  description: "A vibrant, bold, and modern coastal cevicheria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${plusJakartaSans.variable} h-full antialiased overflow-x-clip`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-[#f5f5f5] overflow-x-clip relative w-full">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
