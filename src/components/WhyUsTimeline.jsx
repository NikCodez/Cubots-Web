import { useEffect, useRef, useState } from "react";

import aboutBg from "@/assets/images/about-bg.png";

import "@/styles/WhyUsTimeline.css";

const WhyUsTimeline = () => {
  const trackRef = useRef(null);
  const contentRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    if (!trackRef.current || !contentRef.current) return;

    const track = trackRef.current;

    const rect = track.getBoundingClientRect();

    const scrollableHeight =
      track.offsetHeight - window.innerHeight;

    const progress = Math.min(
      Math.max(-rect.top / scrollableHeight, 0),
      1
    );

    const lastCard =
  contentRef.current.lastElementChild;

const maxTranslate =
  lastCard.offsetLeft -
  (window.innerWidth - lastCard.offsetWidth) / 1.5;

    const targetX = -progress * maxTranslate;

setTranslateX(prev =>
  prev + (targetX - prev) * 0.08
);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleScroll);
  };
}, []);;

useEffect(() => {
    const updateHeight = () => {
      const horizontalDistance =
  contentRef.current.scrollWidth -
  window.innerWidth;

trackRef.current.style.height =
  `${horizontalDistance + window.innerHeight}px`;
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const cards = [
    {
      title: "We Build Around Business Goals",
      desc: [
        "Many AI providers start with technology. We start with your business.Before recommending any solution, we focus on understanding your operations, workflows, challenges, and growth objectives.",

        "This allows us to create systems that solve real problems instead of adding unnecessary complexity.",
      ],
    },

    {
      title: "Intelligent Agents That Work Alongside Teams",
      desc: [
        "Rather than simply automating tasks, AI agents can become operational assistants that support employees, workflows, and customer interactions.",

        "Cubots develops intelligent agents capable of handling repetitive activities, information retrieval, workflow coordination, and business support processes.",

        "This helps teams focus on higher value work while improving consistency and efficiency across operations.",

        "This is much better than: We build AI agents because it explains the business value",
      ],
    },

    {
      title: "Practical AI, Not Experimental AI",
      desc: [
        "AI should create value from day one. Our approach prioritizes usability, operational efficiency, and measurable impact over unnecessary technical complexity.",

        "Every solution is designed to integrate naturally into existing workflows while supporting long term scalability.",
      ],
    },

    {
      title: "From Data To Decisions",
      desc: [
        "Businesses generate enormous amounts of information every day.",

        "We help organizations transform that information into actionable intelligence through automation, analytics, predictive systems, and connected operational environments.",

        "The result is better visibility, faster decisions, and stronger operational performance.",
      ],
    },

    {
      title: "Conversational Experiences That Go Beyond Chatbots",
      desc: [
        "Modern businesses need more than scripted conversations.",

        "Our conversational AI systems are designed to understand context, support customer interactions, provide information, and integrate with operational workflows.",

        "Whether supporting customer engagement, lead qualification, internal knowledge access, or service operations, conversational systems can become an extension of your business.",

        "Again: Notice how we’re selling outcomes, not features.",
      ],
    },

    {
      title: "Scalable Solutions Designed For Growth",
      desc: [
        "Business requirements evolve.The systems we develop are designed to adapt, scale, and grow alongside your organization.",

        "From startups to enterprise environments, our solutions are built with long term sustainability in mind.",
      ],
    },

    {
      title: "End To End Delivery",
      desc: [
        "Many providers focus on development alone. Cubots support the entire journey through",

        "Discovery: Understanding objectives and challenges.",

        "Strategy: Identifying the right opportunities. ",

        "Development: Building intelligent systems.",

        "Integration: Connecting workflows and platforms.",

        "Optimization: Continuously improving performance.",

        "This makes you look significantly larger.",
      ],
    },
  ];

  return (
    <section className="whyus-timeline-track" ref={trackRef}>
      <div className="whyus-timeline-sticky">
        <img src={aboutBg} alt="" className="whyus-timeline-ribbon" />

        <div className="whyus-timeline-header">
          <h2>
            Turning <span> business challenges</span> into <br /> intelligent
            solutions.
          </h2>

          <p>
            Technology creates value when it solves real problems. Our focus is
            on building practical AI systems that improve efficiency, strengthen
            operations, and help organizations adapt to a rapidly changing
            digital landscape.
          </p>
        </div>

        <div
          className="whyus-timeline-content"
          ref={contentRef}
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {cards.map((card, index) => (
            <div key={index} className="whyus-timeline-card">
              <div className="whyus-timeline-node" />

              <div className="whyus-timeline-line" />
              <div className="whyus-timeline-card-content">
              <h3>{card.title}</h3>

              <div className="whyus-timeline-desc">
                {card.desc.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsTimeline;
