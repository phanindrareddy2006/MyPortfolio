import React, { useState, useEffect, useRef } from "react";
import "./BottomNav.css";
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaRocket,
  FaGraduationCap,
  FaBriefcase,
  FaMedal,
  FaEnvelope,
} from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("home");
  const highlightRef = useRef(null);
  const navRef = useRef(null);

  const navItems = [
    { id: "home", icon: <FaHome />, label: "Home", path: "/" },
    { id: "about", icon: <FaUserAlt />, label: "About Me", path: "/about" },
    { id: "skills", icon: <FaTools />, label: "Skills", path: "/skills" },
    { id: "projects", icon: <FaRocket />, label: "Projects", path: "/projects" },
    { id: "achievements", icon: <FaMedal />, label: "Achievements", path: "/achievements" },
    { id: "contact", icon: <FaEnvelope />, label: "Contact", path: "/contact" },
  ];

  // Update active based on route
  useEffect(() => {
    const currentPath = location.pathname.replace("/", "") || "home";
    setActive(currentPath);
  }, [location]);

  // Animate sliding highlight
  useEffect(() => {
    const nav = navRef.current;
    const highlight = highlightRef.current;
    if (!nav || !highlight) return;

    const activeIndex = navItems.findIndex((i) => i.id === active);
    const buttons = nav.querySelectorAll(".nav-btn");

    if (buttons.length && activeIndex >= 0) {
      const activeBtn = buttons[activeIndex];
      const rect = activeBtn.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const offset = rect.left - navRect.left;

      highlight.style.transform = `translateX(${offset}px)`;
    }
  }, [active]);

  const handleNavClick = (item) => {
    setActive(item.id);
    navigate(item.path);
  };

  return (
    <nav className="tooncore-nav" ref={navRef}>
      {/* Sliding highlight */}
      <div className="nav-highlight" ref={highlightRef}></div>

      {navItems.map((item) => (
        <div key={item.id} className="nav-item">
          <button
            className={`nav-btn ${active === item.id ? "active" : ""}`}
            onClick={() => handleNavClick(item)}
          >
            <span className="icon">{item.icon}</span>
            <span className="sparkle"></span>
          </button>
          <div className="nav-label">{item.label}</div>
        </div>
      ))}
    </nav>
  );
};

export default BottomNav;
