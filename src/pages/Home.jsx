import React, { useRef, useEffect } from "react";
import "../styles/Home.css";
import heroImage from "/gifs/pikachu.gif";
import studyImg from "/gifs/education.gif";
import hobbyImg from "/gifs/hobbies.gif";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Home() {
  const traitsSectionRef = useRef(null);
  const heroImageRef = useRef(null);

  const handleScrollToTraits = () => {
    traitsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Small parallax effect on scroll
  useEffect(() => {
    const img = heroImageRef.current;
    if (!img) return;

    const handleScroll = () => {
      const sc = window.scrollY;
      img.style.transform = `translateY(${-Math.min(sc * 0.08, 40)}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cards = [
    { id: 1, text: "Code Ninja 💻" },
    { id: 2, text: "UI Sorcerer 🪄" },
    { id: 3, text: "Dream Builder 🧠" },
    { id: 4, text: "Pixel Tinkerer 🎨" },
    { id: 5, text: "Curious Explorer 🚀" },
    { id: 6, text: "Design Thinker 💡" },
    { id: 7, text: "Vision Crafter 🔮" },
    { id: 8, text: "Idea Machine ⚙️" },
    { id: 9, text: "Creative Geek 🧩" },
    { id: 10, text: "Animation Lover 🌀" },
  ];

  return (
    <div className="home-page">
      {/* === HERO === */}
      <section className="home-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="toon-text">ToonCore</span>
          </h1>
          <p className="hero-subtitle">
            Crafting playful and creative digital experiences with a cartoon twist!
          </p>
          <button className="hero-btn" onClick={handleScrollToTraits}>
            Explore My World 🌈
          </button>
        </div>

        <div className="hero-image" ref={heroImageRef}>
          <img src={heroImage} alt="ToonCore Character" />
        </div>

        <div className="floating-bubble bubble1" />
        <div className="floating-bubble bubble2" />
        <div className="floating-bubble bubble3" />
      </section>

      {/* === MUI + SWIPER TRAITS CAROUSEL === */}
      <section className="traits-scroll-wrapper" ref={traitsSectionRef}>
        <h2 className="section-title">Who Am I? 😎</h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={7}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000} // total animation time (ms)
          allowTouchMove={true}
          grabCursor={true}
          style={{ width: "90%", padding: "40px 0" }}
          breakpoints={{
            0: { slidesPerView: 1.4 },
            600: { slidesPerView: 2.2 },
            900: { slidesPerView: 3.4 },
            1200: { slidesPerView: 4.4 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                sx={{
                  width: 180,
                  height: 180,
                  borderRadius: "20px",
                  background: "linear-gradient(145deg, #ffffff, #ece4ff)",
                  boxShadow:
                    "0 6px 14px rgba(138, 111, 209, 0.2), inset 0 2px 6px rgba(255,255,255,0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8a6fd1",
                  fontWeight: 600,
                  textAlign: "center",
                  transition: "transform 0.4s ease, box-shadow 0.4s ease",
                  "&:hover": {
                    transform: "rotateY(10deg) rotateX(8deg) scale(1.05)",
                    boxShadow:
                      "0 10px 18px rgba(138, 111, 209, 0.3), inset 0 3px 8px rgba(255,255,255,0.8)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="p" sx={{ fontSize: "1.1rem" }}>
                    {card.text}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* === ABOUT PREVIEW === */}
      <section className="about-preview">
        <h2 className="section-title">A Glimpse Into My World 🌍</h2>

        <div className="about-block">
          <img src={studyImg} alt="Study Toon" />
          <div>
            <h3>🎓 Education</h3>
            <p>
              B.Tech in CSE @ KL University — exploring tech, innovation, and creativity every day.
            </p>
          </div>
        </div>

        <div className="about-block">
          <img src={hobbyImg} alt="Hobby Toon" />
          <div>
            <h3>🎨 Hobbies</h3>
            <p>
              Designing cool UIs, exploring web dev, watching anime, and sketching my next big idea!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
