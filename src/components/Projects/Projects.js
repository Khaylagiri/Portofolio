import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import olshop from "../../Assets/Projects/onlineshop.png";
import financemanager from "../../Assets/Projects/finance.png";
import operationsystem from "../../Assets/Projects/SO.png";
import bobaxx from "../../Assets/Projects/bobaxx.png";
import steamcraft from "../../Assets/Projects/STEAMCRAFT.png";
import imageProcessing from "../../Assets/Projects/PCD.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Card 1 */}
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-white h-100">
              <Card.Img variant="top" src={bobaxx} />
              <Card.Body>
                <Card.Title>Bobaxx</Card.Title>
                <Card.Text>
                  Bobaxx is an admin/point-of-sale management application for a drinks (boba) business.
                  It allows users to manage the menu, admin accounts, and transaction records through the Set Menu, Set Admin, and Set Transaksi features.
                  The system helps organize daily operations by centralizing configuration and transaction management in one interface.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 2 */}
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-white h-100">
              <Card.Img variant="top" src={imageProcessing} />
              <Card.Body>
                <Card.Title>Digital Image Processing</Card.Title>
                <Card.Text>
                  This Digital Image Processing application lets users load an image and apply processing operations through a simple GUI.
                  It offers tools like histogram adjustment, geometric transforms, and spatial filtering.
                  The original and processed images are displayed side-by-side for quick comparison.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 3 */}
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-white h-100">
              <Card.Img variant="top" src={operationsystem} />
              <Card.Body>
                <Card.Title>Implementation of C programs on an Operating System using a Raspberry Pi</Card.Title>
                <Card.Text>
                  C system implementation on a Raspberry Pi means writing, compiling (GCC), and running C programs on Linux via the terminal.
                  Examples include a contact manager, temperature conversion, and factorial calculation.
                  It helps practice basic system programming concepts like I/O, data structures, and program execution.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 4 */}
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-white h-100">
              <Card.Img variant="top" src={olshop} />
              <Card.Body>
                <Card.Title>An online store built with Laravel</Card.Title>
                <Card.Text>
                  This Laravel-based online store provides a simple platform for browsing products and searching items quickly.
                  It includes user features such as login/register and a cart system to manage purchases.
                  The website helps streamline online shopping with a clean interface and organized product management.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 5 */}
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-white h-100">
              <Card.Img variant="top" src={steamcraft} />
              <Card.Body>
                <Card.Title>STEAM CRAFT</Card.Title>
                <Card.Text>
                  I joined a UI/UX competition and designed an educational app that blends culture with science, math, and physics.
                  I delivered the user flow, wireframes, and a high-fidelity interactive prototype.
                  The solution was refined through user research and usability testing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Card 6 */}
          <Col md={4} className="mb-4">
            <Card className="bg-dark text-white h-100">
              <Card.Img variant="top" src={financemanager} />
              <Card.Body>
                <Card.Title>Finance Manager</Card.Title>
                <Card.Text>
                  I built a Flutter Finance Manager app with responsive screens for both admin and users.
                  It integrates APIs for authentication and financial report data.
                  Firebase enables real-time push notifications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
