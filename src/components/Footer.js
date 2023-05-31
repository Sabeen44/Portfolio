import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col>
          <h3>Contact</h3>
          <h4>Sabeen Chaudhry</h4>
          <h5>web Developer</h5>

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
    </Container>
  );
};

export default ContactInfo;
