import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/foto.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a strong passion for programming, especially in building practical and user-friendly applications.
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple"> Python, HTML, PHP, Laravel, Java and Flutter. </b>
              </i>
              <br />
              <br />
              My interests include developing both&nbsp;
              <i>
                <b className="purple">web and mobile applications</b>
              </i>
              , and I'm also passionate about&nbsp;
              <i>
                <b className="purple">UI/UX design</b>
              </i>
              &nbsp; to enhance user experience.
              <br />
              <br />
              Whenever possible, I love to create solutions using modern tools and frameworks like&nbsp;
              <b className="purple">Laravel</b> and
              <i>
                <b className="purple"> Flutter</b>
              </i>
              , turning ideas into real applications.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/khaylagiri"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khaylagiri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ftrnkhylaa_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
