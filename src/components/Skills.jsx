import {
  SiFlutter, SiDart, SiKotlin, SiFirebase, SiReact, SiJavascript,
  SiHtml5, SiCss, SiPython, SiCplusplus, SiMysql, SiMongodb,
  SiGit, SiGithub, SiAndroidstudio, SiFigma, SiNetlify, SiCloudinary,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaJava, FaAndroid } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const skillGroups = [
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Android Development", icon: <FaAndroid /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Jetpack Compose", icon: <FaAndroid /> },
    ],
  },
  {
    category: "Firebase & Backend",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Authentication", icon: <SiFirebase /> },
      { name: "Cloud Firestore", icon: <SiFirebase /> },
      { name: "Firebase Storage", icon: <SiFirebase /> },
      { name: "Cloud Messaging", icon: <SiFirebase /> },
      { name: "REST API", icon: <TbApi /> },
      { name: "JSON", icon: <SiJsonwebtokens /> },
    ],
  },
  {
    category: "Architecture & State",
    skills: [
      { name: "Provider", icon: <SiFlutter /> },
      { name: "ViewModel", icon: <SiKotlin /> },
      { name: "StateFlow", icon: <SiKotlin /> },
      { name: "Repository Pattern", icon: <VscCode /> },
      { name: "Role-Based Access Control", icon: <VscCode /> },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss /> },
      { name: "Responsive Design", icon: <SiCss /> },
    ],
  },
  {
    category: "Languages & Databases",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "C", icon: <SiCplusplus /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "SQL", icon: <SiMysql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Android Studio", icon: <SiAndroidstudio /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
      { name: "Figma", icon: <SiFigma /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-header">
        <p className="small-text">Skills</p>
        <h2>Technologies I work with.</h2>
      </div>

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <h4 className="skill-group-title">{group.category}</h4>
            <div className="skills-grid">
              {group.skills.map((skill) => (
                <span key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;