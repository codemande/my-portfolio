/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero" data-aos="fade-up">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">Hi, I’m Jason Ugoh</h1>
        <p className="hero-subtitle">
          A passionate Web Developer creating clean, functional, and visually
          appealing websites that deliver great user experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
