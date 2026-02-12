import React from "react";
import { Container } from "react-bootstrap";

import enclaveLogo from "../../Assets/logos/enclave.svg";
import labAssistantLogo from "../../Assets/logos/labasistant.png";
import kaiLogo from "../../Assets/logos/kai.png";


const experiences = [
  {
    company: "Enclave Collaboration Global",
    role: "Designer Developer, Fullstack Developer",
    period: "September 2024 - February 2025",
    description:
      "Developed web applications and designed UI/UX for various startup projects.",
    icon: enclaveLogo, 
  },
  {
    company: "Database Laboratory Assistant",
    role: "Teaching Assistant",
    period: "September 2024 - January 2025",
    description:
      "Assisted students in understanding database concepts and implementing Delphi7 & MySQL.",
    icon: labAssistantLogo,
  },
  {
    company: "PT KAI PERSERO",
    role: "Web Developer",
    period: "March 2025 - June 2025",
    description:
      "Built and maintained internal company websites for operational needs.",
    icon: kaiLogo,
  },
  {
    company: "Image Processing Laboratory Assistant",
    role: "Teaching Assistant",
    period: "March 2025 - Juli 2025",
    description:
      "Assisted students in understanding image processing concepts and implementing related projects.",
    icon: labAssistantLogo,
  },
];

function Experience() {
  return (
    <Container className="experience-timeline-container">
      <h1 className="experience-title">My Experience</h1>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={idx}>
            <div className="timeline-icon">
              <img 
                src={exp.icon} 
                alt={`${exp.company} logo`} 
                style={{ width: "28px", height: "28px", objectFit: "contain" }}
              />
            </div>
            <div className="timeline-content">
              <div className="timeline-header-clean">
                <h3 className="company">{exp.company}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <span className="role">{exp.role}</span>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </Container>
  );
}

export default Experience;
