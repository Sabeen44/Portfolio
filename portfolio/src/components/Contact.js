import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <footer>
      <div class="contact">
        <h2 className="mb-3">Contact Me</h2>
        <div className="card p-4">
          <div className="card-body">
            <h4 className="card-title">Sabeen Chaudhry</h4>
            <p className="card-text">Web Developer and Blogger</p>
            <div className="d-flex align-items-center">
              <FaEnvelope className="me-2" />
              <a href="mailto:ch.sabeen@gmail.com">ch.sabeen@gmail.com</a>
            </div>
            <div className="d-flex align-items-center">
              <FaGithub className="me-2" />
              <a href="https://github.com/sabeen44">Sabeen</a>
            </div>

            <div className="d-flex align-items-center">
              <FaLinkedin className="me-2" />
              <a href="https://linkedin.com/in/sabeen">Sabeen</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactInfo;
