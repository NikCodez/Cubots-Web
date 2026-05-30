// src/pages/Industries.jsx
import { useState, useRef, useEffect, useCallback } from "react";
import "@/styles/industries.css";
import magicBrush from "@/assets/images/your-magic-brush.png"; // your actual path
import circleIcon from "@/assets/images/your-circle-icon.png";
import handshake from "@/assets/images/handshake.png"
import chasmis from "@/assets/images/chasmis.png"
import robot from "@/assets/images/robot.png"
import ajibline from "@/assets/images/ajibline.png"
import micro from "@/assets/images/micro.png"
import worker from "@/assets/images/worker.png"
import stats from "@/assets/images/stats.png"
import callg from "@/assets/images/callg.png"
import truck from "@/assets/images/truck.png"
import opmontoring from "@/assets/images/opmontoring.png"
import dukan from "@/assets/images/dukan.png"
import touchscreen from "@/assets/images/touchscreen.png"
import waveBlob from "@/assets/images/r22.png";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import waveBg from "@/assets/images/your-wave-bg.png";

// ─────────────────────────────────────────────────────────────
// Replace null values with your actual image imports like:
// import realEstateImg1 from "@/assets/images/real-estate-1.jpg";
// ─────────────────────────────────────────────────────────────

const TABS = [
  "Real Estate",
  "Finance",
  "Manufacturing",
  "Healthcare",
  "Logistics",
  "Retail",
];

const INDUSTRY_DATA = {
  "Real Estate": {
    cards: [
      {
        type: "image",
        image: handshake, // replace with imported image
        title: "Customer Engagement",
        body: "Support faster communication and more organized customer interactions through connected engagement and workflow management tools.",
      },
      {
        type: "text",
        title: "Operational Coordination",
        body: "Simplify property management workflows, scheduling systems, reporting environments, and internal operational processes.",
      },
      {
        type: "text",
        title: "Data Analytics",
        body: "Analyze operational data, customer trends, and business activity to improve visibility and support informed business decisions.",
      },
      {
        type: "image",
        image: chasmis, // replace with imported image
        title: "Workflow Automation",
        body: "Automate repetitive operational tasks and reporting workflows to improve efficiency and reduce manual coordination across teams.",
      },
      {
        type: "plain",
        title: "Real Estate Lead Management",
        body: "Improve lead tracking, communication workflows, and customer coordination through intelligent operational systems.",
      },
    ],
  },
  Finance: {
    cards: [
      {
        type: "image",
        image: robot,
        title: "Risk Assessment",
        body: "Automate risk analysis and compliance checks with AI-driven systems that process financial data in real time.",
      },
      {
        type: "text",
        title: "Portfolio Management",
        body: "Streamline investment workflows, reporting cycles, and client communication with intelligent automation tools.",
      },
      {
        type: "text",
        title: "Fraud Detection",
        body: "Monitor transactions and flag anomalies using pattern recognition and real-time data intelligence systems.",
      },
      {
        type: "image",
        image: ajibline,
        title: "Client Onboarding",
        body: "Reduce onboarding time with automated document processing, verification, and communication workflows.",
      },
      {
        type: "plain",
        title: "Financial Reporting",
        body: "Generate accurate financial reports automatically and deliver actionable insights to decision-makers on demand.",
      },
    ],
  },
  Manufacturing: {
    cards: [
      {
        type: "image",
        image: micro,
        title: "Production Monitoring",
        body: "Track production lines, detect inefficiencies, and optimize output with real-time operational intelligence.",
      },
      {
        type: "text",
        title: "Supply Chain Automation",
        body: "Automate procurement, inventory management, and supplier communication to reduce operational delays.",
      },
      {
        type: "text",
        title: "Quality Control",
        body: "Use AI-driven inspection systems to identify defects and maintain consistent product quality standards.",
      },
      {
        type: "image",
        image: worker,
        title: "Maintenance Scheduling",
        body: "Predict equipment failures and schedule preventive maintenance to minimize downtime and reduce costs.",
      },
      {
        type: "plain",
        title: "Workforce Coordination",
        body: "Manage shift schedules, task assignments, and team communication through integrated workflow systems.",
      },
    ],
  },
  Healthcare: {
    cards: [
      {
        type: "image",
        image: stats,
        title: "Patient Engagement",
        body: "Improve patient communication, appointment scheduling, and follow-up workflows with intelligent automation.",
      },
      {
        type: "text",
        title: "Clinical Workflow",
        body: "Streamline administrative tasks, documentation, and internal coordination to free clinical staff for patient care.",
      },
      {
        type: "text",
        title: "Data & Compliance",
        body: "Manage patient data securely, ensure regulatory compliance, and generate audit-ready reports automatically.",
      },
      {
        type: "image",
        image: callg,
        title: "Resource Management",
        body: "Optimize bed allocation, staff scheduling, and equipment usage to improve operational efficiency.",
      },
      {
        type: "plain",
        title: "Remote Patient Monitoring",
        body: "Collect and analyze patient data remotely to support proactive care and reduce hospital readmissions.",
      },
    ],
  },
  Logistics: {
    cards: [
      {
        type: "image",
        image: truck,
        title: "Fleet Management",
        body: "Track vehicles in real time, optimize routes, and automate dispatch workflows to reduce delivery times.",
      },
      {
        type: "text",
        title: "Warehouse Automation",
        body: "Automate inventory tracking, order processing, and storage management with intelligent operational systems.",
      },
      {
        type: "text",
        title: "Shipment Tracking",
        body: "Provide real-time shipment visibility to customers and internal teams through automated tracking systems.",
      },
      {
        type: "image",
        image: opmontoring,
        title: "Demand Forecasting",
        body: "Predict demand patterns and optimize stock levels to reduce waste and improve supply chain efficiency.",
      },
      {
        type: "plain",
        title: "Last Mile Delivery",
        body: "Optimize last-mile delivery routes and automate customer communication to improve delivery success rates.",
      },
    ],
  },
  Retail: {
    cards: [
      {
        type: "image",
        image: dukan,
        title: "Customer Experience",
        body: "Personalize shopping experiences and automate customer support to improve satisfaction and retention.",
      },
      {
        type: "text",
        title: "Inventory Management",
        body: "Automate stock tracking, replenishment workflows, and supplier coordination to reduce out-of-stock situations.",
      },
      {
        type: "text",
        title: "Sales Analytics",
        body: "Analyze sales data, customer behavior, and market trends to support data-driven merchandising decisions.",
      },
      {
        type: "image",
        image: touchscreen,
        title: "Omnichannel Operations",
        body: "Unify online and offline operations through integrated systems that manage orders, returns, and fulfillment.",
      },
      {
        type: "plain",
        title: "Loyalty & Retention",
        body: "Build intelligent loyalty programs and automate customer re-engagement campaigns to drive repeat business.",
      },
    ],
  },
};

