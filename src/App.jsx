import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import AIAutomation from "@/pages/blogs/AIAutomation";
import PredictiveAnalytics from "@/pages/blogs/PredictiveAnalytics";
import IntelligentAutomation from "@/pages/blogs/IntelligentAutomation";
import AIAgents from "@/pages/blogs/AIAgents";
import DataIntelligence from "./pages/blogs/DataIntelligence";
import WhyUs from "./pages/WhyUs";
import AskCubots from "./pages/AskCubots";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import RefundPolicy from "./pages/RefundPolicy";
import Compliance from "./pages/Compliance";
import Security from "./pages/Security";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/ai-automation" element={<AIAutomation />} />
      <Route path="/blogs/predictive-analytics" element={<PredictiveAnalytics />} />
      <Route path="/blogs/intelligent-automation" element={<IntelligentAutomation />} />
      <Route path="/blogs/ai-agents" element={<AIAgents />} />
      <Route path="/blogs/data-intelligence" element={<DataIntelligence />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/ask-cubots" element={<AskCubots />} />
         <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
       

      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/cookie-policy" element={<CookiePolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/security" element={<Security />} />
    </Routes>
  );
}

export default App;
