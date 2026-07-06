const skills = [
  "Flutter",
  "Dart",
  "Android Development",
  "Kotlin",
  "Jetpack Compose",
  "Firebase",
  "Firebase Authentication",
  "Cloud Firestore",
  "Firebase Storage",
  "Firebase Cloud Messaging",
  "REST API",
  "JSON",
  "Provider",
  "ViewModel",
  "StateFlow",
  "Repository Pattern",
  "Role-Based Access Control",
  "React.js",
  "JavaScript",
  "HTML",
  "CSS",
  "Responsive Web Design",
  "Java",
  "Python",
  "C",
  "C++",
  "SQL",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Android Studio",
  "VS Code",
  "Netlify",
  "Cloudinary",
  "Figma",
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-header">
        <p className="small-text">Skills</p>
        <h2>Technologies I work with.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;