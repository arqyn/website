/*
 * 1. use a loop for repeating code hint: span
 */

import { useState } from "react";
import logoImg from "../assets/arqyn_dev_logo.jpg";
import "../styles/Navbar.css";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const Logo = () => {
    return (
      <div className="logo-container">
        <h2 className="logo-title">Arqyn</h2>
        <a href="/" aria-label="Homepage" className="logo-link">
          <img src={logoImg} alt="Arqyn Dev Logo" className="logo-image" />
        </a>
      </div>
    );
  };

  const NavLinks = () => {
    return (
      <nav aria-label="Main navigation" className="nav-links">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  };

  const ActionButton = () => {
    return (
      <button className="action-button">
        <a
          href="https://www.linkedin.com/company/arqyn-dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="action-button-link"
        >
          Learn More
        </a>
      </button>
    );
  };

  return (
    <nav className="navbar">
      <Logo />
      {/* Desktop Nav */}
      <div className="navbar-desktop">
        <NavLinks />
        <ActionButton />
      </div>
      {/* Hamburger Icon for Mobile */}
      <button
        className="hamburger-button"
        onClick={() => setMobileOpen(prev => !prev)}
        aria-label="Toggle mobile menu"
      >
        {["top", "middle", "bottom"].map(position => (
          <span
            key={position}
            className={`hamburger-line ${position} ${mobileOpen ? "open" : ""}`}
          ></span>
        ))}
      </button>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <NavLinks />
        <ActionButton />
      </div>
      {/* Overlay */}
      {mobileOpen && (
        <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
