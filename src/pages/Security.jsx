// src/pages/Security.jsx
import React from "react";
import LegalTemplate from "@/components/LegalTemplate";

const SECURITY_DATA = [
  {
    id: "introduction",
    label: "Introduction",
    title: "Introduction",
    content: [
      {
        type: "text",
        value: "Cubots prioritizes operational reliability, digital protection, and responsible infrastructure practices across platforms, systems, and services."
      },
      {
        type: "text",
        value: "Our operational approach focuses on maintaining secure digital environments designed to support business continuity and scalable technology implementation."
      }
    ]
  },
  {
    id: "infrastructure-practices",
    label: "Infrastructure Practices",
    title: "Infrastructure Practices",
    content: [
      {
        type: "text",
        value: "We implement operational and technical practices intended to support:"
      },
      {
        type: "list",
        items: [
          "System reliability",
          "Infrastructure stability",
          "Workflow protection",
          "Operational continuity",
          "Platform monitoring"
        ]
      },
      {
        type: "text",
        value: "Security practices may evolve continuously to address changing operational requirements and digital environments."
      }
    ]
  },
  {
    id: "access-management",
    label: "Access Management",
    title: "Access Management",
    content: [
      {
        type: "text",
        value: "Operational systems may include controlled access environments designed to reduce unauthorized activity and improve platform protection. Access permissions are managed according to operational requirements and workflow responsibilities."
      }
    ]
  },
  {
    id: "data-protection",
    label: "Data Protection Practices",
    title: "Data Protection Practices",
    content: [
      {
        type: "text",
        value: "Reasonable operational safeguards are used to support responsible information handling and secure business environments. These may include:"
      },
      {
        type: "list",
        items: [
          "Protected workflows",
          "Operational reviews",
          "Infrastructure monitoring",
          "System management practices"
        ]
      }
    ]
  },
  {
    id: "responsible-ai",
    label: "Responsible AI Practices",
    title: "Responsible AI Practices",
    content: [
      {
        type: "text",
        value: "As an AI solutions company, Cubots focuses on practical and responsible implementation approaches designed around operational usability, workflow clarity, and scalable business environments."
      }
    ]
  },
  {
    id: "continuous-improvement",
    label: "Continuous Operational Improvement",
    title: "Continuous Operational Improvement",
    content: [
      {
        type: "text",
        value: "Security processes and infrastructure practices may be reviewed periodically to improve operational resilience, platform stability, and digital reliability."
      }
    ]
  }
];

function Security() {
  return <LegalTemplate sections={SECURITY_DATA} />;
}

export default Security;