import { useEffect, useState, useRef } from "react";
import "@/styles/services.css";
import servicesHero from "@/assets/images/services-hero.png";
import serviceHeroBg from "@/assets/images/servicesherobg.jpeg";
import showcaseCardImg1 from "@/assets/images/leftcardservice.png";
import showcaseCardImg2 from "@/assets/images/rightcardservice.jpg";
import twomonitor from "@/assets/images/twomonitor.png";
import waveBlob from "@/assets/images/r22.png";
import blob from "@/assets/images/leftside.png";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";

const TIMELINE_STEPS = [
  {
    id: "01",
    title: "AI Agents",
    body: "AI agents help businesses automate repetitive tasks, improve workflow coordination, and support operational efficiency across departments.These systems can assist with customer communication, internal operations, reporting workflows, scheduling processes, and information management while reducing manual dependency.",
    sub: "Our AI agents are designed to integrate into existing operational environments and adapt to business requirements over time."
  },
  {
    id: "02",
    title: "Business Automation",
    body: "Modern businesses often manage repetitive operational processes that reduce efficiency and increase administrative overhead. Cubots automate these workflows end-to-end, from data entry and approvals to notifications and handoffs, freeing your team to focus on higher-value work.",
    sub: "Our automation systems are configured around your existing tools and processes with minimal disruption to operations."
  },
  {
    id: "03",
    title: "Customer Support",
    body: "AI-powered support agents handle inbound queries, triage tickets, provide instant responses, and escalate complex issues to human agents. This reduces response times and allows your support team to focus on high-priority interactions.",
    sub: "Cubots integrate with your existing CRM and support platforms to maintain continuity across all customer touchpoints."
  },
  {
    id: "04",
    title: "Data & Analytics",
    body: "Cubots continuously analyze business data streams, surface trends, generate automated reports, and deliver actionable insights to decision-makers. Replace manual reporting cycles with intelligent, real-time intelligence pipelines.",
    sub: "Our analytics agents connect to your existing data sources and dashboards with no disruption to current infrastructure."
  },
  {
    id: "05",
    title: "Workflow Coordination",
    body: "Intelligent agents coordinate cross-departmental workflows, manage task assignments, track progress, and send automated updates. This eliminates operational bottlenecks caused by manual handoffs and communication gaps.",
    sub: "Workflow agents are configured to your team structure and existing project management tools."
  },
  {
    id: "06",
    title: "Scalable AI Systems",
    body: "As your business grows, Cubots scales with you. Our AI infrastructure is designed to handle increasing operational complexity without proportional increases in cost or headcount. Systems are built for long-term adaptability.",
    sub: "Every deployment is architected with scalability and modularity at its core, supporting growth without operational disruption."
  }
];

