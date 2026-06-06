
import "@/styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import cubotsGif from "@/assets/animations/Cubots-gif.gif";

const navItems = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Why Us", path: "/why-us" },
  { label: "Industries", path: "/industries" },
  { label: "Blogs", path: "/blogs" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar({ variant = "dark" }) {
  const isDark = variant === "dark";

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img
              src={
                isDark
                  ? "/cubots-light.png"
                  : "/cubots-dark.png"
              }
              alt="Cubots Logo"
            />
          </Link>

          <nav className="navbar-links">
            {navItems.map((item, index) => (
              <div className="nav-item-wrapper" key={item.label}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${
                      isDark ? "nav-link-dark" : "nav-link-light"
                    } ${isActive ? "active-link" : ""}`
                  }
                >
                  {item.label}
                </NavLink>

                {index !== navItems.length - 1 && (
                  <span
                    className={`nav-divider ${
                      isDark
                        ? "nav-divider-dark"
                        : "nav-divider-light"
                    }`}
                  >
                    |
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
        
        <Link to="/ask-cubots" className="navbar-btn">
          <span>Ask Cubots</span>

          <div className="btn-icon">
            {/* <ArrowUpRight size={16} strokeWidth={2.4} /> */}
            <img src={cubotsGif} alt="Cubots Animation" />
          </div>
        </Link>
      </div>
    </header>
  );
}