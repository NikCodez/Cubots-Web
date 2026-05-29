import Navbar from "@/components/Navbar";
import "@/styles/Home.css";
import { ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/images/cubots-hero-bg.jpg";
import aboutBg from "@/assets/images/about-bg.png";
import showcaseImage from "@/assets/images/about-card-image.png";

export default function Home() {
  return (
    <>
      <Navbar variant="dark" />

      <main className="home">
        <section className="hero-section">
          <img src={heroBg} alt="background" className="hero-bg-image" />

          <div className="hero-overlay"></div>

          <div className="grid-overlay"></div>

          <div className="hero-content">
            <div className="animated-text-wrapper">
              <span className="static-text">Scale Faster With Your</span>

              <div className="animated-word-container">
                <div className="animated-word-track">
                  <span>Business Automation</span>
                  <span>Predictive Analysis</span>
                  <span>Data Intelligence</span>
                  <span>AI Consulting</span>
                </div>
              </div>
            </div>

            <p>
              Cubots helps businesses automate workflows, analyze data, and
              build intelligent systems using practical AI solutions designed
              for modern growth and scalable operations.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">Talk to Us</button>

              <button className="secondary-btn">Explore Solutions</button>
            </div>

            <div className="prompt-box">
              <textarea placeholder="Generate a report for Q2..."></textarea>

              <button className="send-btn">{">"}</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-showcase">
          <img src={aboutBg} alt="background" className="about-bg-image" />

          <div className="about-overlay"></div>

          <div className="about-container">
            <h2>
              Helping businesses simplify <br /> operations through
              <span> automation, analytics,</span>
              <br />
              and
              <span> intelligent systems.</span>
            </h2>

            <div className="showcase-card">
              <img
                src={showcaseImage}
                alt="Cubots AI"
                className="showcase-image"
              />

              <div className="showcase-caption">
                Practical AI built around
                <span> business </span>
                needs.
              </div>
            </div>

            <div className="about-text">
              <p>
                Businesses today operate in fast-moving environments where
                efficiency, adaptability, and operational clarity play a
                critical role in long-term growth. As workflows become more
                complex and data volumes continue to expand, organisations
                require systems that can simplify operations and support smarter
                decision-making.
              </p>

              <p>
                <span>
                  Cubots helps businesses build intelligent operational
                  environments through automation, predictive analytics, and
                  scalable AI solutions designed around practical business
                  needs. Our approach focuses on creating connected systems that
                  improve visibility, streamline workflows, and support
                  sustainable operational growth.
                </span>
              </p>

              <p>
                We believe technology should make business operations simpler,
                more efficient, and easier to manage. By combining intelligent
                automation with data-driven insights, we help organisations
                improve performance, strengthen coordination across teams, and
                create scalable systems built for modern business challenges.
              </p>

              <p>
                We believe technology should empower organisations to work
                smarter, reduce complexity, and unlock new growth opportunities.
                By combining modern digital solutions with practical business
                insight, we help teams improve collaboration, increase
                productivity, and build future-ready operations designed for
                lasting impact.
              </p>
            </div>
          </div>
        </section>

        <section className="why-cubots">
          <div className="why-header">
            <div className="why-title">
              <h2>
                Why Cubots Stands Out <span>in
                <br />
                Digital Innovation
                </span>
              </h2>
            </div>

            <div className="why-description">
              <p>
                From intelligent automation to custom software engineering, we
                deliver <br /> future-ready solutions that drive efficiency, agility,
                and measurable success.
              </p>
            </div>
          </div>

          <div className="why-cards">
            <div className="why-card card-blue">
              <h3>
                Transforming Modern Businesses with Scalable Technology
                Solutions
              </h3>

              <p>
                From intelligent automation platforms to custom digital
                ecosystems, we create adaptable solutions that improve
                performance, accelerate innovation, and enable long-term
                operational success.
              </p>

              <button className="card-arrow">
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </button>


            </div>

            <div className="why-card card-navy">
              <h3>
                Empowering Businesses with Practical AI and Automation Solutions
              </h3>

              <p>
                From streamlined workflow automation to scalable software
                development, we design technology solutions focused on
                measurable outcomes, operational clarity, and future-ready
                business transformation.
              </p>

              <button className="card-arrow">
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </button>
            </div>

            <div className="why-card card-light">
              <h3>
                Driving Smarter Business Growth with Intelligent Digital
                Solutions
              </h3>

              <p>
                From AI-powered automation to data-driven software systems, we
                build practical technology solutions that enhance efficiency,
                simplify operations, and support sustainable business growth.
              </p>

              <button className="card-arrow dark">
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
