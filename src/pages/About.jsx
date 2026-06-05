import { useState, useRef, useEffect } from "react";
import "@/styles/about.css";
import about1bg from "@/assets/images/About1bg.mp4";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import blob from "@/assets/images/leftside.png";
import waveBlob from "@/assets/images/r22.png";
import exploreArrow from "@/assets/images/exploreArrow.png";
import container from "@/assets/images/Container.svg";
import Circleloop from "@/assets/images/Circleloop.svg";
import Arrowscale from "@/assets/images/Arrow scale.svg";
import Circlegrid from "@/assets/images/Circlegrid.svg";
import uifall from "@/assets/images/ui falls.mp4";
import ribbonBg from "@/assets/images/ribbon-bg.png"; 
import iconVision from "@/assets/images/icon-vision.png";
import iconTechExcellence from "@/assets/images/icon-tech.png";
import iconIntelligentInnovation from "@/assets/images/icon-robot.png";
import iconBusinessImpact from "@/assets/images/icon-impact.png";
import iconOurStory from "@/assets/images/icon-story.png";
import iconLeadership from "@/assets/images/icon-leadership.png";
import iconAiInnovation from "@/assets/images/icon-bulb.png";
import iconTransformation from "@/assets/images/icon-transformation.png";
import iconWhatsNext from "@/assets/images/icon-next.png";


