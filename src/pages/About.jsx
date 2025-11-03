import React, { useEffect, useRef } from "react";
import "../styles/About.css";

// === Cartoon images ===
import profilePic from "/gifs/me2.gif";
import schoolImg from "/gifs/school.gif";
import interImg from "/gifs/college.gif";
import btechImg from "/gifs/university.gif";

export default function About() {
  const bannersRef = useRef([]);

  // === Scroll Reveal Animation Hook ===
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    bannersRef.current.forEach((banner) => {
      if (banner) observer.observe(banner);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-container">
      {/* === HERO === */}
      <div className="about-hero">
        <div className="hero-left">
          <img src={profilePic} alt="Phanindra Reddy" className="about-img" />
        </div>

        <div className="hero-right">
          <h1 className="about-title">
            About <span className="toon-text">Me</span>
          </h1>
          <p className="about-intro">
            Hey there! 👋 I’m <strong>Donthireddy Phanindra Reddy</strong>, a{" "}
            <span className="highlight">Computer Science & Engineering student</span> at{" "}
            <strong>KL University</strong>, turning code into creativity!
          </p>
          <p className="about-desc">
            I love crafting web experiences that are smart, fun, and full of life — blending{" "}
            <strong>design</strong> and <strong>logic</strong> to create something playful 🌟
          </p>

          {/* === PROFILE LINKS === */}
          <div className="contact-links about-links">
            <a href="mailto:phanindrareddy0210@gmail.com" target="_blank" rel="noreferrer">
              📧 phanindrareddy0210@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/phanindrareddy" target="_blank" rel="noreferrer">
              💼 LinkedIn
            </a>
            <a href="https://github.com/phanindrareddy2006" target="_blank" rel="noreferrer">
              🧠 GitHub
            </a>
          </div>
        </div>
      </div>

      {/* === EDUCATION SECTION === */}
      <div className="education-section">
        <h2 className="section-title">🎓 My Education Journey</h2>

        {/* B.Tech */}
        <div
          className="edu-banner fade-up"
          ref={(el) => (bannersRef.current[0] = el)}
        >
          <div className="edu-content">
            <div className="edu-image">
              <img src={btechImg} alt="B.Tech" />
            </div>
            <div className="edu-text">
              <h3>B.Tech in Computer Science & Engineering</h3>
              <h4>KL University, Guntur (2023–Present)</h4>
              <p className="edu-duration">
                Current CGPA: <strong>8.77</strong>
              </p>
              <p className="edu-desc">
                Coding, designing, and dreaming in bytes! 💻 Exploring{" "}
                <strong>Web Development</strong>, <strong>Cybersecurity</strong>,
                and <strong>AI</strong> while bringing creativity into every project.
              </p>
            </div>
          </div>
        </div>

        {/* Intermediate */}
        <div
          className="edu-banner fade-left"
          ref={(el) => (bannersRef.current[1] = el)}
        >
          <div className="edu-content reverse">
            <div className="edu-image">
              <img src={interImg} alt="Intermediate" />
            </div>
            <div className="edu-text">
              <h3>Intermediate (MPC)</h3>
              <h4>Sri Sarada Junior College, Vijayawada (2021–2023)</h4>
              <p className="edu-cgpa">
                Percentage: <strong>84.6%</strong>
              </p>
              <p className="edu-desc">
                Balancing equations, logic, and curiosity ✨ — this phase sharpened my
                problem-solving and analytical thinking.
              </p>
            </div>
          </div>
        </div>

        {/* School */}
        <div
          className="edu-banner fade-right"
          ref={(el) => (bannersRef.current[2] = el)}
        >
          <div className="edu-content">
            <div className="edu-image">
              <img src={schoolImg} alt="School" />
            </div>
            <div className="edu-text">
              <h3>Secondary Education (SSC)</h3>
              <h4>Vijnana Vihara School, Nutakki (2010–2021)</h4>
              <p className="edu-cgpa">
                CGPA: <strong>10.0</strong>
              </p>
              <p className="edu-desc">
                The origin story! 🌈 Where imagination met curiosity — every class felt
                like a new cartoon episode of discovery!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* === FLOATING BUBBLES === */}
      <div className="bubble about-bubble1"></div>
      <div className="bubble about-bubble2"></div>
      <div className="bubble about-bubble3"></div>
    </section>
  );
}
