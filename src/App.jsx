import { Route , Routes } from "react-router-dom" ;
import Home from "./pages/Home" ;
import Blogs from "./pages/Blogs" ;

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
  );
}

export default App;