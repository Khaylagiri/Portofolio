import React from "react";
import { Card } from "react-bootstrap";

function ExperienceCard({ title, role, details }) {
  return (
    <Card className="bg-dark text-white mb-4">
      <Card.Body>
        <Card.Title className="purple">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
        <ul style={{ marginTop: "10px" }}>
          {details.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default ExperienceCard;
