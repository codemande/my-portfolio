/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);

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
      </div>
    </nav>
  );
}

export default Navbar;
