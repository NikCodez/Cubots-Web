import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

import heroImage from "@/assets/images/predictive-analytics-hero.png";
import articleImage from "@/assets/images/predictive-analysis-content.png";
import predictiveImg from "@/assets/images/Predictive-Image.png";
import automationImg from "@/assets/images/Automation-Image.jpg";
import roiImg from "@/assets/images/ROI-Image.png";
import bgShape from "@/assets/images/about-bg.png";

import "@/styles/BlogPage.css";

const sections = [
  {
    id: "what-is-predictive-analytics",
    title: "What Is Predictive Analytics",
  },
  {
    id: "why-predictive-analytics-matters",
    title: "Why Predictive Analytics Matters",
  },
  {
    id: "business-applications",
    title: "Business Applications of Predictive Analytics",
  },
  {
    id: "growing-role-of-data-intelligence",
    title: "The Growing Role of Data Intelligence",
  },
  {
    id: "challenges",
    title: "Challenges in Predictive Analytics Implementation",
  },
  {
    id: "future",
    title: "The Future Of Predictive Intelligence",
  },
  {
    id: "conclusion",
    title: "Conclusion",
  },
];

export default function PredictiveAnalytics() {
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
              <img src={heroImage} alt="Pred-Analytics-hero" />

              <div className="blog-hero-overlay">
                <h1>
                 Understanding Predictive <br /> Analytics for Modern Businesses
                </h1>
              </div>
            </section>

            <article className="blog-page-content">
              <section id="what-is-predictive-analytics">
                <h2>
                  What Is <span>Predictive Analytics ?</span>
                </h2>

                <p>
                  Predictive analytics uses data analysis, statistical modeling, and artificial intelligence to forecast possible future outcomes.

                </p>
                <p>These systems analyze existing business information to identify:</p>
                <ul>
                  <li>Operational patterns</li>
                  <li>Customer trends</li>
                  <li>Demand fluctuations</li>
                  <li>Risk indicators</li>
                  <li>Performance opportunities</li>
                </ul>

                <p>
                  The goal is to support smarter and more informed business decisions.
                </p>
              </section>

              <section id="why-predictive-analytics-matters">
                <h2>
                 <span> Why </span>Predictive Analytics Matters ?
                </h2>

                <p>
                  Many businesses still rely heavily on historical reporting when making operational decisions.
                </p>
                <p>
                  While reporting helps organizations understand past performance, predictive analytics focuses on future possibilities.
                </p>
                <p>This allows businesses to:</p>
                <ul>
                  <li>Improve planning</li>
                  <li>Reduce uncertainty</li>
                  <li>Strengthen forecasting</li>
                  <li>Identify operational risks</li>
                  <li>Optimize resource allocation</li>
                </ul>

                <p>
                  Predictive systems help organizations operate more proactively instead of reactively.
                </p>

              </section>

              <section id="business-applications">
                <h2>
                   <span>Business Applications </span>of Predictive Analytics
                </h2>

                <p>
                 Predictive analytics supports multiple areas of business operations.
                </p>

                <h3>Customer Behavior Analysis</h3>

                <p>
                  Businesses can identify purchasing trends, engagement patterns, and customer preferences to improve customer experiences.
                </p>

                <h3>Demand Forecasting</h3>

                <p>
                 Organizations can forecast demand changes and improve inventory planning, operational scheduling, and supply chain coordination.
                </p>

                <h3>Risk Management</h3>

                <p>
                  Predictive systems help businesses identify operational risks and potential performance issues before they become larger problems.
                </p>

                <h3>Operational Optimization</h3>

                <p>
                  Businesses use predictive insights to improve workflows, allocate resources more effectively, and strengthen operational efficiency.
                </p>

                <h3>Financial Forecasting</h3>

                <p>
                  Predictive models support revenue planning, budgeting strategies, and performance forecasting.
                </p>
              </section>

              <div className="article-image">
                <img src={articleImage} alt="Pred-Analytics-article" />
              </div>

              <section id="growing-role-of-data-intelligence">
                <h2>
                  The<span> Growing Role </span>of Data Intelligence
                </h2>

                <p>
                  As businesses become increasingly digital, the ability to manage and interpret operational data is becoming a competitive advantage.
                </p>
                <p>Organizations with stronger data intelligence capabilities often benefit from:</p>
                <ul>
                  <li>faster decision making</li>
                  <li>improved operational visibility</li>
                  <li>stronger forecasting accuracy</li>
                  <li>greater organizational adaptability</li>
                </ul>
                <p>
                  Predictive analytics helps transform business data into actionable intelligence that supports long term growth strategies
                </p>
              </section>

              <section id="challenges">
                <h2>
                  <span>Challenges</span>  in Predictive Analytics Implementation
                </h2>

                <p>
              Predictive systems require structured planning and reliable data environments.
                </p>
                <p>Organizations should focus on:</p>
                <ul>
                  <li>Data quality</li>
                  <li>System integration</li>
                  <li>Operational alignment</li>
                  <li>Clear business objectives</li>
                  <li>Scalability planning</li>
                </ul>
                <p>
                  The effectiveness of predictive analytics depends heavily on the quality and consistency of operational data.
                </p>
              </section>

              <section id="future">
                <h2>
                  <span>The Future </span>Of Predictive Intelligence
                </h2>

                <p>
                  Predictive analytics is evolving into a core business capability across industries.
                </p>
                <p>
As AI systems continue improving, businesses are expected to adopt:</p>
                <ul>
                  <li>Real time predictive insights</li>
                  <li>Adaptive forecasting systems</li>
                  <li>Intelligent operational monitoring</li>
                  <li>Autonomous decision support tools</li>
                </ul>
                <p>
                  Organizations that invest in predictive intelligence today are likely to improve long term operational resilience and strategic planning capabilities.
                </p>
              </section>

              <section id="conclusion">
                <h2>Conclusion</h2>

                <p>
                 Predictive analytics is helping businesses transform operational data into strategic insight.
                </p>

                <p>
                 By improving forecasting, strengthening planning, and supporting data driven decisions, predictive systems are becoming essential tools for modern organizations.
                </p>
                <p>
                Cubots develops predictive analytics solutions designed to help businesses improve visibility, strengthen decision making, and build more intelligent operational systems.
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
