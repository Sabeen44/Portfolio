import React from "react";
import { skillsArr } from "../skillsData";
import "../skills.css";




const Skills = () => { 
  return (
  <>
  {/* { <section>
       <h1 className="text-center">Tech Stack</h1> 
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {skillsArr.map((skill) => (
          // const getSkills = (
            
              <ul key={skill.name}>
                <li className="skillsList" >
                  {skill.icon}
                </li>
              </ul>
          ))
          
          //  return getSkills;
        }
      </div>
    </section>  */}
  <div className="skills-heading"> 
     <h1>Tech Stack</h1>
     <div className="icon-container">
  {skillsArr.map((skill) => (
  <ul className="icon-list" key={skill.name}>
                <li className="icons" >
                  {skill.icon}
                </li>
              </ul>))}
              </div>
              </div> 

  <div className="skills"> 
    
    <p>Below are some of the key skills and technologies I have mastered during my web development journey.</p> <h2>Front-End Development</h2> 
    <ul> 
      <li><strong>HTML</strong>: Semantic markup, accessibility, and SEO.</li>
       <li><strong>CSS</strong>: Responsive design, Flexbox, Grid, and frameworks like Bootstrap.</li> <li><strong>JavaScript</strong>: ES6+, DOM manipulation, and event handling.</li> <li><strong>React</strong>: Component-based architecture, hooks, and state management.</li> <li><strong>Vue.js</strong>: Directives, reactive data binding, and component lifecycle.</li> 
       </ul> 
       <h2>Back-End Development</h2> 
       <ul> <li><strong>Node.js</strong>: Server-side scripting, RESTful APIs, and middleware.</li> <li><strong>Express.js</strong>: Routing, middleware integration, and API development.</li> <li><strong>Databases</strong>: MongoDB, MySQL, and database schema design.</li> <li><strong>Authentication</strong>: JWT, OAuth, and session management.</li> </ul> <h2>DevOps and Tools</h2> <ul> <li><strong>Git & GitHub</strong>: Version control, branching strategies, and collaboration.</li> <li><strong>Docker</strong>: Containerization and orchestration.</li> <li><strong>CI/CD</strong>: Jenkins, GitHub Actions, and automated deployment pipelines.</li> <li><strong>Testing</strong>: Unit testing with Jest, end-to-end testing with Cypress.</li> </ul> <h2>Additional Skills</h2> <ul> <li><strong>UI/UX Design</strong>: Wireframing, prototyping, and user-centered design.</li> <li><strong>Agile Methodologies</strong>: Scrum, Kanban, and agile project management.</li> <li><strong>Communication</strong>: Strong verbal and written communication skills.</li> 
  </ul> 
  </div>
  </> 
);
  
  
  
};
export default Skills;
