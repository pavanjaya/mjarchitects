import type { Metadata } from "next";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "Services — MJ Architect",
  description: "Architectural design, interiors, master planning, landscape, project management, and sustainability consulting from MJ Architect.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
    </div>
  );
}
