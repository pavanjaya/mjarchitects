import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/motion/Preloader";
import SmoothScroll from "./components/motion/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

const grotesk = Archivo({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MJ Architects | Architecture & Design Studio",
  description: "An architecture and design studio grounded in sense, sensibility, and space — shaping buildings around place, purpose, and people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${grotesk.variable}`}>
      <body className="min-h-full">
        <Preloader />
        <SmoothScroll />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
