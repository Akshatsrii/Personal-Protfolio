import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false); // close mobile menu
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <h1 className="logo-text">
            <span className="logo-main">Akshat Srivastava</span>
          </h1>
        </div>

        <div className="nav-right desktop-menu">
          <ul className="nav-menu">
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About Me</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
            <li onClick={() => scrollToSection("footer")}>Contact</li>
          </ul>

          <button
            className="nav-btn"
            onClick={() => scrollToSection("contact")}
          >
            Connect With Me
          </button>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
          <span className={isMenuOpen ? "active" : ""}></span>
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close Menu"
        >
          ✕
        </button>

        <ul className="sidebar-menu">
          <li onClick={() => scrollToSection("home")}>
            Home
            <span className="menu-arrow">→</span>
          </li>
          <li onClick={() => scrollToSection("about")}>About Me</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;