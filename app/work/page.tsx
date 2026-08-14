import type { Metadata } from "next";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: "Work — MJ Architect",
  description: "Selected architecture and design work by MJ Architect.",
};

export default function WorkPage() {
  return <Projects />;
}
