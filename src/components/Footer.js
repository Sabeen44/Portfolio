import React from "react";
import {  Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="custom-footer">
      <Row>
        <Col>
          <h3>Ways to connect</h3>
         

          <FaEnvelope />
          <a className="social-link" href="mailto:ch.sabeen@gmail.com">
            ch.sabeen@gmail.com
          </a>

          <FaGithub />
          <a className="social-link" href="https://github.com/sabeen44">
            Sabeen@Github
          </a>

          <FaLinkedin />
          <a
            className="social-link"
            href="https://linkedin.com/in/sabeen-chaudhry"
          >
            Sabeen@LinkedIn
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
