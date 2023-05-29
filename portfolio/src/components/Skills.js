import React from "react";
import { skillsArr } from "../skillsData";

function Skills() {
  return (
    <div>
      {skillsArr.map((skill) => {
        const getSkills = (
          <>
            <ul>
              <li> {skill}</li>
            </ul>
          </>
        );
        return getSkills;
      })}
    </div>
  );
}

export default Skills;
