import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/motion/Preloader";
import "./globals.css";

const grotesk = Archivo({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MJ Architect — Design. Build. Inspire.",
  description: "Award-winning architectural studio crafting spaces that inspire, endure, and connect humanity with the built environment.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
