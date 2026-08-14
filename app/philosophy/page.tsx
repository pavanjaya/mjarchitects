import type { Metadata } from "next";
import Philosophy from "../components/Philosophy";

export const metadata: Metadata = {
  title: "Philosophy — MJ Architect",
  description: "Sense gives architecture its order. Sensibility gives it depth. Space gives it life.",
};

export default function PhilosophyPage() {
  return (
    <div className="pt-16">
      <Philosophy />
    </div>
  );
}
