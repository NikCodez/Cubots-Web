// src/pages/About.jsx
import { useEffect, useState, useRef } from "react";
import "@/styles/about.css";
import Navbar from "@/components/Navbar";
import crystalHero from "@/assets/images/crystal-hero.png";
import aiDashboard from "@/assets/images/ai-dashboard.png";
import exploreArrow from "@/assets/images/exploreArrow.png";
import pinkbg from "@/assets/images/pink-bg.png";
import bluebg from "@/assets/images/blue.png";
import darkbluebg from "@/assets/images/darkblue.png";

const RESOURCE_CARDS = [
  { id: 1, image: bluebg, title: "Webflow 101", desc: "Learn the fundamentals of web design and development through this comprehensive course.", linkText: "Watch webinar", linkUrl: "/services" },
  { id: 2, image: pinkbg, title: "Webflow 101", desc: "Learn the fundamentals of web design and development through this comprehensive course.", linkText: "Watch webinar", linkUrl: "/services" },
  { id: 3, image: darkbluebg, title: "Webflow 101", desc: "Learn the fundamentals of web design and development through this comprehensive course.", linkText: "Watch webinar", linkUrl: "/services" },
  { id: 4, image: pinkbg, title: "Webflow 101", desc: "Learn the fundamentals of web design and development through this comprehensive course.", linkText: "Watch webinar", linkUrl: "/services" },
  { id: 5, image: bluebg, title: "Advanced Design", desc: "Master advanced layout architectures, motion tools, and professional database connections.", linkText: "Watch webinar", linkUrl: "/services" },
  { id: 6, image: pinkbg, title: "Figma to Code", desc: "Convert creative workspace prototypes into functional pixel-perfect responsive layers.", linkText: "Watch webinar", linkUrl: "/services" }
];

function About() {
    const sliderRef = useRef(null);

  // 4. STEP ACTION CALCULATIONS
  const handleScrollStep = (direction) => {
    const track = sliderRef.current;
    if (!track) return;

    // Card width (340px) + flex column gap spacing (32px) = 372px
    const stepDistance = 372; 

    const targetPosition =
      direction === "left"
        ? track.scrollLeft - stepDistance
        : track.scrollLeft + stepDistance;

    track.scrollTo({
      left: targetPosition,
      behavior: "smooth" // Triggers native browser inertia tracking animations
    });
  };
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar variant="dark" />
      <div className="ab-page">
        
        <section className="ab-hero">
          <div className="ab-hero-content">
            <h1 className="ab-hero-title">
              Solutions Built For Modern<br />Business Operations
            </h1>
           <p className="ab-hero-subtitle">
  Cubots helps businesses improve efficiency, simplify workflows, and build intelligent operational systems through practical AI solutions<br></br>designed around real business needs.
</p>
          </div>

          <div
            className="ab-hero-image-wrap"
            style={{ transform: `translateY(${scrollY * 0.12}px)` }}
          >
            <img
              src={crystalHero}
              alt="Cubots AI Crystal"
              className="ab-hero-img"
              loading="eager"
            />
            <div className="ab-hero-glow" />
          </div>

        </section>
        
        {/* SECTION 2: TRANSFORM      */}

        <section className="ab-transform">
          <div className="ab-transform-inner">

            {/* Left — image */}
            <div className="ab-transform-img-wrap">
              <img
                src={aiDashboard}
                alt="AI Dashboard"
                className="ab-transform-img"
                loading="lazy"
              />
            </div>

            {/* Right — content */}
            <div className="ab-transform-content">
              <h2 className="ab-transform-title">
                Transforming Modern Business Operations With{" "}
                <em>Intelligent AI</em>
              </h2>
              <p className="ab-transform-body">
                Cubots helps businesses improve efficiency, simplify workflows,
                and build intelligent operational systems through practical AI
                solutions designed around real business needs.
              </p>

              <div className="ab-transform-stats">
                <div className="ab-transform-stat">
                  <span className="ab-transform-stat-value">1.2M+</span>
                  <p className="ab-transform-stat-desc">
                    Operational workflows optimized annually through intelligent
                    automation and data-driven systems.
                  </p>
                </div>
                <div className="ab-transform-stat">
                  <span className="ab-transform-stat-value">98%</span>
                  <p className="ab-transform-stat-desc">
                    Process efficiency improvement across AI-enabled business
                    operations and smart workflow orchestration.
                  </p>
                </div>
                <div className="ab-transform-stat">
                  <span className="ab-transform-stat-value">24/7</span>
                  <p className="ab-transform-stat-desc">
                    Continuous operational visibility, automation monitoring,
                    and dedicated intelligent support.
                  </p>
                </div>
              </div>

             <a href="/services" className="ab-transform-cta">
  <span>Explore Solutions</span>
  {/* Replaced the text symbol with a wrapper containing your custom asset image */}
  <span className="ab-transform-arrow-wrap">
    <img src={exploreArrow} alt="↗" className="ab-transform-arrow-img" />
  </span>
</a>
            </div>

          </div>
        </section>
<section className="ab-resources">
      <div className="ab-resources-container">
        
        {/* ── TOP HEADER ZONE ── */}
        <div className="ab-resources-header">
          <div className="ab-resources-title-wrap">
            <h2 className="ab-resources-main-title">We'll help you get started</h2>
            <p className="ab-resources-subtitle">
              Browse the Marketplace, educational videos, and customer stories to find what you need to succeed with Webflow.
            </p>
          </div>
          
          {/* FUNCTIONAL BUTTON CLICKS ENGINE MARKS */}
          <div className="ab-resources-nav-arrows">
            <button 
              className="ab-nav-arrow-btn prev" 
              onClick={() => handleScrollStep("left")}
              aria-label="Scroll left"
            >
              ←
            </button>
            <button 
              className="ab-nav-arrow-btn next" 
              onClick={() => handleScrollStep("right")}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </div>

        {/* ── SLIDER VIEWPORT COMPONENT ── */}
        <div className="ab-resources-scroll-mask" ref={sliderRef}>
          <div className="ab-resources-grid">
            {RESOURCE_CARDS.map((card) => (
              <div key={card.id} className="ab-resource-card">
                
                <div className="ab-card-media-wrap">
                  {/* INJECTS DISTINCT IMAGE ASSET VALUES FROM MAP INTERACTION LOOP */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="ab-card-media-img" 
                    loading="lazy" 
                  />
                </div>
                
                <div className="ab-card-info-wrap">
                  <h3 className="ab-card-title">{card.title}</h3>
                  <p className="ab-card-desc">{card.desc}</p>
                  <a href={card.linkUrl} className="ab-card-link-cta">
                    {card.linkText}
                    <span className="ab-card-link-arrow">↗</span>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
      </div>
    </>
  );
}

export default About;