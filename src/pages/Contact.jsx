import React, { useState } from "react";
import "../styles/Contact.css";
import profilePic from "/gifs/contact.gif";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formUrl = "https://formspree.io/f/mldoagep"; // Replace with your Formspree ID

    const response = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast.success("🎉 Message sent successfully!", {
        className: "toon-toast-success",
        icon: "🚀",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        consent: false,
      });
    } else {
      toast.error("😢 Oops! Something went wrong.", {
        className: "toon-toast-error",
        icon: "💥",
      });
    }
  };

  return (
    <section className="contact-container">
      {/* === HERO === */}
      <div className="contact-hero">
        <div className="contact-left">
          <img src={profilePic} alt="Phanindra Reddy" className="contact-img" />
        </div>

        <div className="contact-right">
          <h1 className="contact-title">
            Contact <span className="toon-text">Me</span>
          </h1>
          <p className="contact-intro">
            Let’s connect and bring your ideas to life — the ToonCore way! ✨
          </p>

          <div className="contact-links">
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

      {/* === CONTACT FORM === */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Send Me a Message 💬</h2>

        <div className="form-grid">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone (Optional)"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company (Optional)"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Project Type / Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-consent">
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              required
            />{" "}
            I agree to be contacted regarding my inquiry.
          </label>
        </div>

        <button type="submit" className="contact-btn">
          🚀 Send Message
        </button>
      </form>

      {/* === TOAST CONTAINER === */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        transition={Slide}
        newestOnTop={false}
        closeOnClick
        pauseOnHover={false}
        draggable={false}
      />

      {/* === FLOATING BUBBLES === */}
      <div className="bubble contact-bubble1"></div>
      <div className="bubble contact-bubble2"></div>
      <div className="bubble contact-bubble3"></div>
    </section>
  );
}
