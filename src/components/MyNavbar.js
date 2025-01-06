import { useState } from "react";
import { Link } from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import "../App.css";
//import styled from 'styled-components'

//const StyledNavbar = styled(Navbar)` background-color: #4CAF50;padding: 15px; `



export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
   
  return ( 
  <Navbar className="navbar" expand="lg" expanded={expanded}style={{padding:0}} >
     
       <div className="custom-nav d-flex justify-content-between w-100">
       <Navbar.Brand className="nav-brand" as={Link} to="/">Portfolio</Navbar.Brand>
        <Nav className="nav-links">
           <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
             <Nav.Link as={Link} to="/resume" onClick={() => setExpanded(false)}>Resume</Nav.Link> 
             </Nav> 
             </div> 
            
              </Navbar>)
}


