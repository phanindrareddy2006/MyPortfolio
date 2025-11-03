import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import carImg from "/gifs/carrental.gif";
import hospitalImg from "/gifs/hospital.gif";
import jobImg from "/gifs/jobportal.gif";
import cyberImg from "/gifs/Honeypot.gif";

export default function Projects() {
  const projectsRef = useRef([]);

  // === Scroll Reveal ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    projectsRef.current.forEach((proj) => proj && observer.observe(proj));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-container">
      {/* === HERO === */}
      <div className="projects-hero">
        <h1 className="projects-title">
          My <span className="toon-text">ToonTech</span> Creations 💡
        </h1>
        <p className="projects-sub">
          From playful web apps to serious systems — every project tells a story! 🎬
        </p>
      </div>

      {/* === CURRENT PROJECT === */}
      <div
        className="project-banner fade-up featured"
        ref={(el) => (projectsRef.current[0] = el)}
      >
        <div className="project-content">
          <div className="project-image">
            <img src={cyberImg} alt="Honeypot Trap" />
          </div>
          <div className="project-text">
            <h2>🕵️‍♂️ Honeypot Trap (In Progress)</h2>
            <p className="project-desc">
              A cybersecurity research project where I’m building a{" "}
              <strong>Honeypot Trap System</strong> — designed to deceive, capture, 
              and analyze malicious attacks in real-time.
            </p>
            <p className="project-caption">
              “Hackers think they’re winning... until they fall into my cartoonish trap 😈”
            </p>
            <a
              href="https://github.com/phanindrareddy2006/CarRental-Project"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === CAR RENTAL SYSTEM === */}
      <div
        className="project-banner fade-up"
        ref={(el) => (projectsRef.current[1] = el)}
      >
        <div className="project-content reverse">
          <div className="project-image">
            <img src={carImg} alt="Car Rental System" />
          </div>
          <div className="project-text">
            <h2>🚗 Car Rental System</h2>
            <p className="project-desc">
              A full-stack web app for managing car rentals with user authentication, 
              booking management, and admin dashboards. Built using{" "}
              <strong>React, Node.js, Express, and MongoDB</strong>.
            </p>
            <p className="project-caption">
              “Smooth rides & smooth UI — Shinchan would approve! 🛣️”
            </p>
            <a
              href="https://github.com/phanindrareddy2006/CarRental-Project"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === HOSPITAL MANAGEMENT === */}
      <div
        className="project-banner fade-up"
        ref={(el) => (projectsRef.current[2] = el)}
      >
        <div className="project-content">
          <div className="project-image">
            <img src={hospitalImg} alt="Hospital Management System" />
          </div>
          <div className="project-text">
            <h2>🏥 Hospital Management System</h2>
            <p className="project-desc">
              A simple yet powerful hospital workflow system for managing doctors, 
              patients, and appointments efficiently using{" "}
              <strong>Java and MySQL</strong>.
            </p>
            <p className="project-caption">
              “Saving lives and debugging bugs — multitasking level: Shinchan 💉”
            </p>
            <a
              href="https://github.com/phanindrareddy2006/CarRental-Project"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === JOB PORTAL === */}
      <div
        className="project-banner fade-up"
        ref={(el) => (projectsRef.current[3] = el)}
      >
        <div className="project-content reverse">
          <div className="project-image">
            <img src={jobImg} alt="Job Portal" />
          </div>
          <div className="project-text">
            <h2>💼 Job Portal System</h2>
            <p className="project-desc">
              A career connection platform for employers and candidates, created 
              using <strong>PHP, HTML, CSS, and SQL</strong>.  
              Helping people find their dream job — with a playful twist!
            </p>
            <p className="project-caption">
              “Because work doesn’t have to be boring — Shinchan-style hiring! 🎭”
            </p>
            <a
              href="https://github.com/phanindrareddy2006/CarRental-Project"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              🔗 View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === FLOATING BUBBLES === */}
      <div className="bubble project-bubble1"></div>
      <div className="bubble project-bubble2"></div>
      <div className="bubble project-bubble3"></div>
    </section>
  );
}
