import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sarah Lynn | Estudio de Arquitectura",
  description:
    "Portafolio de arquitectura contemporánea. Diseño residencial, comercial, interiorismo y urbanismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
