import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const projects = {
  app: [
    {
      title: "Maa Printing Factory App",
      description:
        "A Flutter-based private factory accounting and management application with Firebase Authentication, Firestore, role-based access, and production management modules.",
      tags: ["Flutter", "Firebase", "Firestore"],
      github: "https://github.com/Rakibul-rahi/maa_printing",
    },
    {
      title: "CholoGO",
      description:
        "A student-focused ride-sharing app for university students, built with Kotlin, Jetpack Compose, Firebase Authentication, and Firestore.",
      tags: ["Kotlin", "Compose", "Firebase"],
      github: "https://github.com/Rakibul-rahi/CholoGO",
    },
    {
      title: "Shanjeeban",
      description:
        "A Flutter blood donation app with user authentication, profile management, donor information, and Firebase integration.",
      tags: ["Flutter", "Firebase"],
      github: "https://github.com/Rakibul-rahi/Shanjeeban-2.0",
    },
  ],
  website: [
    {
      title: "CoyToy BD",
      description:
        "A responsive e-commerce toyshop website with product browsing, filtering, cart functionality, admin management, and WhatsApp checkout.",
      tags: ["React", "Firebase", "Cloudinary"],
      github: "https://github.com/Rakibul-rahi/CoyToyBD",
    },
    {
      title: "CareCritique",
      description:
        "A group project healthcare review platform where I worked on both frontend and backend features.",
      tags: ["Frontend", "Backend", "Group Project"],
      github: "https://github.com/srijon57/CareCritique",
    },
    {
      title: "GUNNERS",
      description:
        "A group project website where I contributed to frontend development and UI implementation.",
      tags: ["Frontend", "Group Project"],
      github: "https://github.com/kazi-kamruddin/GUNNERS",
    },
  ],
};

function Projects() {
  const [activeCategory, setActiveCategory] = useState("app");

  return (
    <section id="projects" className="projects section">
      <div className="section-header">
        <p className="small-text">Projects</p>
        <h2>Selected work and app projects.</h2>
      </div>

      <div className="projects-layout">
        <div className="project-tabs">
          <button
            className={activeCategory === "app" ? "active" : ""}
            onClick={() => setActiveCategory("app")}
          >
            App
            <span className="tab-count">{projects.app.length.toString().padStart(2, "0")}</span>
          </button>

          <button
            className={activeCategory === "website" ? "active" : ""}
            onClick={() => setActiveCategory("website")}
          >
            Website
            <span className="tab-count">{projects.website.length.toString().padStart(2, "0")}</span>
          </button>
        </div>

        <div className="project-list">
  {projects[activeCategory].map((project, index) => (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-row"
      key={project.title}
    >
      <span className="project-index">
        {(index + 1).toString().padStart(2, "0")}
      </span>

      <div className="project-content">
        <div className="project-row-top">
          <h3>{project.title}</h3>
          <FiArrowUpRight className="project-arrow" />
        </div>

        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={tag}>
              {tag}
              {i < project.tags.length - 1 && <i className="tag-dot" />}
            </span>
          ))}
        </div>
      </div>
    </a>
  ))}
</div>
      </div>
    </section>
  );
}

export default Projects;