function Services() {
  const [showTeam, setShowTeam] = useState(false);
  const [activeStep, setActiveStep] = useState("01");
  const sectionRef = useRef(null);

  useEffect(() => {

    const popupObserver = new IntersectionObserver(
      ([entry]) => {
        setShowTeam(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    if (sectionRef.current) popupObserver.observe(sectionRef.current);

const handleScroll = () => {
  const steps = document.querySelectorAll(".timeline-scroll-step");
  let current = "01";
  steps.forEach((step) => {
    const rect = step.getBoundingClientRect();

    if (rect.top <= 90) {   
      current = step.getAttribute("data-step-index");
    }
  });
  setActiveStep(current);
};

window.addEventListener("scroll", handleScroll, { passive: true });

return () => {
  popupObserver.disconnect();
  window.removeEventListener("scroll", handleScroll);
};

    const steps = document.querySelectorAll(".timeline-scroll-step");
    steps.forEach((step) => timelineObserver.observe(step));

    return () => {
      popupObserver.disconnect();
      timelineObserver.disconnect();
    };
  }, []);

  return (
    <>
    <Navbar variant="dark"/>

      <div
        className="services-wrapper"
        style={{ backgroundImage: `url(${serviceHeroBg})` }}
      >
        <section className="hero-block">
          <div className="hero-text-side">
            <h1 className="hero-main-title">
              Solutions Built For Modern <br /> Business Operations
            </h1>
            <p className="hero-main-desc">
              Cubots helps businesses improve efficiency, simplify workflows, and <br />
              build intelligent operational systems through practical AI solutions <br />
              designed around real business needs.
            </p>
          </div>
          <div className="hero-image-side">
            <img
              src={servicesHero}
              alt="AI Robot Hand holding Microchip"
              className="hero-robot-hand-img"
            />
          </div>
        </section>

        <section className="features-row">
          <div className="feature-col">
            <div className="feature-divider-line"></div>
            <div className="feature-title-area">
              <span className="feature-title-icon">📊</span>
              <h2 className="feature-title-text">Analytics</h2>
            </div>
            <p className="feature-description-text">
              Leverage data insights to make smarter, faster, and more informed business decisions.
            </p>
          </div>
          <div className="feature-col">
            <div className="feature-divider-line"></div>
            <div className="feature-title-area">
              <span className="feature-title-icon">⚙️</span>
              <h2 className="feature-title-text">Automation</h2>
            </div>
            <p className="feature-description-text">
              Automate repetitive tasks to improve efficiency and streamline business operations.
            </p>
          </div>
          <div className="feature-col">
            <div className="feature-divider-line"></div>
            <div className="feature-title-area">
              <span className="feature-title-icon">💻</span>
              <h2 className="feature-title-text">Scalable AI Systems</h2>
            </div>
            <p className="feature-description-text">
              Implement flexible AI solutions designed to support long-term operational growth.
            </p>
          </div>
        </section>
      </div>

      <section className="business-showcase-strip">
        <div className="business-strip-header">
          <h2>Power Your <span className="serif-italic-accent">Business </span> with Cubots</h2>
          <p>From customer support to workflow automation and analytics, Cubots helps businesses operate smarter.</p>
        </div>

        <div className="business-columns-row">
          <div className="business-info-side-panel">
            <h3>Smarter Customer Engagement with Cubots</h3>
            <p>Cubots handle customer queries, appointment scheduling, and support workflows to improve response times and satisfaction.</p>
            <div className="business-metrics-box">
              <div className="metric-col">
                <span className="metric-big-num">60%</span>
                <span className="metric-caption-lbl">Faster response resolution</span>
              </div>
              <div className="metric-col">
                <span className="metric-big-num">45%</span>
                <span className="metric-caption-lbl">Reduction in support workload</span>
              </div>
            </div>
          </div>

          <div className="business-static-media-card bg-navy-shade">
            <img src={showcaseCardImg1} alt="AI Interface Module" className="card-inner-img" />
            <div className="card-static-overlay">
              <h4>AI-Powered Workflow<br></br>Coordination</h4>
              <p>Automate repetitive tasks, approvals, notifications, and team collaboration with intelligent agents.</p>
              <button className="card-talk-cta">Talk To Us</button>
            </div>
          </div>

          <div className="business-static-media-card">
            <img src={showcaseCardImg2} alt="Analytics Screen" className="card-inner-img" />
          </div>

          <div className="business-info-side-panel">
            <h3>Data Intelligence & Decision Support</h3>
            <p>Cubots analyze business data, generate reports, and provide actionable insights for smarter decisions.</p>
            <div className="business-metrics-box">
              <div className="metric-col">
                <span className="metric-big-num">95%</span>
                <span className="metric-caption-lbl">Improved decision efficiency</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reserved-space-wrapper" ref={sectionRef}>
          <div className={`sliding-team ${showTeam ? "active" : ""}`}>
            <div className="tiny-blue-box"></div>
            <img src={twomonitor} alt="Team Main" />
            <div className="sliding-team-content-overlay">
              <h2>Intelligent Agents Designed For Business Workflows</h2>
              <p className="main-banner-paragraph">
                AI agents help businesses automate repetitive tasks, improve workflow coordination, and support
                operational efficiency across departments. These systems can assist with customer communication,
                internal operations, reporting workflows, scheduling processes, and information management while
                reducing manual dependency.
              </p>
              <p className="sub-banner-paragraph">
                Our AI agents are designed to integrate into existing operational environments and adapt to business requirements over time.
              </p>
            </div>
          </div>
        </div>
      </section>


<section className="was-section">
   <div className="was-deco-wrapper" aria-hidden="true">
    <img src={waveBlob} className="was-bg-deco" alt="" />
  </div>
  <div className="was-deco-wrapper-left" aria-hidden="true">
    <img src={blob} className="was-bg-deco-left" alt="" />
  </div>
  <div className="was-header">
    <h2>What <span className="serif-italic-accent">AI Agents</span> Can Support</h2>
    <p>Delivering excellence through industry-driven strategies designed for sustainable growth and innovation.</p>
  </div>

  <div className="was-outer">

    <div className="was-left-sticky-wrap">
      <span className="was-number-display" key={activeStep}>{activeStep}</span>
    </div>

    <div className="was-right-scroll">
      {TIMELINE_STEPS.map((step) => (
        <div
          key={step.id}
          className="timeline-scroll-step"
          data-step-index={step.id}
        >
          <h3 className="was-step-title">{step.title}</h3>
          <p className="was-step-body">{step.body}</p>
          <p className="was-step-sub">{step.sub}</p>
        </div>
      ))}
    </div>
  </div>
  
</section>

<section className="statement-section">
  <div className="statement-inner">
    <p className="statement-line line-1">AI for smarter</p>
    <p className="statement-line-2"><em>Business</em></p>
    <p className="statement-line line-3">operations</p>
  </div>
</section>

<ContactSection/>
    </>
  );
}

export default Services;