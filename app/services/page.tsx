import type { Metadata } from "next";
import Services from "../components/Services";

export const metadata: Metadata = {
  title: "Services — MJ Architects",
  description: "Architectural design, interiors, master planning, landscape, project management, and sustainability consulting from MJ Architects.",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
    </div>
  );
}
