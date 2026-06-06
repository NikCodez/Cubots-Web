import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import WhyUsTimeline from "@/components/WhyUsTimeline";
import CubotsTagline from "@/components/CubotsTagline";
import CubotsVideo from "@/assets/animations/Cubots-video.mp4";
import aboutBg from "@/assets/images/about-bg.png";
import dataImg from "@/assets/images/data-analytics.png";
import brainImg from "@/assets/images/ai-brain.png";

import "@/styles/WhyUs.css";

const WhyUs = () => {
  return (
    <>
      <Navbar variant="light" />

      <section className="whyus-hero-section">
        <img src={aboutBg} alt="" className="whyus-hero-bg" />

        <div className="whyus-hero-content">
          <h1>
            Why <span>Businesses Choose</span> Cubots
          </h1>

          <p>
            Technology alone does not create business value. Successful AI
            adoption requires the right strategy, practical implementation, and
            systems designed around real operational needs.
          </p>

          <p>
            At Cubots, we focus on building intelligent solutions that improve
            efficiency, simplify workflows, and support measurable business
            outcomes.
          </p>
        </div>
      </section>

      <WhyUsTimeline />

      <div className="whyus-sticky-wrapper">
        <section className="whyus-growth-section">
          <video className="whyus-growth-video" autoPlay muted loop playsInline>
            <source src={CubotsVideo} type="video/mp4" />
          </video>
          <div className="whyus-growth-overlay"></div>

          <div className="whyus-growth-container">
            <div className="growth-card card-left">
              <h3>Business First Thinking</h3>

              <p>
                Many AI providers start with technology.
                <br />
                We start with your business.
                <br />
                Before recommending any solution, we focus on understanding your
                operations, workflows, challenges, and growth objectives.
              </p>

              <p>
                This allows us to create systems that solve real problems
                instead of adding unnecessary complexity.
              </p>
            </div>

            <div className="growth-card card-center">
              <h3>Intelligent Solutions With Purpose</h3>

              <p>
                Technology delivers the greatest impact when it solves
                meaningful business problems.
              </p>

              <p>
                Cubots develops intelligent systems that improve efficiency,
                strengthen decision making, and create measurable operational
                value through automation, analytics, and connected workflows.
              </p>

              <p>
                Every solution is designed with usability, scalability, and long
                term business outcomes in mind.
              </p>
            </div>

            <div className="growth-card card-right">
              <h3>Built For Long Term Growth</h3>

              <p>
                Businesses evolve constantly, and technology should be able to
                evolve alongside them.
              </p>

              <p>
                Cubots develops scalable AI systems that integrate naturally
                into existing operations while supporting future growth,
                changing workflows, and expanding business requirements.
              </p>

              <p>
                From intelligent automation and AI agents to predictive
                analytics and operational intelligence, our solutions are
                designed to remain flexible, adaptable, and relevant as
                organizations continue to grow.
              </p>

              <p>
                This allows businesses to invest in technology with confidence
                while maintaining long term operational efficiency and agility.
              </p>
            </div>
          </div>
        </section>

        <section className="whyus-bento-section">
          <img src={aboutBg} alt="" className="whyus-bento-ribbon-left" />
          <img src={aboutBg} alt="" className="whyus-bento-ribbon-right" />

          <div className="whyus-bento-header">
            <div className="whyus-bento-title">
              <span>Where Business</span>
              <h2>Strategy Meets AI</h2>
            </div>

            <p>
              Cubots combines business understanding, intelligent systems, and
              practical AI implementation to help organizations improve
              efficiency, unlock insights, and build scalable operational
              environments.
            </p>
          </div>

          <div className="whyus-bento-grid">
            <div className="whyus-column">
              <div className="bento-card light-card">
                <h3>Business First Thinking</h3>

                <p>
                  Every solution starts with understanding your operations,
                  challenges, and growth goals.
                </p>
              </div>

              <div className="bento-card dark-card">
                <h3>Helping organizations adopt AI with confidence.</h3>

                <p>
                  Businesses today require systems that are scalable, connected,
                  and built around real operational needs. Cubots develops
                  practical AI environments designed to improve visibility,
                  efficiency, and decision making.
                </p>
              </div>
            </div>

            <div className="whyus-column">
              <div className="bento-card blue">
                <h3>Data Driven Approach</h3>

                <p>
                  Transform business data into insights that support better
                  decisions and operational visibility.
                </p>

                <img src={dataImg} alt="" className="bento-image" />
              </div>

              <div className="bento-card light-card">
                <h3>Practical Implementation</h3>

                <p>
                  Focused on real business outcomes, not technology for the sake
                  of technology.
                </p>
              </div>
            </div>

            <div className="whyus-column">
              <div className="bento-card dark-card tall">
                <h3>Scalable Architecture</h3>

                <p>
                  Flexible systems designed to grow with your business and adapt
                  to changing operational needs.
                </p>

                <img src={brainImg} alt="" className="brain-image" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="whyus-tagline-wrapper">
        <CubotsTagline />
      </section>

      <ContactSection />
    </>
  );
};

export default WhyUs;
