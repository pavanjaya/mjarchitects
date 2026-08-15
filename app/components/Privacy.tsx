import Reveal from "./Reveal";

const sections = [
  {
    title: "Information We Collect",
    body: "When you contact us through our website — via the contact form, email, or phone — we collect the information you provide, such as your name, email address, phone number, and details about your project. We also collect standard technical information (browser type, device, pages visited) through normal website operation.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information you share with us to respond to enquiries, discuss potential projects, and communicate with you about our services. We do not sell, rent, or trade your personal information to third parties.",
  },
  {
    title: "Cookies & Analytics",
    body: "Our website may use cookies and similar technologies to understand how visitors use the site and to improve its performance. You can disable cookies through your browser settings at any time without affecting your ability to browse the site.",
  },
  {
    title: "Third-Party Links",
    body: "Our website may link to third-party sites, including our social media profiles. We are not responsible for the privacy practices or content of those external sites, and we encourage you to review their policies separately.",
  },
  {
    title: "Data Security",
    body: "We take reasonable measures to protect the information you share with us from unauthorised access, loss, or misuse. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Your Rights",
    body: "You may request access to, correction of, or deletion of the personal information we hold about you at any time by contacting us directly at hello@mjarchitects.co.",
  },
  {
    title: "Changes to This Policy",
    body: "We may update this privacy policy from time to time to reflect changes in our practices. Any changes will be posted on this page with an updated effective date.",
  },
];

export default function Privacy() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <Reveal>
          <p
            className="text-[12px] uppercase mb-6"
            style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
          >
            (Legal)
          </p>
          <h1
            className="font-display uppercase mb-6 max-w-3xl"
            style={{
              color: "var(--foreground)",
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-sm mb-20 md:mb-28"
            style={{ color: "var(--muted)" }}
          >
            Last updated: August 2026
          </p>
        </Reveal>

        <div style={{ borderTop: "1px solid var(--border)" }}>
          {sections.map((section, i) => (
            <Reveal key={section.title} delay={(i % 4) * 0.05}>
              <div
                className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-10 py-10 md:py-12"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <h2
                  className="font-display"
                  style={{
                    color: "var(--foreground)",
                    fontSize: "clamp(1.1rem, 1.6vw, 1.375rem)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {section.title}
                </h2>
                <p
                  className="text-base leading-relaxed max-w-2xl"
                  style={{ color: "var(--muted)" }}
                >
                  {section.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
