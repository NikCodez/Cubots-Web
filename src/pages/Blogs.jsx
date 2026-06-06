import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import CubotsTagline from "@/components/CubotsTagline";
import "@/styles/Blogs.css";
import AIAgentsImage from "@/assets/images/AIAgents.png";
import PredictiveAnalyticsImage from "@/assets/images/PredictiveAnalytics.png";
import IntelligentAutomationImage from "@/assets/images/IntelligentAutomation.png";
import DataIntelligenceImage from "@/assets/images/DataIntelligence.png";
import AIAutomationImage from "@/assets/images/AIAutomation.png";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blogs() {
  return (
    <>
      <Navbar variant="light" />

      <main className="blogs">
        <section className="blogs-hero">
          <div className="blogs-hero-content">
            <h1>
              Insights On <span>AI, Automation, And
              <br />
              Intelligent Business</span> Systems
            </h1>

            <p>
              Explore practical perspectives on artificial intelligence,
              workflow automation, predictive analytics, operational
              intelligence, and the future of modern business operations.
            </p>
          </div>
        </section>

        <section className="blogs-grid-section">
          <div className="blogs-grid">
            <Link to="/blogs/predictive-analytics" className="blog-card card-large-left">
              <img src={PredictiveAnalyticsImage} alt="Predictive Analytics" />
              <div className="blog-content">
                <h3>
                  Understanding Predictive <span> Analytics for Modern Businesses</span>
                </h3>
              </div>
            </Link>

            <Link
              to="/blogs/ai-automation"
              className="blog-card card-top-right"
            >
              <img src={AIAutomationImage} alt="AI Automation" />
              <div className="blog-content">
                <h3>
                  How AI Automation Is Changing Modern <span> Business Operations</span>
                </h3>
              </div>
            </Link>

            <Link to="/blogs/intelligent-automation" className="blog-card card-middle-left">
              <img
                src={IntelligentAutomationImage}
                alt="Intelligent Automation"
              />
              <div className="blog-content">
                <h3>Why Businesses Are Investing in <br /><span>Intelligent Automation</span> </h3>
              </div>
            </Link>

            <Link to="/blogs/data-intelligence" className="blog-card card-middle-right">
              <img src={DataIntelligenceImage} alt="Data Intelligence" />
              <div className="blog-content">
                <h3>How Data Intelligence Supports <span> Business Growth</span></h3>
              </div>
            </Link>

            <Link to="/blogs/ai-agents" className="blog-card card-bottom">
              <img src={AIAgentsImage} alt="AI Agents" />
              <div className="blog-content">
                <h3>The Role of AI Agents in Modern <span>Business Operations</span></h3>
              </div>
            </Link>
          </div>
        </section>

        <section className="newsletter-section">
          <h2>
            Where <span>AI Meets</span> <br /> Business Innovation
          </h2>

          <p>
            Discover practical strategies, emerging technologies, and real-world applications of AI that are <br /> reshaping customer experiences and operations.
          </p>

          <button className="subscribe-btn">
            <span> Subscribe Now </span>
            <div className="sbr-btn-icon">
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </div>
          </button>
        </section>
        <section className="blog-tagline-wrapper">
         <CubotsTagline/>
         </section>
      </main>
      
       
      <ContactSection />
    </>
  );
}
