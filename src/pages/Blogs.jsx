import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import "@/styles/Blogs.css";
import AIAgentsImage from "@/assets/images/AIAgents.png";
import PredictiveAnalyticsImage from "@/assets/images/PredictiveAnalytics.png";
import IntelligentAutomationImage from "@/assets/images/IntelligentAutomation.png";
import DataIntelligenceImage from "@/assets/images/DataIntelligence.png";
import AIAutomationImage from "@/assets/images/AIAutomation.png";
import { ArrowUpRight } from "lucide-react";


export default function Blogs() {
  return (
    <>
      <Navbar variant="light" />

      <main className="blogs">
        <section className="blogs-hero">
          <div className="blogs-hero-content">
            <h1>
              Insights On AI, Automation, And
              <br />
              Intelligent Business Systems
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
            <article className="blog-card card-large-left">
                <img src={PredictiveAnalyticsImage} alt="Predictive Analytics" />
                <div className="blog-content">
                    <h3>Understanding Predictive Analytics for Modern Businesses</h3>
                </div>
            </article>

            <article className="blog-card card-top-right">
                <img src={AIAutomationImage} alt="AI Automation" />
                <div className="blog-content">
                    <h3>How AI Automation Is Changing Modern Business Operations</h3>
                </div>
            </article>

            <article className="blog-card card-middle-left">
                <img src={IntelligentAutomationImage} alt="Intelligent Automation" />
                <div className="blog-content">
                    <h3>Why Businesses Are Investing in Intelligent Automation</h3>
                </div>
            </article>

            <article className="blog-card card-middle-right">
                <img src={DataIntelligenceImage} alt="Data Intelligence" />
                <div className="blog-content">
                    <h3>How Data Intelligence Supports Business Growth</h3>
                </div>
            </article>

            <article className="blog-card card-bottom">
                <img src={AIAgentsImage} alt="AI Agents" />
                <div className="blog-content">
                    <h3>The Role of AI Agents in Modern Business Operations</h3>
                </div>
            </article>
          </div>
        </section>

        <section className="newsletter-section">

          <h2>Insights On AI, Automation, And <br /> Intelligent Business Systems</h2>

          <p>
            Receive practical insights on intelligent automation, predictive analytics, operational intelligence, and <br /> emerging business technologies from Cubots by CubeMoons.
          </p>

          <button>
          <span>  Subscribe Now </span>
           <div className="sbr-btn-icon">
           <ArrowUpRight size={16} strokeWidth={2.4} />
           </div>
          </button>
        </section>

        <section className="blog-typography">
          <h2>AI for smarter</h2>

          <span>Business</span>

          <h2 className="operations">operations</h2>
        </section>
      </main>

      <ContactSection />
    </>
  );
}
