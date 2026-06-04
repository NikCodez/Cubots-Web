import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import AIAutomation from "@/pages/blogs/AIAutomation";
import PredictiveAnalytics from "@/pages/blogs/PredictiveAnalytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/ai-automation" element={<AIAutomation />} />
      <Route path="/blogs/predictive-analytics" element={<PredictiveAnalytics />} />
    </Routes>
  );
}

export default App;
