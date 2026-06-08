import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import CubotsTagline from "@/components/CubotsTagline";
import "@/styles/Home.css";
import { ArrowUpRight } from "lucide-react";
import heroBg from "@/assets/images/cubots-hero-bg.jpg";
import heroVideo from "@/assets/animations/hero-video-3.mp4";
import CubotsVideo from "@/assets/animations/Cubots-video.mp4";
import aboutBg from "@/assets/images/about-bg.png";
import featureImg1 from "@/assets/images/about-feature-1.jpg";
import featureImg2 from "@/assets/images/about-feature-2.jpg";
import featureImg3 from "@/assets/images/about-feature-3.jpg";
import showcaseVideo from "@/assets/animations/Cubots-saas.mp4";
import manufacturingImg from "@/assets/images/manufacturing.png";
import retailImg from "@/assets/images/Retail.png";
import logisticsImg from "@/assets/images/Logistics.png";
import healthcareImg from "@/assets/images/Healthcare.png";
import realEstateImg from "@/assets/images/Real-Estate.png";
import financeImg from "@/assets/images/Finance.png";
import aiAgentsImg from "@/assets/images/AI-agents.png";
import businessAutomationImg from "@/assets/images/business-automation.png";
import predictiveAnalyticsImg from "@/assets/images/predictive-analytics.png";
import dataIntelligenceImg from "@/assets/images/data-intelligence.png";
import aiConsultingImg from "@/assets/images/ai-consulting.png";
import customAiImg from "@/assets/images/custom-ai.png";
import predictiveImg from "@/assets/images/Predictive-Image.png";
import automationImg from "@/assets/images/Automation-Image.jpg";
import roiImg from "@/assets/images/ROI-Image.png";

const SERVICES = [
  {
    id: "ai-agents",
    label: "AI Agents",
    image: aiAgentsImg,
    title: "AI Agents",
    description:
      "AI agents help businesses automate repetitive tasks, improve workflow coordination, and support operational efficiency across departments.",
  },

  {
    id: "business-automation",
    label: "Business Automation",
    image: businessAutomationImg,
    title: "Business Automation",
    description:
      "Modern businesses often manage repetitive operational processes that reduce efficiency and increase administrative workload.",
  },

  {
    id: "predictive-analytics",
    label: "Predictive Analytics",
    image: predictiveAnalyticsImg,
    title: "Predictive Analytics",
    description:
      "Predictive analytics helps businesses identify trends, forecast operational outcomes, and improve planning through intelligent data analysis.",
  },

  {
    id: "data-intelligence",
    label: "Data Intelligence",
    image: dataIntelligenceImg,
    title: "Data Intelligence",
    description:
      "Businesses generate large amounts of information across operations, customer interactions, and internal systems.",
  },

  {
    id: "ai-consulting",
    label: "AI Consulting",
    image: aiConsultingImg,
    title: "AI Consulting",
    description:
      "AI adoption requires more than technology implementation. Successful transformation depends on operational understanding, workflow alignment, and long term scalability planning.",
  },

  {
    id: "custom-ai",
    label: "Custom AI Solutions",
    image: customAiImg,
    title: "Custom AI Solutions",
    description:
      "Every organization operates differently. We develop custom AI systems tailored to specific workflows, operational requirements, and businesses.",
  },
];

