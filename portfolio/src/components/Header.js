//import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div class="navbar">
      <header>
        <Navbar>
          <Container>
            <h1>Yolo</h1>
            <Navbar.Brand href="#home">Sabeen</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">About Me</Nav.Link>
              <Nav.Link href="#features">Skills</Nav.Link>
              <Nav.Link href="#pricing">Projects</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
export default Header;
