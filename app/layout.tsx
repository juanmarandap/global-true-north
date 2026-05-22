import type { Metadata } from "next";
import { Geist, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Global True North",
  description: "Un espacio global donde líderes, emprendedores y creadores se conectan.",
  keywords: ["eventos", "líderes", "emprendedores", "Silicon Valley", "innovación", "experiencias inmersivas"],
  icons: {
    icon: "/images/gtn-circle2.png",
    apple: "/images/gtn-circle2.png",
  },
  openGraph: {
    title: "Global True North",
    description: "Un espacio global donde líderes, emprendedores y creadores se conectan.",
    url: "https://globaltruenorth.com.mx",
    siteName: "Global True North",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
