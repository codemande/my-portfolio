/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Github, Linkedin, } from "lucide-react";
import { RiTwitterXLine } from "react-icons/ri";
import "./Contact.css";

function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_7i70qbd", // replace with your EmailJS service ID
        "template_pt85wgk", // replace with your template ID
        formRef.current,
        "KfM5YRwLFfrZ4Oxbw" // replace with your public key
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact" data-aos="fade-up">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <p>
          Have a question, a project idea, or want to collaborate? Send me a
          message — I’ll reply as soon as possible.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sent && <span className="success-text">Message sent successfully!</span>}
        </form>

        <div className="contact-icons">
          <a
            href="mailto:jasontheugoh@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={20} />
          </a>
          <a href="https://github.com/codemande" target="_blank" rel="noreferrer">
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/jasontheugoh"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/jasontheugoh"
            target="_blank"
            rel="noreferrer"
          >
            {/* <Twitter size={20} color="#000" /> */}
            <RiTwitterXLine size={20} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;