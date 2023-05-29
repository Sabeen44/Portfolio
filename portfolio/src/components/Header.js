//import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <header className="navbar">
        <Navbar>
          <Container>
            <Nav className="ms-auto">
              <Nav.Link href="#about-me">About Me</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
export default Header;
