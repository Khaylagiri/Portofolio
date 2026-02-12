import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Khayla Giri Fitriani </span>
            from <span className="purple"> Bandung, West Java, Indonesia.</span>
            <br />
            I am currently a student at the National Institute of Technology Bandung, majoring in Informatics.
            <br />
            I am now in my sixth semester and actively learning and building projects in web and mobile development.
            <br />
            <br />
            Aside from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Active in student organizations
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
