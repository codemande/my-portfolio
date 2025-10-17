/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Store",
    description:
      "An ongoing full-stack store built with React, Express, and PostgreSQL. Includes authentication, payments, user and admin dashboard.",
    tech: ["React", "CSS", "Express", "PostgreSQL"],
    image: "/project1.png",
    github: "https://github.com/codemande/eagle-store.git",
    live: "https://eagle-store-bv6e.vercel.app/",
  },
  {
    id: 2,
    title: "QR Code Generator",
    description:
      "A QR Code Generator built with React and Express. It allows users to create QR codes for any link with adjustable size, margin, and error correction..",
    tech: ["React", "CSS", "Express"],
    image: "/project2.png",
    github: "https://github.com/codemande/test-qr-generator.git",
    live: "https://test-qr-generator.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio built to showcase my design and development projects with smooth animations and responsive design.",
    tech: ["React", "CSS", "Framer Motion"],
    image: "/projectprofile.png",
    github: "https://github.com/codemande/my-portfolio.git",
    live: "https://my-portfolio-six-phi-22.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects" data-aos="fade-up">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={20} />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;