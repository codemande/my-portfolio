/* eslint-disable no-unused-vars */
import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} JasontheUgoh — All Rights Reserved.</p>

        <div className="footer-icons">
          <a
            href="https://github.com/codemande"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/jasontheugoh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:jasontheugoh@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://x.com/jasontheugoh"
            aria-label="X"
          >
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;