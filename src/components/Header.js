//import { ArrowRightIcon } from "@heroicons/react/solid";
//import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Link } from "react-router-dom";
//import Scrollspy from "react-scrollspy";

function Header() {
  const [expand, updateExpanded] = useState(false);
  //const [navColour, updateNavbar] = useState(false);

  return (
    <div>
      <header>
        <Navbar className="navbar" expanded={expand}>
          <Navbar.Toggle
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          ></Navbar.Toggle>

          <h1>Portfolio</h1>
          <Container>
            <Nav className="ms-auto navlinks">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/skills"
                  onClick={() => updateExpanded(false)}
                >
                  Skills
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/projects"
                  onClick={() => updateExpanded(false)}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/footer"
                  onClick={() => updateExpanded(false)}
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}
export default Header;
