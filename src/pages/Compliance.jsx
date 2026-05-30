// src/pages/Compliance.jsx
import React from "react";
import LegalTemplate from "@/components/LegalTemplate";

const COMPLIANCE_DATA = [
  {
    id: "introduction",
    label: "Introduction",
    title: "Introduction",
    content: [
      {
        type: "text",
        value: "Cubots supports responsible operational practices, transparent workflows, and scalable digital environments aligned with modern business standards and evolving technology ecosystems."
      },
      {
        type: "text",
        value: "Our approach emphasizes operational accountability, responsible implementation, and structured digital practices across services and platforms."
      }
    ]
  },
  {
    id: "operational-responsibility",
    label: "Operational Responsibility",
    title: "Operational Responsibility",
    content: [
      {
        type: "text",
        value: "We focus on building systems designed around:"
      },
      {
        type: "list",
        items: [
          "Operational clarity",
          "Scalable architecture",
          "Workflow transparency",
          "Responsible implementation",
          "Business usability"
        ]
      },
      {
        type: "text",
        value: "Operational decisions are guided by practical functionality and long term system reliability."
      }
    ]
  },
  {
    id: "responsible-technology",
    label: "Responsible Technology Practices",
    title: "Responsible Technology Practices",
    content: [
      {
        type: "text",
        value: "Our approach to AI and automation prioritizes:"
      },
      {
        type: "list",
        items: [
          "Usability",
          "Operational value",
          "Workflow alignment",
          "Scalable implementation",
          "Practical business outcomes"
        ]
      },
      {
        type: "text",
        value: "We encourage responsible adoption of intelligent technologies across modern business environments."
      }
    ]
  },
  {
    id: "data-awareness",
    label: "Data Awareness",
    title: "Data Awareness",
    content: [
      {
        type: "text",
        value: "Businesses today operate within increasingly data driven ecosystems."
      },
      {
        type: "text",
        value: "Cubots by CubeMoons encourages responsible operational handling of digital information, connected systems, and analytics environments while supporting transparency and operational visibility."
      }
    ]
  },
  {
    id: "evolving-standards",
    label: "Evolving Standards",
    title: "Evolving Standards",
    content: [
      {
        type: "text",
        value: "Technology environments continue evolving rapidly."
      },
      {
        type: "text",
        value: "Operational practices, workflows, and digital standards may be reviewed periodically to support scalability, reliability, and responsible business implementation."
      }
    ]
  },
  {
    id: "contact",
    label: "Contact",
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

function Compliance() {
  return <LegalTemplate sections={COMPLIANCE_DATA} />;
}

export default Compliance;