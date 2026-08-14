import type { Metadata } from "next";
import Blog from "../components/Blog";

export const metadata: Metadata = {
  title: "Journal — MJ Architect",
  description: "Notes on architecture, material, and process from MJ Architect.",
};

export default function BlogPage() {
  return (
    <div className="pt-16">
      <Blog />
    </div>
  );
}
