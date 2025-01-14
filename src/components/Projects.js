import React from "react";
import { projects } from "../projectsData";
import Card from "react-bootstrap/Card";
import { Goback } from "./Goback";
//import "../App.css";



export default function Projects() {
  return (
 
    <>
      <div className="project-heading">
      <h1 >Featured Projects</h1>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="card-deck" key={project.title}>
            <Card
              className="project-card"
              >
              
              <Card.Body className="card-body">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <a href={project.link}>Visit Project</a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <Goback/>
      </>
    
  );
}

