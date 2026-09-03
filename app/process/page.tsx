import type { Metadata } from "next";
import Process from "../components/Process";

export const metadata: Metadata = {
  title: "Process — MJ Architects",
  description: "How MJ Architects works, from discovery to handover.",
};

export default function ProcessPage() {
  return (
    <div className="pt-16">
      <Process />
    </div>
  );
}
