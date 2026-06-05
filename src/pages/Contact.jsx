import React from "react";
import "@/styles/contact.css";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import contactBg from "@/assets/images/contactbluebg.png";

export default function Contact() {
  return (
    <>
        <Navbar variant="light"/>
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Technology alone does not create business value. Successful AI adoption <br className="desktop-break" />
            requires the right strategy,
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-form-card">
            <h2 className="form-title">Send Us A Message</h2>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">Name</label>
                  <input type="text" id="firstName" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="number">Number</label>
                  <input type="tel" id="number" placeholder="Enter your number" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="6" 
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Subscribe Now
              </button>
            </form>
          </div>
          <div 
            className="contact-info-card" 
            style={{ backgroundImage: `url(${contactBg})` }}
          >
            <div className="contact-info-overlay" />
            
            <div className="contact-info-content">
              <h2 className="info-title">Get In Touch</h2>
              
              <div className="info-list">
                
                {/* Info Item 1 */}
                <div className="info-item">
                  <div className="info-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div className="info-text">
                    <h3>Address</h3>
                    <p>4th floor, MR DIY Building, beside Westside Anupam Garden, Samta Colony, Raipur, Chhattisgarh 492001</p>
                  </div>
                </div>

                {/* Info Item 2 */}
                <div className="info-item">
                  <div className="info-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div className="info-text">
                    <h3>Number</h3>
                    <p>+91-9039034414</p>
                  </div>
                </div>

                {/* Info Item 3 */}
                <div className="info-item">
                  <div className="info-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="info-text">
                    <h3>Email</h3>
                    <p>info@cubots.com</p>
                  </div>
                </div>

                {/* Info Item 4 */}
                <div className="info-item">
                  <div className="info-icon">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div className="info-text">
                    <h3>Business Hours</h3>
                    <p>Open 24 hours</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <ContactSection/>
    </>
  );
}