// src/pages/PrivacyPolicy.jsx
import { useState, useEffect, useRef } from "react";
import "@/styles/privacypolicy.css";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

const POLICY_SECTIONS = [
  {
    id: "introduction",
    label: "Introduction",
    title: "Introduction",
    content: [
      {
        type: "text",
        value:
          "Cubots is committed to maintaining responsible digital practices, operational transparency, and secure handling of information across all our platforms and services.",
      },
      {
        type: "text",
        value:
          "This Privacy Policy outlines how information may be collected, processed, managed, and protected when users interact with our website, business solutions, consultations, and digital environments.",
      },
      {
        type: "text",
        value:
          "Our approach focuses on protecting operational integrity while supporting reliable and scalable user experiences.",
      },
    ],
  },
  {
    id: "information-we-collect",
    label: "Information We May Collect",
    title: "Information We May Collect",
    content: [
      {
        type: "text",
        value: "Information may be collected through:",
      },
      {
        type: "list",
        items: [
          "Website interactions",
          "Contact forms",
          "Consultation requests",
          "Operational inquiries",
          "Analytics systems",
          "Communication channels",
        ],
      },
      {
        type: "text",
        value: "Collected information may include:",
      },
      {
        type: "list",
        items: [
          "Name and contact information",
          "Company details",
          "Operational requirements",
          "Technical usage data",
          "Browser and device information",
          "Communication records",
        ],
      },
      {
        type: "text",
        value:
          "Information is collected only where relevant to operational communication, service improvement, or business functionality.",
      },
    ],
  },
  {
    id: "how-information-used",
    label: "How Information May Be Used",
    title: "How Information May Be Used",
    content: [
      {
        type: "text",
        value: "Information may be used to:",
      },
      {
        type: "list",
        items: [
          "Improve website experiences",
          "Support operational communication",
          "Respond to inquiries",
          "Optimize platform performance",
          "Analyze operational activity",
          "Improve service reliability",
          "Provide requested information and solutions",
        ],
      },
      {
        type: "text",
        value:
          "Cubots by CubeMoons does not intentionally distribute or sell personal information to unauthorized third parties.",
      },
    ],
  },
  {
    id: "operational-security",
    label: "Operational Security",
    title: "Operational Security",
    content: [
      {
        type: "text",
        value:
          "We implement reasonable technical and operational practices designed to support secure digital environments and responsible information handling.",
      },
      {
        type: "text",
        value: "Security practices may include:",
      },
      {
        type: "list",
        items: [
          "Controlled system access",
          "Operational monitoring",
          "Infrastructure reviews",
          "Workflow protection measures",
          "Platform security processes",
        ],
      },
      {
        type: "text",
        value:
          "Operational safeguards are reviewed periodically to improve reliability and digital protection standards.",
      },
    ],
  },
  {
    id: "external-services",
    label: "External Services and Integrations",
    title: "External Services and Integrations",
    content: [
      {
        type: "text",
        value:
          "Certain operational features may rely on external tools, communication platforms, analytics providers, or integrated technologies.",
      },
      {
        type: "text",
        value:
          "These services may process limited operational information according to their own policies and operational standards.",
      },
    ],
  },
  {
    id: "information-retention",
    label: "Information Retention",
    title: "Information Retention",
    content: [
      {
        type: "text",
        value:
          "Operational information may be retained only for reasonable business, communication, analytics, or service related purposes.",
      },
      {
        type: "text",
        value:
          "Retention periods may vary depending on operational requirements and platform usage.",
      },
    ],
  },
  {
    id: "policy-revisions",
    label: "Policy Revisions",
    title: "Policy Revisions",
    content: [
      {
        type: "text",
        value:
          "This Privacy Policy may be updated periodically to reflect operational improvements, evolving technologies, service changes, or regulatory developments.",
      },
      {
        type: "text",
        value:
          "Updated versions will be reflected on this page when applicable.",
      },
    ],
  },
  {
    id: "contact-information",
    label: "Contact Information",
    title: "Contact Information",
    content: [
      {
        type: "text",
        value:
          "Questions regarding this Privacy Policy or operational practices may be directed to:",
      },
      {
        type: "link",
        label: "hello@cubots.ai",
        href: "mailto:hello@cubots.ai",
      },
    ],
  },
];

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");
  const sectionRefs = useRef({});

  // Scroll spy — updates active nav item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      let current = POLICY_SECTIONS[0].id;

      POLICY_SECTIONS.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.35) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const offset = 100; // account for any sticky navbar
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
        <Navbar variant="light"/>
    <div className="pp-page">

      {/* ── MAIN LAYOUT ── */}
      <div className="pp-layout">

        {/* ── LEFT: Sticky nav ── */}
        <aside className="pp-nav-col">
          <nav className="pp-nav-sticky">
            {POLICY_SECTIONS.map((section) => (
              <button
                key={section.id}
                className={`pp-nav-item ${activeSection === section.id ? "pp-nav-item--active" : ""}`}
                onClick={() => scrollToSection(section.id)}
              >
                {/* Active indicator line */}
                <span className="pp-nav-line" />
                <span className="pp-nav-label">{section.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* ── RIGHT: Scrollable content ── */}
        <main className="pp-content-col">
          {POLICY_SECTIONS.map((section) => (
            <div
              key={section.id}
              id={section.id}
              ref={(el) => (sectionRefs.current[section.id] = el)}
              className="pp-section"
            >
              <h2 className="pp-section-title">{section.title}</h2>

              {section.content.map((block, i) => {
                if (block.type === "text") {
                  return (
                    <p key={i} className="pp-text">
                      {block.value}
                    </p>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="pp-list">
                      {block.items.map((item, j) => (
                        <li key={j} className="pp-list-item">
                          <span className="pp-bullet">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "link") {
                  return (
                    <a key={i} href={block.href} className="pp-link">
                      {block.label}
                    </a>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </main>

      </div>
    </div>
    <ContactSection/>
    </>
  );
}

export default PrivacyPolicy;