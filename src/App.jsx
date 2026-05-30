import { Route , Routes } from "react-router-dom" ;
import Home from "./pages/Home" ;
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
  );
}

export default App;