export default function CubotsAbout() {

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  const progressTrackRef = useRef(null);
  const progressContentRef = useRef(null);
  const [progressTranslateX, setProgressTranslateX] = useState(0);

  useEffect(() => {
    const handleHorizontalScroll = () => {
      if (!progressTrackRef.current || !progressContentRef.current) return;

      const track = progressTrackRef.current;
      const rect = track.getBoundingClientRect();
      const trackHeight = track.offsetHeight;
      const windowHeight = window.innerHeight;
      const maxVerticalScroll = trackHeight - windowHeight;
      const scrolledDistance = -rect.top;

      if (rect.top <= 0 && scrolledDistance <= maxVerticalScroll) {
        const maxHorizontalScroll = progressContentRef.current.scrollWidth - window.innerWidth;
        const percentage = scrolledDistance / maxVerticalScroll;
        
        setProgressTranslateX(-percentage * maxHorizontalScroll);
      } 
      else if (rect.top > 0) {
        setProgressTranslateX(0);
      } 
      else if (scrolledDistance > maxVerticalScroll) {
        const maxHorizontalScroll = progressContentRef.current.scrollWidth - window.innerWidth;
        setProgressTranslateX(-maxHorizontalScroll);
      }
    };

    window.addEventListener("scroll", handleHorizontalScroll);
    window.addEventListener("resize", handleHorizontalScroll);
    
    return () => {
      window.removeEventListener("scroll", handleHorizontalScroll);
      window.removeEventListener("resize", handleHorizontalScroll);
    };
  }, []);

  const cardsData = [
    {
      id: 1,
      title: "Vision & Purpose",
      icon: iconVision,
      desc: "Technology should solve meaningful business challenges. We focus on helping organizations simplify complexity, improve operational clarity, and create systems that support long term success."
    },
    {
      id: 2,
      title: "Technology Excellence",
      icon: iconTechExcellence,
      desc: "Modern businesses require solutions that are reliable, scalable, and adaptable. We combine advanced technologies with practical implementation strategies to build systems that evolve alongside business needs."
    },
    {
      id: 3,
      title: "Intelligent Innovation",
      icon: iconIntelligentInnovation,
      desc: "Innovation is most valuable when it creates measurable improvements. Our solutions are designed to improve workflows, strengthen decision making, and enhance operational efficiency through intelligent technologies."
    },
    {
      id: 4,
      title: "Business Impact",
      icon: iconBusinessImpact,
      desc: "Every organization is different. That is why we focus on building solutions that align with specific business objectives, operational structures, and growth ambitions."
    },
    {
      id: 5,
      title: "Our Story",
      icon: iconOurStory,
      desc: "Cubots was established as the intelligent systems division of Cubemoons with a vision to help businesses unlock the practical value of artificial intelligence, automation, and operational intelligence."
    },
    {
      id: 6,
      title: "Technology Leadership",
      icon: iconLeadership,
      desc: "We continuously explore emerging technologies and evolving business needs to ensure our solutions remain relevant, adaptable, and future ready."
    },
    {
      id: 7,
      title: "AI Innovation",
      icon: iconAiInnovation,
      desc: "Artificial intelligence is reshaping how businesses operate, communicate, and make decisions. Our focus is on transforming these advancements into practical solutions that create measurable value."
    },
    {
      id: 8,
      title: "Business Transformation",
      icon: iconTransformation,
      desc: "Technology alone does not drive growth. Successful transformation happens when innovation is combined with operational understanding, strategic thinking, and scalable implementation."
    },
    {
      id: 9,
      title: "What's Next",
      icon: iconWhatsNext,
      desc: "As technology continues to evolve, Cubots remains committed to exploring new possibilities in intelligent automation, AI agents, predictive systems, and business intelligence that help organizations stay ahead of change."
    }
  ];

  const faqData = [
    {
      question: "How can AI help improve business operations?",
      answer: "AI drives systemic operational scale by automating complex manual data workflows, introducing highly accurate predictive insights, and optimizing asset tracking parameters to eliminate structural bottlenecks."
    },
    {
      question: "What types of AI solutions do you build?",
      answer: "We engineer customized intelligent ecosystems including machine learning pipelines, autonomous software agents, predictive analytical models, computer vision systems, and cognitive workflow automations tailored around specific target KPIs."
    },
    {
      question: "Can AI be integrated into existing systems?",
      answer: "Yes, our architectures are engineered for seamless interoperability. We deploy robust pipelines that securely anchor modern AI layers directly onto your legacy databases and current tech infrastructure without disrupting continuous business lines."
    },
    {
      question: "How do you identify the right AI solution for a business?",
      answer: "Through data auditing and strategic discovery. We inspect your existing data structures and workflows to target high-leverage bottlenecks where automation yields the highest operational returns."
    },
    {
      question: "How do you ensure AI delivers measurable impact?",
      answer: "Every deployment runs alongside a rigorous baseline metrics evaluation. We build dedicated real-time telemetry control frames into our implementations to cleanly verify throughput increases, cost reductions, and efficiency gains."
    }
  ];

  return (
    <>
    <div className="hero-scroll-cage">
        
        <section className="first-video-section">
          <Navbar variant="dark"/>
          <div className="about-wrapper">
            <video className="about-video-bg" autoPlay loop muted playsInline>
              <source src={about1bg} type="video/mp4" />
            </video>
            <div className="about-overlay" />
            <div className="about-content">
              <h1 className="about-title">Building Intelligent Systems <br /> For Modern Businesses</h1>
              <p className="about-desc">Cubots  helps organizations automate processes, unlock business intelligence, and build scalable AI solutions designed around real operational needs.</p>
            </div>
          </div>
        </section>

    <section className="mission-wrapper">
      <div className="mission-image-side">
        <img src={blob} alt="decorative shape" className="mission-shape-img" />
      </div>
      <div className="mission-text-side">
        <p className="mission-para">
          As businesses generate more data, manage increasingly complex workflows,
          and operate in rapidly changing environments, the need for intelligent systems
          continues to grow.
        </p>

        <p className="mission-para">
          Cubots was created to help organizations bridge the gap between emerging
          technologies and practical implementation through AI driven solutions that
          improve efficiency, visibility, and decision making.
        </p>

        <a href="/services" className="ab-transform-cta">
          <span>Subscribe Now</span>
          <span className="ab-transform-subscribeNow-arrow-wrap">
            <img src={exploreArrow} alt="↗" className="ab-transform-subscribeNow-arrow-img" />
          </span>
        </a>
      </div>   
    </section>
    </div>
    
    <section className="ab-features-section">
      <div className="mission-cards-grid">
        
        <div className="mission-box mission-box--dark">
          <div className="mission-box-content">
            <h3 className="mission-box-title">Navigating The Future Of <em>Intelligent Business</em></h3>
            <p className="mission-box-desc">
              The future belongs to organizations that can adapt quickly, make informed decisions, and operate with greater visibility. Our work is guided by four principles that shape every solution we build.
            </p>
          </div>
          <div className="mission-box-graphic">
            <img src={container} alt="Line Design Accent" className="mission-box-vector" />
          </div>
        </div>

     
        <div className="mission-box mission-box--light">
          <div className="mission-box-content">
            <h3 className="mission-box-title"><em>Modern businesses</em> need more than software.</h3>
            <p className="mission-box-desc">
              They need intelligent systems that connect information, automate repetitive work, and provide greater visibility into operations.
            </p>
            <p className="mission-box-desc">
              Cubots helps organizations create these environments through practical AI implementation designed around business goals, operational efficiency, and long term scalability.
            </p>
          </div>
          <div className="mission-box-graphic">
            <img src={Circleloop} alt="Line Design Accent" className="mission-box-vector" />
          </div>
        </div>

      
        <div className="mission-box mission-box--dark">
          <div className="mission-box-content">
            <h3 className="mission-box-title">Knowledge is an essential part of <em>innovation.</em></h3>
            <p className="mission-box-desc">
              Through our insights, perspectives, and research, we explore the technologies, trends, and business strategies shaping the future of intelligent operations.
            </p>
            <p className="mission-box-desc">
              Our goal is to help organizations better understand artificial intelligence, automation, analytics, and digital transformation while providing practical perspectives that support informed decision making.
            </p>
          </div>
          <div className="mission-box-graphic">
            <img src={Arrowscale} alt="Line Design Accent" className="mission-box-vector" />
          </div>
        </div>

       
        <div className="mission-box mission-box--light">
          <div className="mission-box-content">
            <h3 className="mission-box-title">Transforming Business Operations Through <em>Intelligent Technology</em></h3>
            <p className="mission-box-desc">
              Our approach is centered on usability, scalability, and operational impact, ensuring that technology becomes a meaningful part of business transformation rather than an isolated tool.
            </p>
          </div>
          <div className="mission-box-graphic">
            <img src={Circlegrid} alt="Line Design Accent" className="mission-box-vector" />
          </div>
        </div>

      </div>
    </section>
    <div className="second-scroll-cage">
      <section className="ab-video-scroll-track">
        <div className="ab-sticky-video-view">
          <video className="ab-scroll-video-asset" autoPlay loop muted playsInline>
            <source src={uifall} type="video/mp4" />
          </video>
          <div className="ab-video-scroll-mask" />
        </div>
      </section>
    
      <div className="progress-scroll-track" ref={progressTrackRef}>
          <div className="progress-sticky-view">
            
            <div 
              className="progress-ribbon-bg" 
              style={{ backgroundImage: `url(${ribbonBg})` }}
            />
<div className="progress-header-block">
                <h1 className="progress-main-title">
                  Built for <em>Meaningful </em> &nbsp;Progress
                </h1>
                <p className="progress-main-desc">
                  Cubots helps businesses accelerate innovation, modernize operations, and unlock new possibilities through 
                  AI-powered technology, intelligent engineering, and scalable digital transformation.
                </p>
              </div>

            <div 
              className="progress-horizontal-content" 
              ref={progressContentRef}
              style={{ transform: `translateX(${progressTranslateX}px)` }}
            >
        
              <div className="progress-cards-row">
                {cardsData.map((card) => (
                  <div key={card.id} className="progress-card">
                    <h3 className="card-title">{card.title}</h3>
                    <div className="card-graphic-wrapper">
                      <img src={card.icon} alt={card.title} className="card-graphic-img" />
                    </div>
                    <p className="card-desc">{card.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>

      <section className="ab-faq-section">

        <div 
          className="faq-glass-ribbon-bg" 
          style={{ backgroundImage: `url(${waveBlob})` }}
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
                    <span className="faq-icon-indicator">{isOpen ? "−" : "+"}</span>
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
    <ContactSection/>
    </>
  );
}
 