import React from "react";
import { projects } from "../projectsData";
import Card from "react-bootstrap/Card";
//import "../App.css";



export default function Projects() {
  return (
    // <section className="projects text-gray-400 bg-gray-900 body-font">
    <>
      <div className="project-heading">
      <h1 >Featured Projects</h1>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="card-deck" key={project.title}>
            <Card
              className="project-card"
              // style={{
              //   width: "30rem",
              //   height: "30rem",
              //   border: "2px solid",
              //   borderRadius:"10px"
              // }}
            >
              {/* <Card.Img
                variant="top"
                src={project.image}
                style={{
                  borderBottom: "dotted",
                  width: "28.5rem",
                  height: "20rem",
                }}
              /> */}

              <Card.Body className="card-body">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link}>Visit Project</a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      </>
    // </section>
  );
}
