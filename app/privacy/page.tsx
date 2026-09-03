import type { Metadata } from "next";
import Privacy from "../components/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — MJ Architects",
  description: "How MJ Architects collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <Privacy />
    </div>
  );
}
