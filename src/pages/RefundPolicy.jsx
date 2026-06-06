// src/pages/RefundPolicy.jsx
import React from "react";
import LegalTemplate from "@/components/LegalTemplate";

const REFUND_DATA = [
  {
    id: "introduction",
    label: "Introduction",
    title: "Introduction",
    content: [
      {
        type: "text",
        value: "Cubots focuses on delivering customized digital solutions, operational systems, AI services, and business technologies designed around client requirements. Due to the tailored nature of services provided, refund eligibility may vary depending on project scope, operational progress, and agreed deliverables."
      }
    ]
  },
  {
    id: "service-based-work",
    label: "Service Based Work",
    title: "Service Based Work",
    content: [
      {
        type: "text",
        value: "Most services involve customized operational planning, system architecture, consultation, development, or implementation activities."
      },
      {
        type: "text",
        value: "Once project work, operational research, planning, or implementation has started, refunds may not apply fully or partially depending on completed work."
      }
    ]
  },
  {
    id: "consultation-services",
    label: "Consultation Services",
    title: "Consultation Services",
    content: [
      {
        type: "text",
        value: "Consultation sessions, strategic discussions, operational reviews, and advisory services are generally non refundable after delivery."
      }
    ]
  },
  {
    id: "project-cancellations",
    label: "Project Cancellations",
    title: "Project Cancellations",
    content: [
      {
        type: "text",
        value: "Cancellation requests may be reviewed based on:"
      },
      {
        type: "list",
        items: [
          "Project stage",
          "Completed operational work",
          "Agreed deliverables",
          "Service commitments",
          "Implementation progress"
        ]
      }
    ]
  },
  {
    id: "operational-support",
    label: "Operational Support",
    title: "Operational Support",
    content: [
      {
        type: "text",
        value: "Clients are encouraged to contact our team regarding operational concerns, service clarifications, or project related issues before requesting cancellation or refund reviews."
      }
    ]
  },
  {
    id: "policy-changes",
    label: "Policy Changes",
    title: "Policy Changes",
    content: [
      {
        type: "text",
        value: "Refund policies may be updated periodically based on operational improvements and service structure changes."
      }
    ]
  }
];

function RefundPolicy() {
  return <LegalTemplate sections={REFUND_DATA} />;
}

export default RefundPolicy;