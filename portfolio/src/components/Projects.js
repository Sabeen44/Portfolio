import React from "react";
import { projects } from "../projectsData";
import Card from "react-bootstrap/Card";
import "../App.css";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <h1>Featured Projects</h1>
      <div className="projects container">
        {projects.map((project) => (
          <div className="card-deck" key={project.title}>
            <Card
              className="project-card"
              style={{
                width: "30rem",
                height: "30rem",
                border: "10px solid",
              }}
            >
              <Card.Img
                variant="top"
                src={project.image}
                style={{
                  borderbottom: "inset",
                  width: "29rem",
                  height: "20rem",
                }}
              />

              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link}>Visit Project</a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
