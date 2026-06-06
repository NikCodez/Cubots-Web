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
    </Routes>
  );
}

export default App;
