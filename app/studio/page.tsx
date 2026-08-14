import type { Metadata } from "next";
import Studio from "../components/Studio";

export const metadata: Metadata = {
  title: "Studio — MJ Architect",
  description: "MJ Architects is an architecture and design practice led by Mahesh Jangid.",
};

export default function StudioPage() {
  return (
    <div className="pt-16">
      <Studio />
    </div>
  );
}
