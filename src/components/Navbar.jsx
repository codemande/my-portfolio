/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  // toggle shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scroll
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${active ? "navbar-active" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleScrollTo("hero")}>
          JasontheUgoh
        </div>

        <ul className="nav-links">
          <li onClick={() => handleScrollTo("about")}>About</li>
          <li onClick={() => handleScrollTo("projects")}>Projects</li>
          <li onClick={() => handleScrollTo("contact")}>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Dropdown */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
