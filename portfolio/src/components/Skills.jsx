// components/Skills.jsx
import React from "react";

const skills = [
  { name: "HTML", level: 45 },
  { name: "CSS", level: 35 },
  { name: "Bootstrap", level: 25 },
  { name: "JavaScript", level: 40 },
  { name: "SQL", level: 35 },
  { name: "Java", level: 35 },
  { name: "REACT", level: 45 },
  { name: "Node.js", level: 35 },
  { name: "PHP", level: 20 },
  

];

const Skills = () => {
  return (
    <div className="skills-container" style={{ maxWidth: "600px", margin: "0 auto" }}>
      {skills.map((skill, index) => (
        <div key={index} className="skill-item" style={{ marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>{skill.name}</h3>
          <div
            className="progress"
            style={{
              height: "5px",
              backgroundColor: "#e0e0e0",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${skill.level}%`,
                backgroundColor: "#35dc72ff", 
                height: "100%",
              }}
              aria-valuenow={skill.level}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
