/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about" data-aos="fade-up">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a <strong>Web Developer</strong> passionate about building
            user-friendly, scalable, and visually appealing web applications.
            My work focuses on turning ideas into clean, functional digital
            experiences using technologies like <strong>React</strong>,
            <strong> Express</strong>, and <strong>PostgreSQL</strong>.
          </p>

          <p>
            I love solving real-world problems through code and continuously
            improving my skills in both front-end and back-end development.
          </p>

          <div className="skills">
            <h3>Skills & Tools</h3>
            <ul>
              <li>React</li>
              <li>JavaScript (ES6+)</li>
              <li>CSS3 / HTML5</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>

        <div className="about-photo">
          <img src="/profile.png" alt="Jason Ugoh" />
        </div>
      </motion.div>
    </section>
  );
}

export default About;