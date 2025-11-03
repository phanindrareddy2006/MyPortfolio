import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import ToonCoreReveal from "./components/ToonCoreReveal";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import BottomNav from "./components/BottomNav";
import ScrollToTop from "./components/ScrollToTop"; // ✅ added
import "./App.css";

export default function App() {
  const [stage, setStage] = useState("loader");

  return (
    <>
      {/* 👇 Stage 1: Loader */}
      {stage === "loader" && <Loader onFinish={() => setStage("reveal")} />}

      {/* 👇 Stage 2: ToonCore reveal animation */}
      {stage === "reveal" && (
        <div className="fade-transition">
          <ToonCoreReveal onFinish={() => setStage("home")} />
        </div>
      )}

      {/* 👇 Stage 3: Actual site (with navbar + pages) */}
      {stage === "home" && (
        <div className="fade-in-home">
          <ScrollToTop /> {/* ✅ added here */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <BottomNav />
        </div>
      )}
    </>
  );
}
