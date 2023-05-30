//import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";

function Header() {
  return (
    <div>
      <header>
        <Navbar className="navbar">
          <h1>Portfolio</h1>
          <Container>
            <Nav className="ms-auto navlinks">
              <Nav.Link href="#about-me">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
export default Header;
