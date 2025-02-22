import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sreehari </span>
            from <span className="purple"> trivandrum, kerala,India.</span>
            <br />
            I am currently intern as a software developer at stackMod.
            <br />
           
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> exploring new coding technologies
            </li>
            <li className="about-activity">
              <ImPointRight />watching coding tutorials
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sreehari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
