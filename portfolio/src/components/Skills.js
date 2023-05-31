import React from "react";
import { skillsArr } from "../skillsData";
import "../App.css";

function Skills() {
  return (
    <section>
      <h1 className="text-center">Tech Stack</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {skillsArr.map((skill) => {
          const getSkills = (
            <>
              <ul>
                <li className="skillsList" key={skill.name}>
                  {skill.icon} {skill.name}
                </li>
              </ul>
            </>
          );
          return getSkills;
        })}
      </div>
    </section>
  );
}

export default Skills;