const faqData = [
  {
    question: "Are AI agents and AI chatbots the same thing?",
    answer:
      "Not exactly. AI chatbots are primarily designed for conversations and customer interactions. AI agents go further by performing tasks, accessing information, supporting workflows, and helping automate operational processes. Modern businesses increasingly use AI agents as intelligent assistants across departments and business functions.",
  },
  {
    question: "Which industries can benefit from AI solutions?",
    answer:
      "AI can support organizations across manufacturing, retail, healthcare, logistics, finance, real estate, education, professional services, and many other sectors. The key is identifying practical use cases that align with operational needs and business goals.",
  },
  {
    question: "Do businesses need large amounts of data to use AI?",
    answer:
      "Not always. While some advanced AI models benefit from larger datasets, many automation and intelligent workflow solutions can create value using existing operational information and business processes. The right strategy depends on the organization’s objectives and current digital environment.",
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer:
      "CImplementation timelines vary depending on project complexity, integration requirements, and business objectives. Some automation solutions can be deployed relatively quickly, while larger enterprise systems may require phased implementation and optimization.",
  },
  {
    question: "Why choose Cubots CubeMoons?",
    answer:
      "Cubots combines intelligent technologies with practical business understanding. Our focus is not simply implementing AI but helping organizations create scalable, usable, and measurable solutions that improve operations, support growth, and deliver long term value.",
  },
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const current = SERVICES[activeService];
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Navbar variant="dark" />

      <main className="home">
        <section className="hero-section">
          <video className="hero-bg-video" autoPlay muted loop playsInline>
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* <img src={heroBg} alt="background" className="hero-bg-image" /> */}

          <div className="hero-overlay"></div>

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

          <div className="about-container">
            <div className="about-content-section">
              <div className="about-left">
                <h2>
                  Discover What
                  <br />
                  Sets Us <span>Apart</span>
                </h2>

                <p>
                  From intelligent automation to custom software engineering, we
                  deliver future-ready solutions that drive efficiency, agility,
                  and measurable success.
                </p>
              </div>

              <div className="about-right">
                <div className="about-feature-card">
                  <div className="about-feature-image-wrapper">
                    <img src={featureImg1} alt="Practical AI" />
                  </div>

                  <div className="feature-content">
                    <h3>Practical AI for Smarter Operations</h3>

                    <p>
                      Transform workflows with intelligent automation that
                      reduces manual effort, improves efficiency, and drives
                      better outcomes.
                    </p>
                  </div>
                </div>

                <div className="about-feature-card">
                  <div className="about-feature-image-wrapper">
                    <img src={featureImg2} alt="Practical AI" />
                  </div>

                  <div className="feature-content">
                    <h3>Custom Software Built for Growth</h3>

                    <p>
                      Scalable digital solutions engineered to support evolving
                      business needs and long-term success.
                    </p>
                  </div>
                </div>

                <div className="about-feature-card">
                  <div className="about-feature-image-wrapper">
                    <img src={featureImg3} alt="Practical AI" />
                  </div>

                  <div className="feature-content">
                    <h3>Data-Driven Decision Making</h3>

                    <p>
                      Leverage actionable insights and predictive analytics to
                      make confident, strategic business decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-card">
              <video
                className="showcase-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src={showcaseVideo} type="video/mp4" />
              </video>

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

        {/* Industries section */}
        <section className="industries-section">
          <img src={aboutBg} alt="" className="industries-bg" />

          <div className="industries-overlay"></div>

          <div className="industries-container">
            <div className="industries-heading">
              <h2>
                Industries
                <span> We Partner With</span>
              </h2>

              <p>
                Delivering excellence through industry-driven strategies
                designed <br /> for sustainable growth and innovation.
              </p>
            </div>

            <div className="industries-layout">
              <div className="industries-left">
                {/* Top Row */}
                <div className="top-grid">
                  <div className="industry-card dark manufacturing">
                    <div className="blur-orb orb-1"></div>
                    <div className="blur-orb orb-2"></div>

                    <h3>Manufacturing</h3>
                    <p>
                      Optimize production workflows, automate support, and
                      improve operational efficiency with AI-powered assistance.
                    </p>

                    <img src={manufacturingImg} alt="" />
                  </div>

                  <div className="industry-card light retail">
                    <div className="light-pattern"></div>

                    <h3>Retail</h3>
                    <p>
                      Deliver personalized shopping experiences, instant
                      customer support, and smarter engagement across every
                      touchpoint.
                    </p>

                    <img src={retailImg} alt="" />
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="bottom-grid">
                  <div className="industry-card light healthcare">
                    <div className="light-pattern"></div>

                    <h3>Healthcare</h3>
                    <p>Enhance patient communication with smart assistance.</p>

                    <img src={healthcareImg} alt="" />
                  </div>

                  <div className="industry-card light logistics">
                    <div className="light-pattern"></div>

                    <h3>Logistics</h3>
                    <p>Simplify tracking and automate customer queries.</p>

                    <img src={logisticsImg} alt="" />
                  </div>

                  <div className="industry-card light finance">
                    <div className="light-pattern"></div>

                    <h3>Finance</h3>
                    <p>Provide secure, fast, and personalized support.</p>

                    <img src={financeImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="industry-card dark real-estate">
                <div className="blur-orb orb-1"></div>
                <div className="blur-orb orb-2"></div>

                <h3>Real Estate</h3>

                <p>Automate inquiries and engage buyers instantly.</p>

                <img src={realEstateImg} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="sticky-video-section">
          <div className="sticky-video-wrapper">
            <video className="sticky-video" autoPlay muted loop playsInline preload="auto">
              <source src={CubotsVideo} type="video/mp4" />
            </video>
          </div>

          <section className="why-cubots">
            <div className="why-header">
              <div className="why-title">
                <h2>
                  Why Cubots Stands Out{" "}
                  <span>
                    in
                    <br />
                    Digital Innovation
                  </span>
                </h2>
              </div>

              <div className="why-description">
                <p>
                  From intelligent automation to custom software engineering, we
                  deliver <br /> future-ready solutions that drive efficiency,
                  agility, and measurable success.
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
                  Empowering Businesses with Practical AI and Automation
                  Solutions
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
        </section>

        {/* Services Section */}

        <section className="services-section">
          <div className="services-container">
            <div className="services-header">
              <h2>
                Services
                <span> We Offer</span>
              </h2>

              <p>
                Delivering excellence through industry-driven strategies
                designed for sustainable growth and innovation.
              </p>
            </div>

            {/* Tabs */}

            <div className="services-tabs">
              {SERVICES.map((service, index) => (
                <button
                  key={service.id}
                  className={`service-tab ${
                    activeService === index ? "active" : ""
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <span className="tab-dot"></span>

                  {service.label}
                </button>
              ))}
            </div>

            {/* Showcase */}

            <div key={activeService} className="service-showcase">
              <img
                src={current.image}
                alt={current.title}
                className="service-showcase-image"
              />

              <div className="service-showcase-overlay">
                <h3>{current.title}</h3>

                <p>{current.description}</p>
                <a
                  href={`/services/${current.id}`}
                  className="service-redirect"
                >
                  More <ArrowUpRight size={18} strokeWidth={2.4} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="insights-section">
          <div className="insights-container">
            <div className="insights-intro">
              <div className="intro-left">
                <h3>
                  The <span>AI Knowledge Hub</span> for Smarter Businesses
                </h3>
              </div>

              <div className="intro-right">
                <p>
                  Actionable insights, expert analysis, and real-world AI
                  applications to help organizations innovate, automate, and
                  scale confidently.
                </p>
              </div>
            </div>

            <div className="insights-grid">
              <article className="insight-card">
                <div className="insight-image-wrapper">
                  <img src={predictiveImg} alt="" />
                </div>

                <div className="card-content">
                  <h4>
                    Understanding Predictive Analytics for Modern Businesses
                  </h4>

                  <p>
                    Businesses generate enormous amounts of operational data
                    every day. However, data alone does not create value.
                  </p>
                </div>
              </article>

              <article className="insight-card">
                <div className="insight-image-wrapper">
                  <img src={automationImg} alt="" />
                </div>

                <div className="card-content">
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

              <article className="insight-card">
                <div className="insight-image-wrapper">
                  <img src={roiImg} alt="" />
                </div>

                <div className="card-content">
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

        <section className="ab-faq-section-home">
          <div
            className="faq-glass-ribbon-bg"
            style={{ backgroundImage: `url(${aboutBg})` }}
          />

          <div className="faq-container-box">
            <h2 className="faq-main-heading">
              <em>Frequently</em> Asked Questions
            </h2>

            <div className="faq-accordion-list">
              {faqData.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className={`faq-accordion-card ${isOpen ? "faq-card--open" : ""}`}
                  >
                    <button
                      className="faq-accordion-trigger"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <span className="faq-icon-indicator">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div className="faq-collapse-panel">
                      <div className="faq-answer-inner-content">
                        <p className="faq-answer-paragraph">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="whyus-tagline-wrapper">
        <CubotsTagline />
      </section>

      </main>

      <ContactSection />
    </>
  );
}
