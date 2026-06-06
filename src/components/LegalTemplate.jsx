
import { useState, useEffect, useRef } from "react";
import "@/styles/privacy-policy.css";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

function LegalTemplate({ sections }) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const sectionRefs = useRef({});

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const handleScroll = () => {
      let current = sections[0].id;

      sections.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const offset = 100; 
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <Navbar variant="light"/>
      <div className="pp-page">
        <div className="pp-layout">

          <aside className="pp-nav-col">
            <nav className="pp-nav-sticky">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`pp-nav-item ${activeSection === section.id ? "pp-nav-item--active" : ""}`}
                  onClick={() => scrollToSection(section.id)}
                >
                  <span className="pp-nav-line" />
                  <span className="pp-nav-label">{section.label}</span>
                </button>
              ))}
            </nav>
          </aside>

          <main className="pp-content-col">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="pp-section"
              >
                <h2 className="pp-section-title">{section.title}</h2>

                {section.content.map((block, i) => {
                  if (block.type === "text") {
                    return <p key={i} className="pp-text">{block.value}</p>;
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

export default LegalTemplate;