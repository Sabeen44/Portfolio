//import { ArrowRightIcon } from "@heroicons/react/solid";
//import React from "react";
import { useState } from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
//import Nav from "react-bootstrap";
//import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { Link } from "react-router-dom";
//import Scrollspy from "react-scrollspy";

function Header() {
  const [expanded, setExpanded] = useState(false);
  //const [navColour, updateNavbar] = useState(false);

  return (
  //   <div>
  //     {/* <header> */}
  //       <Navbar className="navbar" 
  //        expanded={expand}
  //        >
  //          <Navbar.Toggle
  //           onClick={() => {
  //             updateExpanded(expand ? false : "expanded");
  //           }}
  //         ></Navbar.Toggle> 

  //         <h1>Portfolio</h1>
  //         <Container>
  //           <Nav className="ms-auto navlinks">
  //             <Nav.Item>
  //               <Nav.Link
  //                 as={Link}
  //                 to="/"
  //                  onClick={() => updateExpanded(false)}
  //                >
  //                 Home
  //               </Nav.Link>
  //             </Nav.Item>
  //             <Nav.Item>
  //               <Nav.Link
  //                 as={Link}
  //                 to="/skills"
  //                  onClick={() => updateExpanded(false)}
  //               >
  //                 Skills
  //               </Nav.Link>
  //             </Nav.Item>
  //             <Nav.Item>
  //               <Nav.Link
  //                 as={Link}
  //                 to="/projects"
  //                 onClick={() => updateExpanded(false)}
  //               >
  //                 Projects
  //               </Nav.Link>
  //             </Nav.Item>
  //             <Nav.Item>
  //               <Nav.Link
  //                 as={Link}
  //                 to="/resume"
  //                 onClick={() => updateExpanded(false)}
  //               >
  //                 Resume
  //               </Nav.Link>
  //             </Nav.Item>
  //             <Nav.Item>
  //               <Nav.Link
  //                 as={Link}
  //                 to="/footer"
  //                 onClick={() => updateExpanded(false)}
  //               >
  //                 Contact
  //               </Nav.Link>
  //             </Nav.Item>
  //           </Nav>
  //         </Container>
  //       </Navbar>
  //     {/* </header> */}
  //   </div>
  // );

    <Navbar expand="lg" expanded={expanded} bg="light" variant="light"> <Container> <Navbar.Brand as={Link} to="/">Brand</Navbar.Brand> <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} /> <Navbar.Collapse> <Nav className="ms-auto"> <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link> <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>About</Nav.Link> <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>Contact</Nav.Link> </Nav> </Navbar.Collapse> </Container> </Navbar>)
};
export default Header;
