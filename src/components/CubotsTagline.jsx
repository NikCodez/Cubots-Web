import aboutBg from "@/assets/images/about-bg.png";
import "@/styles/CubotsTagline.css";

const CubotsTagline = () => {
  return (
    <div className="cubots-tagline-wrapper">
    <div className="tagline-heading">
      <img src={aboutBg} className="cubots-tagline-bg-1" alt="" />
      <img src={aboutBg} className="cubots-tagline-bg-2" alt="" />

      <h2>Built Smarter</h2>

      <div className="heading-middle">
        <span>With</span>
        <h2>Cubots</h2>
      </div>
    </div>
    </div>
  );
};

export default CubotsTagline;