import React, { useEffect, useRef } from "react";
import "../styles/Achievements.css";

// === Thumbnail logos ===
import aceImg from "/logos/ace.svg";
import junosImg from "/logos/juniper.png";
import linguaskillImg from "/logos/linguaskill.png";
import salesforceImg from "/logos/salesforce.png";

// === PDF Certificates ===
import acePDF from "/certificates/ace.pdf";
import junosPDF from "/certificates/juniper.pdf";
import linguaskillPDF from "/certificates/linguaskill.pdf";
import salesforcePDF from "/certificates/salseforce.pdf";

export default function Achievements() {
  const bannersRef = useRef([]);

  // === Scroll Reveal Animation ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    bannersRef.current.forEach((banner) => banner && observer.observe(banner));
    return () => observer.disconnect();
  }, []);

  const certificates = [
    {
      title: "ACE Aviatrix Certified Engineer",
      desc: "Cloud networking mastery — designed secure, scalable multi-cloud architectures with Aviatrix.",
      img: aceImg,
      full: acePDF,
    },
    {
      title: "Junos Network Certified Associate",
      desc: "Achieved certification for Juniper’s Junos OS — routing, switching, and networking foundations.",
      img: junosImg,
      full: junosPDF,
    },
    {
      title: "Linguaskill Business English",
      desc: "Certified by Cambridge for English proficiency — fluent communication for global collaboration.",
      img: linguaskillImg,
      full: linguaskillPDF,
    },
    {
      title: "Salesforce AI Associate",
      desc: "Completed Salesforce AI fundamentals — integrating AI and CRM to deliver smarter automation.",
      img: salesforceImg,
      full: salesforcePDF,
    },
  ];

  return (
    <section className="achievements-container">
      {/* === HERO === */}
      <div className="achievements-hero">
        <h1 className="achievements-title">
          My <span className="toon-text">Achievements</span> 🏅
        </h1>
        <p className="achievements-sub">
          Certifications that showcase my skills, curiosity, and love for both tech & fun 🚀
        </p>
      </div>

      {/* === CERTIFICATES === */}
      {certificates.map((cert, i) => (
        <div
          key={i}
          className={`achievement-banner fade-up ${i % 2 === 1 ? "reverse" : ""}`}
          ref={(el) => (bannersRef.current[i] = el)}
        >
          <div className="achievement-content">
            <div className="achievement-image">
              <img src={cert.img} alt={cert.title} />
            </div>
            <div className="achievement-text">
              <h3>{cert.title}</h3>
              <p>{cert.desc}</p>
              <a
                href={cert.full}
                target="_blank"
                rel="noopener noreferrer"
                className="view-btn"
              >
                👀 View Certificate
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* === FLOATING BUBBLES === */}
      <div className="bubble ach-bubble1"></div>
      <div className="bubble ach-bubble2"></div>
      <div className="bubble ach-bubble3"></div>
    </section>
  );
}
