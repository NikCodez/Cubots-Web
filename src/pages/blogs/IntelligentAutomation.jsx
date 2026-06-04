import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";

import heroImage from "@/assets/images/intelligent-automation-hero.png";
import articleImage from "@/assets/images/intelligent-automation-content.png";
import predictiveImg from "@/assets/images/Predictive-Image.png";
import automationImg from "@/assets/images/Automation-Image.jpg";
import roiImg from "@/assets/images/ROI-Image.png";
import bgShape from "@/assets/images/about-bg.png";

import "@/styles/BlogPage.css";

const sections = [
  {
    id: "understanding-intelligent-automation",
    title: "Understanding Intelligent Automation",
  },
  {
    id: "key-benefits",
    title: "Key Benefits Of Intelligent Automation",
  },
  {
    id: "intelligent-automation-industries",
    title: "Intelligent Automation Across Industries",
  },
  {
    id: "common-challenges",
    title: "Common Challenges Businesses Face",
  },
  {
    id: "future",
    title: "The Future Of Intelligent Automation",
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
              <img src={heroImage} alt="intelligent-automation-hero" />

              <div className="blog-hero-overlay">
                <h1>
                  Why Businesses Are Investing in Intelligent Automation
                </h1>
              </div>
            </section>

            <article className="blog-page-content">
              <section id="understanding-intelligent-automation">
                <h2>
                  Understanding <span>Intelligent Automation</span>
                </h2>

                <p>
                  Traditional automation systems typically follow predefined
                  rules and repetitive instructions.
                </p>

                <p>
                  Intelligent automation extends these capabilities by
                  introducing systems that can process information, recognize
                  patterns, analyze operational data, and support adaptive
                  workflows.
                  This allows businesses to automate not only repetitive tasks
                  but also more dynamic operational processes.
                </p>

                <p>Intelligent automation systems can support:</p>

                <ul>
                  <li>Customer service operations</li>
                  <li>Internal workflow management</li>
                  <li>Reporting and documentation</li>
                  <li>Operational monitoring</li>
                  <li>Scheduling systems</li>
                  <li>Data processing</li>
                  <li>Predictive business analysis</li>
                </ul>

                <p>
                  The objective is to create operational environments that are
                  more efficient, scalable, and responsive.
                </p>
              </section>

              <section id="key-benefits">
                <h2>
                  <span>Key Benefits</span> Of Intelligent Automation
                </h2>
                <h3>Improved Workflow Efficiency</h3>
                <p>
                  Automation reduces repetitive manual work and accelerates
                  operational processes.
                </p>

                <p>
                  Tasks that previously required significant administrative
                  effort can often be managed more efficiently through
                  intelligent systems.
                </p>

                <p>
                  This allows teams to focus more on strategic activities
                  instead of repetitive operational management.
                </p>
                <h3>Better Operational Visibility</h3>
                <p>
                  Connected automation systems improve visibility across
                  workflows, processes, and business functions.
                </p>

                <p>Businesses gain clearer insights into:</p>

                <ul>
                  <li>Workflow progress</li>
                  <li>Operational performance</li>
                  <li>System activity</li>
                  <li>Reporting structures</li>
                  <li>Process delays</li>
                </ul>

                <p>
                  Improved visibility supports faster and more informed decision
                  making.
                </p>
                <h3>Scalability</h3>
                <p>
                  Manual workflows often become difficult to manage as
                  organizations grow.
                </p>

                <p>
                  Intelligent automation helps businesses scale operations
                  without proportionally increasing administrative complexity.
                </p>

                <p>Automation systems can support:</p>

                <ul>
                  <li>Expanding workflows</li>
                  <li>Larger operational volumes</li>
                  <li>Increased customer interactions</li>
                  <li>Multi department coordination</li>
                </ul>

                <p>
                  This flexibility is particularly important for growing
                  organizations.
                </p>
                <h3>Reduced Operational Delays</h3>
                <p>
                  Many operational inefficiencies are caused by repetitive
                  approvals, fragmented communication, and disconnected systems.
                </p>

                <p>
                  Automation helps streamline these processes while improving
                  execution speed and reducing workflow interruptions.
                </p>
                <h3>Stronger Customer Experiences</h3>
                <p>
                  Businesses increasingly use automation to improve customer
                  responsiveness and operational consistency.
                </p>

                <p>Automation systems can support:</p>

                <ul>
                  <li>Faster communication</li>
                  <li>Improved response management</li>
                  <li>Workflow coordination</li>
                  <li>Customer engagement processes</li>
                </ul>

                <p>
                  This contributes to more reliable and efficient customer
                  experiences.
                </p>
              </section>

              <div className="article-image">
                <img src={articleImage} alt="intelligent-automation-article" />
              </div>

              <section id="intelligent-automation-industries">
                <h2>
                  Intelligent Automation Across <span>Industries</span>
                </h2>

                <p>
                  Automation is becoming increasingly important across multiple
                  sectors.
                </p>

                <h3>Manufacturing</h3>

                <p>Manufacturers use automation systems for:</p>

                <ul>
                  <li>Production monitoring</li>
                  <li>Inventory coordination</li>
                  <li>Maintenance scheduling</li>
                  <li>Workflow optimization</li>
                </ul>

                <h3>Retail</h3>

                <p>Retail businesses use intelligent systems for:</p>

                <ul>
                  <li>Customer engagement</li>
                  <li>Inventory visibility</li>
                  <li>Operational forecasting</li>
                  <li>Order management</li>
                </ul>

                <h3>Logistics</h3>

                <p>Logistics businesses use intelligent systems for:</p>

                <ul>
                  <li>Shipment tracking</li>
                  <li>Route optimization</li>
                  <li>Operational coordination</li>
                  <li>Supply chain visibility</li>
                </ul>

                <h3>Healthcare</h3>

                <p>Healthcare organizations use automation to improve:</p>

                <ul>
                  <li>Administrative workflows</li>
                  <li>Data processing</li>
                  <li>Operational coordination</li>
                  <li>Reporting systems</li>
                </ul>

                <h3>Finance</h3>

                <p>
                  Financial organizations implement intelligent systems for:
                </p>

                <ul>
                  <li>Operational workflows</li>
                  <li>Reporting</li>
                  <li>Customer processes</li>
                  <li>Compliance monitoring</li>
                </ul>
              </section>

              <section id="common-challenges">
                <h2>
                  Common <span>Challenges</span> Businesses Face
                </h2>

                <p>
                  Successful automation requires careful planning and
                  operational understanding.
                </p>

                <p>Businesses should focus on:</p>

                <ul>
                  <li>Workflow clarity</li>
                  <li>System integration</li>
                  <li>Data organization</li>
                  <li>Scalability planning</li>
                  <li>Employee adoption</li>
                  <li>Operational alignment</li>
                </ul>

                <p>
                  Organizations that invest in predictive intelligence today are
                  likely to improve long term operational resilience and
                  strategic planning capabilities.
                </p>
              </section>

              <section id="future">
                <h2>
                  <span>The Future</span> Of Intelligent Automation
                </h2>

                <p>
                  As AI technologies continue evolving, automation systems are
                  becoming more adaptive and intelligent.
                </p>

                <p>Future operational environments are expected to include:</p>

                <ul>
                  <li>Autonomous workflows</li>
                  <li>Predictive operational systems</li>
                  <li>Intelligent business coordination</li>
                  <li>Real time analytics integration</li>
                  <li>Adaptive process management</li>
                </ul>

                <p>
                  Organizations that invest in automation today are building
                  operational foundations for future scalability and digital
                  transformation.
                </p>
              </section>

              <section id="conclusion">
                <h2>Conclusion</h2>

                <p>
                  Intelligent automation is changing how businesses manage
                  operations, workflows, and organizational processes.
                </p>

                <p>
                  By reducing manual complexity, improving visibility, and
                  supporting scalable systems, automation helps organizations
                  create more efficient and connected business environments.
                </p>

                <p>
                  Cubots develops intelligent automation solutions designed to
                  support operational growth, workflow optimization, and modern
                  business transformation.
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
