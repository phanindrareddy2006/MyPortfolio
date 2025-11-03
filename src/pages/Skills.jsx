import React, { useEffect, useRef } from "react";
import "../styles/Skills.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiLinux,
  SiKalilinux,
  SiGit,
  SiBurpsuite,
  SiWireshark,
} from "react-icons/si";
import { FaUsers, FaLightbulb, FaCogs } from "react-icons/fa";

export default function Skills() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const webSkills = [
    { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <SiCss3 color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React", icon: <SiReact color="#61DAFB" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#3C873A" /> },
    { name: "Express", icon: <SiExpress color="#444" /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
  ];

  const cyberSkills = [
    { name: "Linux", icon: <SiLinux color="#000" /> },
    { name: "Kali Linux", icon: <SiKalilinux color="#268BEE" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> },
    { name: "Burp Suite", icon: <SiBurpsuite color="#FF6600" /> },
    { name: "Wireshark", icon: <SiWireshark color="#1679A7" /> },
  ];

  const softSkills = [
    { name: "Teamwork", icon: <FaUsers color="#8A6FD1" /> },
    { name: "Problem Solving", icon: <FaCogs color="#8A6FD1" /> },
    { name: "Creativity", icon: <FaLightbulb color="#FFD43B" /> },
  ];

  const renderBadges = (skills) =>
    skills.map((skill, i) => (
      <div className="skill-badge" key={i}>
        <div className="icon">{skill.icon}</div>
        <span>{skill.name}</span>
      </div>
    ));

  return (
    <section className="skills-container">
      <div className="skills-hero">
        <h1 className="skills-title">
          My <span className="toon-text">Power-Ups ⚡</span>
        </h1>
        <p className="skills-sub">
          Every hero has their own set of powers — here are mine!
        </p>
      </div>

      <div className="skills-banner fade-up" ref={(el) => (sectionsRef.current[0] = el)}>
        <h2>💻 Web Development</h2>
        <div className="skills-grid">{renderBadges(webSkills)}</div>
      </div>

      <div className="skills-banner fade-up" ref={(el) => (sectionsRef.current[1] = el)}>
        <h2>🛡️ Cybersecurity & Tools</h2>
        <div className="skills-grid">{renderBadges(cyberSkills)}</div>
      </div>

      <div className="skills-banner fade-up" ref={(el) => (sectionsRef.current[2] = el)}>
        <h2>🎨 Soft Skills</h2>
        <div className="skills-grid">{renderBadges(softSkills)}</div>
      </div>

      <div className="bubble skills-bubble1"></div>
      <div className="bubble skills-bubble2"></div>
      <div className="bubble skills-bubble3"></div>
    </section>
  );
}
