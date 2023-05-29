import React from "react";
import { projects } from "../projectsData";
import Card from "react-bootstrap/Card";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Hi, I am a beginner web developer. You can find my web-developement
          projects in this portfolio. I have expereice in HTML, CSS, JavaScript,
          React, Node.js, MongoDB. I enjoy learning new technologies and tools,
          and I’m looking for new challenges and opportunities to improve my
          skills and grow as a web developer. I’m passionate about creating
          beautiful and functional web solutions that meet the needs and
          expectations of the users. I’m also interested in web design, UX/UI
          design, SEO, and web accessibility. I am currently available for
          freelance work.
        </p>

        <div>
          {projects.map((project) => {
            const getProjects = (
              <>
                <ul className="card-deck">
                  <li className="projectList" key={project.title}>
                    <Card style={{ width: "30rem" }}>
                      <Card.Img variant="top" src="images/Note-Taking.png" />
                      <Card.ImgOverlay
                        style={{ border: "5px solid #D90368" }}
                      ></Card.ImgOverlay>
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </li>
                </ul>
              </>
            );
            return getProjects;
          })}
        </div>
      </div>
    </section>
  );
}
