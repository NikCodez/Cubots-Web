import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

import heroImage from "@/assets/images/AIAutomation.png";
import articleImage from "@/assets/images/ai-automation-content.png";
import predictiveImg from "@/assets/images/Predictive-Image.png";
import automationImg from "@/assets/images/Automation-Image.jpg";
import roiImg from "@/assets/images/ROI-Image.png";
import bgShape from "@/assets/images/about-bg.png";

import "@/styles/BlogPage.css";

const sections = [
  {
    id: "what-is-ai-automation",
    title: "What Is AI Automation",
  },
  {
    id: "why-businesses-invest",
    title: "Why Businesses Are Investing",
  },
  {
    id: "industries",
    title: "AI Automation Across Industries",
  },
  {
    id: "intelligent-operations",
    title: "The Shift Toward Intelligent Operations",
  },
  {
    id: "challenges",
    title: "Challenges Businesses Should Consider",
  },
  {
    id: "future",
    title: "The Future Of AI Automation",
  },
  {
    id: "conclusion",
    title: "Conclusion",
  },
];

export default function AIAutomation() {
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
              <img src={heroImage} alt="" />

              <div className="blog-hero-overlay">
                <h1>
                  How AI Automation Is Changing Modern Business Operations
                </h1>
              </div>
            </section>

            <article className="blog-page-content">
              <section id="what-is-ai-automation">
                <h2>
                  What Is <span>AI Automation ?</span>
                </h2>

                <p>
                  AI automation combines intelligent technologies with
                  operational workflows to reduce manual effort and improve
                  decision making across business functions. Unlike traditional
                  automation systems that follow fixed rules, AI driven systems
                  can process information, recognize patterns, adapt to data,
                  and support more dynamic workflows.
                </p>
                <p>Modern AI automation can support:</p>
                <ul>
                  <li>Customer communication</li>
                  <li>Workflow approvals</li>
                  <li>Reporting systems</li>
                  <li>Data processing</li>
                  <li>Operational monitoring</li>
                  <li>Business forecasting</li>
                  <li>Internal task management</li>
                </ul>

                <p>
                  The goal is not simply automation. The goal is operational
                  intelligence.
                </p>
              </section>

              <section id="why-businesses-invest">
                <h2>
                  Why Businesses Are <span>Investing in AI Automation ?</span>
                </h2>

                <p>
                  Organizations are increasingly adopting AI automation because
                  operational complexity continues to grow across industries.
                </p>
                <p>Businesses manage:</p>
                <ul>
                  <li>Larger volumes of data</li>
                  <li>Multiple software systems</li>
                  <li>Distributed teams</li>
                  <li>Faster customer expectations</li>
                  <li>Evolving operational demands</li>
                </ul>

                <p>
                  AI automation helps reduce these pressures by simplifying
                  repetitive workflows and improving operational visibility. Key
                  business benefits include:
                </p>

                <ul>
                  <li>Improved efficiency</li>
                  <li>Faster processing</li>
                  <li>Reduced manual dependency</li>
                  <li>Stronger decision support</li>
                  <li>Operational consistency</li>
                  <li>Scalable workflow management</li>
                  <li>
                    For many organizations, automation is becoming a
                    foundational part of digital transformation strategies.
                  </li>
                </ul>
              </section>

              <section id="industries">
                <h2>
                  AI Automation Across <span>Industries</span>
                </h2>

                <p>
                  AI automation is no longer limited to technology companies.
                </p>
                <p>
                  Businesses across industries are adopting intelligent systems
                  to improve operations and reduce inefficiencies.
                </p>

                <h3>Manufacturing</h3>

                <p>
                  Automation systems support production planning, operational
                  monitoring, predictive maintenance, and inventory visibility.
                </p>

                <h3>Retail</h3>

                <p>
                  Businesses use AI automation for customer engagement, demand
                  forecasting, inventory management, and workflow optimization.
                </p>

                <h3>Healthcare</h3>

                <p>
                  Healthcare organizations use intelligent systems to support
                  data processing, operational workflows, and administrative
                  efficiency.
                </p>

                <h3>Logistics</h3>

                <p>
                  AI driven systems improve supply chain coordination, route
                  planning, and operational tracking.
                </p>

                <h3>Finance</h3>

                <p>
                  Automation helps simplify reporting, operational processes,
                  compliance monitoring, and customer operations.
                </p>
              </section>

              <div className="article-image">
                <img src={articleImage} alt="" />
              </div>

              <section id="intelligent-operations">
                <h2>
                  The Shift Toward <span>Intelligent Operations</span>
                </h2>

                <p>
                  Modern businesses are moving beyond isolated tools toward
                  connected operational ecosystems.
                </p>
                <p>This shift is creating demand for:</p>
                <ul>
                  <li>Integrated workflows</li>
                  <li>Real-time analytics</li>
                  <li>intelligent decision systems</li>
                  <li>Predictive operational models</li>
                  <li>Scalable automation infrastructure</li>
                </ul>
                <p>
                  Organizations increasingly recognize that AI is not only a
                  technology investment but also an operational strategy.
                </p>
                <p>
                  Businesses that successfully implement intelligent automation
                  often gain:
                </p>
                <ul>
                  <li>Greater operational flexibility</li>
                  <li>Improved scalability</li>
                  <li>Faster execution</li>
                  <li>Better data visibility</li>
                  <li>Stronger customer responsiveness</li>
                </ul>
              </section>

              <section id="challenges">
                <h2>
                  <span>Challenges</span> Businesses Should Consider
                </h2>

                <p>
                  Successful AI automation requires more than software
                  implementation.
                </p>
                <p>Organizations should focus on:</p>
                <ul>
                  <li>Operational clarity</li>
                  <li>Workflow understanding</li>
                  <li>System integration</li>
                  <li>Data organization</li>
                  <li>Scalability planning</li>
                  <li>Employee adoption</li>
                </ul>
                <p>
                  The most effective automation strategies are designed around
                  practical business goals instead of unnecessary technological
                  complexity.
                </p>
              </section>

              <section id="future">
                <h2>
                  The Future Of <span>AI Automation</span>
                </h2>

                <p>
                  As AI technologies continue to evolve, businesses will
                  increasingly adopt systems capable of supporting more adaptive
                  and intelligent operations.
                </p>
                <p>Future automation systems are expected to:</p>
                <ul>
                  <li>Support autonomous workflows</li>
                  <li>Improve predictive capabilities</li>
                  <li>Strengthen operational intelligence</li>
                  <li>Simplify cross platform coordination</li>
                  <li>Enhance real time business visibility</li>
                </ul>
                <p>
                  Businesses that begin building intelligent operational
                  foundations today may be better prepared for future market
                  changes and evolving customer expectations.
                </p>
              </section>

              <section id="conclusion">
                <h2>Conclusion</h2>

                <p>
                  AI automation is becoming an essential part of modern business
                  operations.
                </p>

                <p>
                  Organizations across industries are using intelligent systems
                  to simplify workflows, improve efficiency, and create more
                  connected operational environments. The long term value of AI
                  automation lies not only in reducing repetitive work but also
                  in helping businesses operate with greater clarity,
                  adaptability, and intelligence.
                </p>
                <p>
                  Cubots helps businesses build practical AI automation systems
                  designed around real operational needs, scalable workflows,
                  and long term business growth.
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
