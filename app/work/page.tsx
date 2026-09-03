import type { Metadata } from "next";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: "Work — MJ Architects",
  description: "Selected architecture and design work by MJ Architects.",
};

export default function WorkPage() {
  return (
    <div className="pt-24">
      <Projects />
    </div>
  );
}