function Industries() {
  const [activeTab, setActiveTab] = useState("Real Estate");
  const [animKey, setAnimKey] = useState(0); // triggers re-animation on tab change
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const tabRefs = useRef([]);
  const navRef = useRef(null);

  // Move sliding indicator to active tab
  const updateIndicator = useCallback((index) => {
    const tab = tabRefs.current[index];
    const nav = navRef.current;
    if (!tab || !nav) return;
    const navRect = nav.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    setIndicatorStyle({
      width: tabRect.width,
      left: tabRect.left - navRect.left,
    });
  }, []);

  // Set indicator on mount
  useEffect(() => {
    updateIndicator(0);
  }, [updateIndicator]);

  const handleTabClick = (tab, index) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
    setAnimKey((k) => k + 1); // increment key → remounts grid → triggers animation
    updateIndicator(index);

    // On mobile: scroll tab into view
    tabRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };


  const cards = INDUSTRY_DATA[activeTab].cards;

  return (
    <>
    <Navbar variant="light"/>
    <section className="ind-section">
        <div className="deco-wrapper" aria-hidden="true">
    <img src={waveBlob} className="bg-deco" alt="" />
  </div>
         {/* ── TAB NAV ── */}
      <div className="ind-nav-wrapper">
        <nav className="ind-tab-nav" ref={navRef} role="tablist">

          {/* Sliding pill indicator */}
          <span
            className="ind-tab-indicator"
            style={{
              width: indicatorStyle.width,
              transform: `translateX(${indicatorStyle.left}px)`,
            }}
            aria-hidden="true"
          />

{TABS.map((tab, index) => (
  <button
    key={tab}
    ref={(el) => (tabRefs.current[index] = el)}
    className={`ind-tab-btn ${activeTab === tab ? "ind-tab-btn--active" : ""}`}
    onClick={() => handleTabClick(tab, index)}
    role="tab"
    aria-selected={activeTab === tab}
  >
  <span className="ind-tab-icon" aria-hidden="true">
  {activeTab === tab ? (
    <img src={magicBrush} alt="" className="ind-tab-magic-icon" />
  ) : (
    <img src={circleIcon} alt="" className="ind-tab-circle-icon" />
  )}
</span>
    <span>{tab}</span>
  </button>
))}
        </nav>
      </div>

      {/* ── CARDS GRID ── */}
      {/* key={animKey} remounts this div on every tab change, re-triggering animations */}
      <div className="ind-cards-grid" key={animKey}>

        {cards.map((card, i) => {
          if (card.type === "image") {
            return (
              <div
                key={i}
                className="ind-card ind-card--image"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="ind-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  // Placeholder when no image provided
                  <div className="ind-card-placeholder" />
                )}
                <div className="ind-card-overlay">
                  <h4 className="ind-card-title-light">{card.title}</h4>
                  <p className="ind-card-body-light">{card.body}</p>
                </div>
              </div>
            );
          }

          if (card.type === "text") {
            return (
              <div
                key={i}
                className="ind-card ind-card--text"
                style={{ animationDelay: `${i * 55}ms` }}
              >
                <h4 className="ind-card-title-dark">{card.title}</h4>
                <p className="ind-card-body-dark">{card.body}</p>
              </div>
            );
          }

          if (card.type === "plain") {
  return (
    <div
      key={i}
      className="ind-card ind-card--plain"
      style={{ animationDelay: `${i * 55}ms` }}
    >
      <img src={waveBg} alt="" className="ind-plain-bg" />
      <div className="ind-plain-content">
        <h4 className="ind-card-title-dark">{card.title}</h4>
        <p className="ind-card-body-dark">{card.body}</p>
      </div>
    </div>
  );
}
          
          return null;
        })}

      </div>

    </section>
    
<ContactSection/>
    </>
  );
}

export default Industries;