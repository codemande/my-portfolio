import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">JasontheUgoh</div>

      {/* Desktop Navigation */}
      <nav className="nav-links">
        <a href="#hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

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
    </header>
  );
}

export default Header;