import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

import heroImage from "@/assets/images/DataIntelligence.png";
import articleImage from "@/assets/images/data-intelligence-content.png";
import predictiveImg from "@/assets/images/Predictive-Image.png";
import automationImg from "@/assets/images/Automation-Image.jpg";
import roiImg from "@/assets/images/ROI-Image.png";
import bgShape from "@/assets/images/about-bg.png";

import "@/styles/BlogPage.css";

const sections = [
  {
    id: "understanding-data-intelligence",
    title: "Understanding Data Intelligence",
  },
  {
    id: "why-data-intelligence-matters",
    title: "Why Data Intelligence Matters",
  },
  {
    id: "key-applications-of-data-intelligence",
    title: "Key Applications Of Data Intelligence",
  },
  {
    id: "connection-between-data-and-growth",
    title: "The Connection Between Data And Growth",
  },
  {
    id: "challenges-in-building-data-intelligence-systems",
    title: "Challenges In Building Data Intelligence Systems",
  },
  {
    id: "future-of-data-intelligence",
    title: "The Future Of Data Intelligence",
  },
  {
    id: "conclusion",
    title: "Conclusion",
  },
];

export default function DataIntelligence() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -45% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    window.scrollTo({
      top: element.offsetTop - 120,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar variant="light" />

      <main className="blog-page">
        <section className="blog-layout">
          <div className="blog-main">
            <section className="blog-hero">
              <img src={heroImage} alt="data-intelligence-hero" />

              <div className="blog-hero-overlay">
                <h1>How Data Intelligence Supports Business Growth</h1>
              </div>
            </section>

            <article className="blog-page-content">
              <section id="understanding-data-intelligence">
                <h2>
                  Understanding <span>Data Intelligence</span>
                </h2>

                <p>
                  Data intelligence refers to the process of collecting,
                  organizing, analyzing, and interpreting business information
                  to improve operational visibility and support strategic
                  decisions.
                </p>

                <p>Modern data intelligence systems combine:</p>

                <ul>
                  <li>Analytics</li>
                  <li>Reporting</li>
                  <li>Operational monitoring</li>
                  <li>Predictive analysis</li>
                  <li>Visualization tools</li>
                  <li>Intelligent processing systems</li>
                </ul>

                <p>
                  The objective is to transform raw business data into clear and
                  usable operational insight.
                </p>
              </section>

              <section id="why-data-intelligence-matters">
                <h2>
                  <span>Why</span> Data Intelligence Matters ?
                </h2>

                <p>
                  Businesses today operate across multiple systems, departments,
                  and customer channels.
                </p>

                <p>
                  Without structured visibility, organizations often struggle
                  with:
                </p>

                <ul>
                  <li>Fragmented information</li>
                  <li>Inconsistent reporting</li>
                  <li>Delayed decision making</li>
                  <li>Operational blind spots</li>
                  <li>Inefficient resource allocation</li>
                </ul>

                <p>
                  Data intelligence helps businesses create more connected and
                  transparent operational environments.
                </p>

                <p>
                  Organizations with stronger data visibility are often better
                  positioned to:
                </p>

                <ul>
                  <li>Improve planning</li>
                  <li>Optimize workflows</li>
                  <li>Identify trends</li>
                  <li>Monitor performance</li>
                  <li>Adapt to operational changes</li>
                </ul>
              </section>

              <section id="key-applications-of-data-intelligence">
                <h2>
                  <span>Key Applications</span> Of Data Intelligence
                </h2>

                <h3>Business Performance Monitoring</h3>

                <p>Organizations use data intelligence systems to monitor:</p>

                <ul>
                  <li>Operational performance</li>
                  <li>Workflow efficiency</li>
                  <li>Financial trends</li>
                  <li>Business activity</li>
                  <li>Customer engagement</li>
                </ul>

                <p>
                  This helps businesses improve strategic visibility across
                  operations.
                </p>

                <h3>Customer Insights</h3>

                <p>
                  Businesses analyze customer behavior, engagement patterns, and
                  purchasing trends to improve customer experiences and
                  operational planning.
                </p>

                <h3>Operational Optimization</h3>

                <p>Data intelligence supports:</p>

                <ul>
                  <li>Workflow analysis</li>
                  <li>Process improvement</li>
                  <li>Resource planning</li>
                  <li>Efficiency monitoring</li>
                </ul>

                <p>
                  This allows organizations to identify operational
                  inefficiencies more effectively.
                </p>

                <h3>Predictive Business Planning</h3>

                <p>
                  Businesses increasingly combine data intelligence with
                  predictive analytics to support forecasting and future
                  planning.
                </p>

                <p>
                  This helps organizations improve adaptability and long term
                  strategic decision making.
                </p>
              </section>

              <section id="connection-between-data-and-growth">
                <h2>
                  <span>The Connection</span> Between Data And Growth
                </h2>

                <p>
                  Businesses that effectively use operational data often gain
                  significant strategic advantages.
                </p>
                <p>Strong data intelligence capabilities help organizations:</p>

                <ul>
                  <li>Make faster decisions</li>
                  <li>Improve operational efficiency</li>
                  <li>Identify opportunities earlier</li>
                  <li>Strengthen forecasting</li>
                  <li>Improve scalability</li>
                </ul>

                <p>
                  As industries become increasingly competitive, operational
                  intelligence is becoming a major factor in long term business
                  growth.
                </p>
              </section>

              <div className="article-image">
                <img src={articleImage} alt="data-intelligence-article" />
              </div>

              <section id="challenges-in-building-data-intelligence-systems">
                <h2>
                  <span>Challenges</span> In Building Data Intelligence Systems
                </h2>

                <p>Many businesses still face difficulties with:</p>

                <ul>
                  <li>Disconnected systems</li>
                  <li>Inconsistent data structures</li>
                  <li>Fragmented reporting</li>
                  <li>Limited operational visibility</li>
                </ul>

                <p>Successful data intelligence strategies require:</p>

                <ul>
                  <li>Organized data environments</li>
                  <li>Scalable systems</li>
                  <li>Operational alignment</li>
                  <li>Clear reporting structures</li>
                  <li>Integrated workflows</li>
                </ul>

                <p>
                  The focus should remain on practical business usability rather
                  than excessive technical complexity.
                </p>
              </section>

              <section id="future-of-data-intelligence">
                <h2>
                  <span>The Future</span> Of Data Intelligence
                </h2>

                <p>
                  As businesses continue digitizing operations, data
                  intelligence systems are expected to become more integrated
                  into everyday decision making.
                </p>

                <p>Future systems will likely include:</p>

                <ul>
                  <li>Real time operational insights</li>
                  <li>Predictive monitoring</li>
                  <li>Intelligent reporting</li>
                  <li>Adaptive analytics</li>
                  <li>Connected operational ecosystems</li>
                </ul>

                <p>
                  Organizations that invest in operational intelligence today
                  may be better prepared for future market changes and evolving
                  business demands.
                </p>
              </section>

              <section id="conclusion">
                <h2>Conclusion</h2>

                <p>
                  Data intelligence is becoming an essential part of modern
                  business strategy.
                
                  By improving operational visibility, supporting smarter
                  decisions, and helping businesses understand performance more
                  clearly, intelligent data systems contribute directly to
                  organizational growth and adaptability.
                </p>

                <p>
                  Cubots develops data intelligence and analytics solutions
                  designed to help businesses create more connected, informed,
                  and scalable operational environments.
                </p>
              </section>
            </article>
          </div>

          <aside className="blog-sidebar">
            <img src={bgShape} alt="" className="blog-bg-shape" />

            <div className="article-nav">
              <h3>In this article</h3>

              {sections.map((section) => (
                <button
                  key={section.id}
                  className={
                    activeSection === section.id
                      ? "article-link active"
                      : "article-link"
                  }
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </div>

            <div className="share-card">
              <h4>Share with your community!</h4>

              <div className="share-icons">
                <a href="#" className="share-icon">
                  <FaFacebookF />
                </a>

                <a href="#" className="share-icon">
                  <FaXTwitter />
                </a>

                <a href="#" className="share-icon">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="trends-section">
          <div className="trends-container">
            <div className="trends-intro">
              <div className="trend-intro-left">
                <h3>
                  The <span>AI Knowledge Hub</span> for Smarter Businesses
                </h3>
              </div>

              <div className="trend-intro-right">
                <p>
                  Actionable insights, expert analysis, and real-world AI
                  applications to help organizations innovate, automate, and
                  scale confidently.
                </p>
              </div>
            </div>

            <div className="trends-grid">
              <article className="trend-card">
                <div className="trend-image-wrapper">
                  <span className="trend-badge">MARKET TRENDS</span>
                  <img src={automationImg} alt="" />
                </div>

                <div className="trend-card-content">
                  <h4>
                    How AI Automation Is Changing Modern Business Operations
                  </h4>

                  <p>
                    Businesses today operate in increasingly complex
                    environments where speed, efficiency, and data driven
                    decision making directly influence growth.
                  </p>
                </div>
              </article>

              <article className="trend-card">
                <div className="trend-image-wrapper">
                  <img src={predictiveImg} alt="" />
                </div>

                <div className="trend-card-content">
                  <h4>
                    Understanding Predictive Analytics for Modern Businesses
                  </h4>

                  <p>
                    Businesses generate enormous amounts of operational data
                    every day. However, data alone does not create value.
                  </p>
                </div>
              </article>

              <article className="trend-card">
                <div className="trend-image-wrapper">
                  <span className="trend-badge">MARKET TRENDS</span>
                  <img src={roiImg} alt="" />
                </div>

                <div className="trend-card-content">
                  <h4>
                    Why Businesses Are Investing in Intelligent Automation
                  </h4>

                  <p>
                    Businesses today operate in environments shaped by
                    increasing operational complexity and customer expectations.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
    </>
  );
}
