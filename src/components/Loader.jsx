import React, { useState, useEffect, useRef } from "react";
import "../styles/Loader.css";

const phrases = [
  "Loading my adventures...",
  "Summoning gadgets...",
  "Tuning creativity sensors...",
  "Almost there, stay curious!",
];

const images = ["/Doraemon-flying-on-broom.png"];

export default function Loader({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const [currentImg, setCurrentImg] = useState(images[0]);
  const [showButton, setShowButton] = useState(false);
  const [clicked, setClicked] = useState(false);

  const doraRef = useRef(null);
  const progressRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    // random image selection
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCurrentImg(randomImage);

    // text rotation
    const textInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1500);

    // animation duration
    const duration = 5000;
    let start = null;

    function animate(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);

      if (barRef.current && progressRef.current && doraRef.current) {
        const barRect = barRef.current.getBoundingClientRect();
        const barWidth = barRect.width;
        const newWidth = barWidth * progress;

        progressRef.current.style.width = `${progress * 100}%`;

        // Doraemon moves with progress bar
        const imageLeft = barRect.left + newWidth - doraRef.current.offsetWidth / 2;
        doraRef.current.style.left = `${imageLeft}px`;
      }

      if (elapsed < duration) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

    // sparkle trail
    const sparkleInterval = setInterval(() => {
      if (doraRef.current) {
        const rect = doraRef.current.getBoundingClientRect();
        const offsetY = -20;
        setSparkles((prev) => [
          ...prev,
          {
            id: Math.random(),
            left: rect.left + rect.width / 2 + (Math.random() * 30 - 15),
            top: rect.bottom + offsetY + (Math.random() * 10 - 5),
          },
        ]);
      }
    }, 80);

    // show button when loader finishes
    const showButtonTimer = setTimeout(() => setShowButton(true), 5200);

    return () => {
      clearInterval(textInterval);
      clearInterval(sparkleInterval);
      clearTimeout(showButtonTimer);
    };
  }, []);

  // handle click -> play sound + start reveal
  const handleEnter = () => {
    setClicked(true);
    setFadeOut(true); // fade starts immediately

    // sound plays slightly after fade starts
    const introSound = new Audio("/sounds/tooncore-intro.wav");
    introSound.volume = 0.6;
    setTimeout(() => {
      introSound.play().catch((err) => console.warn("Autoplay blocked:", err));
    }, 300);

    // start reveal just after fade transition (no gap)
    setTimeout(() => {
      onFinish();
    }, 400);
  };

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      {/* Sparkles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="sparkle"
          style={{ left: s.left + "px", top: s.top + "px" }}
        ></div>
      ))}

      {/* Doraemon Image */}
      <img ref={doraRef} src={currentImg} alt="Mascot" className="loader-img" />

      {/* Progress Bar */}
      <div ref={barRef} className="loader-bar">
        <div ref={progressRef} className="loader-progress"></div>
      </div>

      {/* Loading Text */}
      <p className="loader-text">{phrases[index]}</p>

      {/* Button appears after loading completes */}
      {showButton && !clicked && (
        <button className="enter-btn fade-in" onClick={handleEnter}>
          Enter My World 🌈
        </button>
      )}
    </div>
  );
}
