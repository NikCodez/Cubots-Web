// src/pages/CookiePolicy.jsx
import React from "react";
import LegalTemplate from "@/components/LegalTemplate";

const COOKIE_DATA = [
  {
    id: "introduction",
    label: "Introduction",
    title: "Introduction",
    content: [
      {
        type: "text",
        value: "Cubots uses cookies and related technologies to improve website functionality, analyze performance, and enhance user experiences."
      }
    ]
  },
  {
    id: "what-are-cookies",
    label: "What Are Cookies",
    title: "What Are Cookies",
    content: [
      {
        type: "text",
        value: "Cookies are small files stored on devices that help websites recognize users, improve usability, and support analytics functionality."
      }
    ]
  },
  {
    id: "how-we-use-cookies",
    label: "How We Use Cookies",
    title: "How We Use Cookies",
    content: [
      {
        type: "text",
        value: "Cookies may be used to:"
      },
      {
        type: "list",
        items: [
          "Improve website performance",
          "Analyze visitor interactions",
          "Support operational functionality",
          "Enhance browsing experiences"
        ]
      }
    ]
  },
  {
    id: "managing-cookies",
    label: "Managing Cookies",
    title: "Managing Cookies",
    content: [
      {
        type: "text",
        value: "Users may manage or disable cookies through browser settings. Certain website features may be affected if cookies are disabled."
      }
    ]
  },
  {
    id: "third-party-cookies",
    label: "Third Party Cookies",
    title: "Third Party Cookies",
    content: [
      {
        type: "text",
        value: "Some third party services integrated into our website may also use cookies for analytics and operational purposes."
      }
    ]
  }
];

function CookiePolicy() {
  return <LegalTemplate sections={COOKIE_DATA} />;
}

export default CookiePolicy;