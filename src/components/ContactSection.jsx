// src/components/ContactSection.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone, FiMail } from "react-icons/fi";
import "@/styles/contactSection.css"; // Replace with your exact logo image path

function ContactSection() {
  return (
    <footer className="cubots-footer-wrapper">
      <div className="cubots-footer-container">
        
        {/* ======================================================== */}
        {/* --- TOP ROW: BRAND LOGO, TAGLINE & SOCIAL LINKS ------- */}
        {/* ======================================================== */}
        <div className="cubots-footer-top-row">
          <div className="cubots-footer-brand-side">
            <div className="cubots-footer-logo-area">
              {/* If you are using an SVG/image logo */}
              <img src= "./cubots-light.png" alt="Cubots Logo" className="cubots-footer-logo-img" />
              {/* Fallback if logo image path fails: <span className="cubots-footer-logo-text">cb cubots</span> */}
            </div>
            <p className="cubots-footer-tagline">
              <strong>Intelligent AI Solutions. Smarter Operations. Real Impact.</strong>
            </p>
            <p className="cubots-footer-sub-tagline">
              We build intelligent systems, custom software, and scalable cloud solutions that help businesses automate, optimize, and grow.
            </p>
          </div>

          <div className="cubots-footer-social-side">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cubots-footer-social-circle">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cubots-footer-social-circle">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cubots-footer-social-circle">
              <FaXTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cubots-footer-social-circle">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <hr className="cubots-footer-divider" />

        {/* ======================================================== */}
        {/* --- MIDDLE ROW: LINKS LINK COLUMNS TRACK GRID --------- */}
        {/* ======================================================== */}
        <div className="cubots-footer-links-grid">
          
          {/* COLUMN 1: SOLUTIONS */}
          <div className="cubots-footer-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="/solutions/ai-agents">AI Agents</a></li>
              <li><a href="/solutions/automation">Business Automation</a></li>
              <li><a href="/solutions/analytics">Predictive Analytics</a></li>
              <li><a href="/solutions/data-intelligence">Data Intelligence</a></li>
              <li><a href="/solutions/consulting">AI Consulting</a></li>
              <li><a href="/solutions/custom">Custom AI Solutions</a></li>
            </ul>
          </div>

          {/* COLUMN 2: COMPANY */}
          <div className="cubots-footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/process">Our Process</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          {/* COLUMN 3: LEGAL */}
          <div className="cubots-footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/compliance">Compliance</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div className="cubots-footer-col cubots-footer-contact-info">
            <h4>Contact</h4>
            <div className="cubots-footer-contact-item">
              <IoLocationOutline className="cubots-footer-contact-icon location-icon" />
              <span>
                4th floor, MR DIY Building, beside Westside<br />
                Anupam Garden, Samta Colony, Raipur,<br />
                Chhattisgarh 492001
              </span>
            </div>
            <div className="cubots-footer-contact-item">
              <FiPhone className="cubots-footer-contact-icon" />
              <a href="tel:+919039034414">+91-9039034414</a>
            </div>
            <div className="cubots-footer-contact-item">
              <FiMail className="cubots-footer-contact-icon" />
              <a href="mailto:info@cubots.com">info@cubots.com</a>
            </div>
          </div>

        </div>

        <hr className="cubots-footer-divider" />

        {/* ======================================================== */}
        {/* --- LOWER ROW: BOTTOM CALL TO ACTION STRIP ------------ */}
        {/* ======================================================== */}
        <div className="cubots-footer-cta-strip">
          <div className="cubots-footer-cta-text">
            <h3>Let's Build Something Intelligent Together.</h3>
            <p>Have a project in mind? Let's discuss how Cubots can help you automate,<br></br>optimize, and scale your business.</p>
          </div>
          <button className="cubots-footer-cta-btn">Talk to Us</button>
        </div>

        <hr className="cubots-footer-divider" />

        {/* ======================================================== */}
        {/* --- FOOTER BADGES & META DATA STRIP ------------------- */}
        {/* ======================================================== */}
        <div className="cubots-footer-meta-strip">
          <span className="cubots-footer-copyright">© 2026 Cubemoons Pvt. Ltd. All rights reserved.</span>
          <div className="cubots-footer-meta-tags">
            <span>Software Company in Raipur</span>
            <span>IT Consultancy in Raipur</span>
            <span>Web Development Company Raipur</span>
            <span>AI-Powered Solutions</span>
            <span>Enterprise Grade Security</span>
            <span>Scalable & Future Ready</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default ContactSection;