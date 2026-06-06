import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

import heroImage from "@/assets/images/AIAgents.png";
import articleImage from "@/assets/images/ai-agents-content.png";
import predictiveImg from "@/assets/images/Predictive-Image.png";
import automationImg from "@/assets/images/Automation-Image.jpg";
import roiImg from "@/assets/images/ROI-Image.png";
import bgShape from "@/assets/images/about-bg.png";

import "@/styles/BlogPage.css";

const sections = [
  {
    id: "understanding-ai-agents",
    title: "Understanding AI Agents",
  },
  {
    id: "why-businesses-are-adopting-ai-agents",
    title: "Why Businesses Are Adopting AI Agents",
  },
  {
    id: "applications-of-ai-agents",
    title: "Applications Of AI Agents",
  },
  {
    id: "benefits-of-ai-agents",
    title: "Benefits Of AI Agents",
  },
  {
    id: "challenges-businesses-should-consider",
    title: "Challenges Businesses Should Consider",
  },
  {
    id: "future-of-ai-agents",
    title: "The Future Of AI Agents",
  },
  {
    id: "conclusion",
    title: "Conclusion",
  },
];

export default function IntelligentAutomation() {
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
              <img src={heroImage} alt="AIAgents-hero" />

              <div className="blog-hero-overlay">
                <h1>The Role of AI Agents in Modern Business Operations</h1>
              </div>
            </section>

            <article className="blog-page-content">
              <section id="understanding-ai-agents">
                <h2>
                  Understanding <span>AI Agents</span>
                </h2>

                <p>
                  AI agents are intelligent software systems capable of
                  processing information, making decisions based on defined
                  objectives, and supporting operational tasks.
                </p>

                <p>
                  Unlike traditional static tools, AI agents can interact with
                  systems, analyze information, and perform actions within
                  workflows.
                </p>

                <p>
                  Depending on business requirements, AI agents may support:
                </p>

                <ul>
                  <li>Customer communication</li>
                  <li>Workflow management</li>
                  <li>Operational coordination</li>
                  <li>Internal assistance</li>
                  <li>Scheduling systems</li>
                  <li>Reporting tasks</li>
                  <li>Information retrieval</li>
                  <li>Process automation</li>
                </ul>

                <p>
                  The goal is to create systems that operate with greater
                  efficiency and adaptability.
                </p>
              </section>

              <section id="why-businesses-are-adopting-ai-agents">
                <h2>
                  <span>Why</span> Businesses Are Adopting AI Agents ?
                </h2>

                <p>
                  Organizations today face increasing operational demands across
                  departments and workflows.
                </p>

                <p>Businesses often manage:</p>

                <ul>
                  <li>Repetitive administrative tasks</li>
                  <li>High volumes of customer communication</li>
                  <li>Fragmented operational systems</li>
                  <li>Growing data environments</li>
                  <li>Continuous reporting requirements</li>
                </ul>

                <p>
                  AI agents help reduce operational pressure by automating
                  repetitive processes and supporting workflow coordination.
                </p>

                <p>
                  This allows teams to focus more on strategic activities while
                  improving operational consistency.
                </p>
              </section>

              <section id="applications-of-ai-agents">
                <h2>
                  <span>Applications</span> Of AI Agents in Business
                </h2>

                <h3>Customer Support</h3>

                <p>
                  AI agents can support customer operations by handling common
                  inquiries, organizing communication workflows, and improving
                  response management.
                </p>

                <p>
                  These systems help businesses maintain operational
                  responsiveness while reducing repetitive support workloads.
                </p>

                <h3>Internal Workflow Management</h3>

                <p>Organizations use AI agents to support:</p>

                <ul>
                  <li>Task coordination</li>
                  <li>Scheduling</li>
                  <li>Internal communication</li>
                  <li>Reporting workflows</li>
                  <li>Operational tracking</li>
                </ul>

                <p>This improves workflow organization across departments.</p>

                <h3>Data Processing and Reporting</h3>

                <p>
                  AI agents can analyze operational data, organize information,
                  and support reporting systems.
                </p>

                <p>
                  This helps businesses improve visibility into operations and
                  reduce administrative processing time.
                </p>

                <h3>Business Operations</h3>

                <p>
                  Businesses are increasingly using AI agents to assist with:
                </p>

                <ul>
                  <li>Operational monitoring</li>
                  <li>Workflow automation</li>
                  <li>Process coordination</li>
                  <li>Information management</li>
                </ul>

                <p>
                  These systems contribute to more connected operational
                  environments.
                </p>
              </section>

              <div className="article-image">
                <img src={articleImage} alt="ai-agents-article" />
              </div>

              <section id="benefits-of-ai-agents">
                <h2>
                  <span>Benefits</span> Of AI Agents
                </h2>

                <h3>Improved Efficiency</h3>

                <p>
                  AI agents help automate repetitive operational tasks while
                  improving workflow speed and consistency.
                </p>

                <h3>Operational Scalability</h3>

                <p>
                  As businesses grow, AI agents can support increasing
                  operational demands without requiring proportional increases
                  in manual coordination.
                </p>

                <h3>Better Workflow Coordination</h3>

                <p>
                  AI agents help connect systems, processes, and operational
                  activities into more structured workflows.
                </p>

                <h3>Faster Information Access</h3>

                <p>
                  Businesses can use AI agents to organize information and
                  improve access to operational insights across teams.
                </p>

                <h3>Enhanced Business Responsiveness</h3>

                <p>
                  AI-driven systems help organizations respond more quickly to
                  operational events, customer interactions, and workflow
                  requirements.
                </p>
              </section>

              <section id="challenges-businesses-should-consider">
                <h2>
                  <span>Challenges</span> Businesses Should Consider
                </h2>

                <p>Successful AI agent implementation requires:</p>

                <ul>
                  <li>Clear operational goals</li>
                  <li>Structured workflows</li>
                  <li>Reliable system integration</li>
                  <li>Quality data environments</li>
                  <li>Human oversight</li>
                </ul>

                <p>
                  Businesses should focus on building practical systems aligned
                  with operational needs rather than implementing unnecessary
                  complexity.
                </p>
              </section>

              <section id="future-of-ai-agents">
                <h2>
                  <span>The Future</span> Of AI Agents
                </h2>

                <p>
                  AI agents are expected to become increasingly integrated into
                  modern business environments.
                </p>

                <p>Future systems may support:</p>

                <ul>
                  <li>Autonomous operational coordination</li>
                  <li>Intelligent workflow execution</li>
                  <li>Predictive task management</li>
                  <li>Adaptive business processes</li>
                  <li>Real time operational assistance</li>
                </ul>

                <p>
                  As intelligent systems evolve, businesses will increasingly
                  adopt AI agents to improve operational agility and workflow
                  efficiency.
                </p>
              </section>

              <section id="conclusion">
                <h2>Conclusion</h2>

                <p>
                  AI agents are becoming an important part of modern business
                  operations.
                </p>

                <p>
                  By supporting workflows, improving efficiency, and simplifying
                  repetitive processes, intelligent agents help organizations
                  create more scalable and connected operational systems.
                </p>

                <p>
                  Cubots develops AI agent solutions designed to support modern
                  business workflows, operational intelligence, and scalable
                  automation environments.
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
                  <span className="trend-badge">MARKET TRENDS</span>
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
