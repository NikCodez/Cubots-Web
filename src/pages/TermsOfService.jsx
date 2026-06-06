// src/pages/TermsOfService.jsx
import React from "react";
import LegalTemplate from "@/components/LegalTemplate";

const TERMS_DATA = [
  {
    id: "introduction",
    label: "Introduction",
    title: "Introduction",
    content: [
      {
        type: "text",
        value: "These Terms of Service govern access to and use of Cubots websites, digital environments, business solutions, and operational platforms."
      },
      {
        type: "text",
        value: "By accessing or using our services, users acknowledge and agree to these terms and operational guidelines."
      }
    ]
  },
  {
    id: "platform-usage",
    label: "Platform Usage",
    title: "Platform Usage",
    content: [
      {
        type: "text",
        value: "Users are expected to use services responsibly, lawfully, and in ways that do not interfere with operational integrity, platform reliability, or digital security. Unauthorized misuse of services, systems, or operational environments is prohibited."
      }
    ]
  },
  {
    id: "service-scope",
    label: "Service Scope",
    title: "Service Scope",
    content: [
      {
        type: "text",
        value: "Cubots provides AI solutions, automation systems, analytics services, consulting environments, and digital operational solutions designed around business requirements. Service availability and operational functionality may vary depending on project scope, infrastructure, and technical requirements."
      }
    ]
  },
  {
    id: "intellectual-property",
    label: "Intellectual Property",
    title: "Intellectual Property",
    content: [
      {
        type: "text",
        value: "All branding, website content, systems, designs, operational materials, and digital assets remain the intellectual property of Cubots unless otherwise stated. Unauthorized duplication, redistribution, or misuse of operational content is prohibited."
      }
    ]
  },
  {
    id: "operational-limitations",
    label: "Operational Limitations",
    title: "Operational Limitations",
    content: [
      {
        type: "text",
        value: "While we aim to maintain reliable digital environments and operational performance, uninterrupted service availability cannot always be guaranteed. Cubots is not responsible for disruptions caused by external platforms, technical failures, or third party systems."
      }
    ]
  },
  {
    id: "modifications",
    label: "Modifications and Updates",
    title: "Modifications and Updates",
    content: [
      {
        type: "text",
        value: "Operational services, systems, and policies may be updated or modified periodically to improve functionality, security, and service performance."
      }
    ]
  },
  {
    id: "contact-information",
    label: "Contact Information",
    title: "Contact Information",
    content: [
      {
        type: "text",
        value: "Questions regarding this Privacy Policy or operational practices may be directed to:"
      },
      {
        type: "link",
        label: "hello@cubots.ai",
        href: "mailto:hello@cubots.ai"
      }
    ]
  }
];

function TermsOfService() {
  return <LegalTemplate sections={TERMS_DATA} />;
}

export default TermsOfService;