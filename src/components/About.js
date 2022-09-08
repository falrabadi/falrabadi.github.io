import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/card";
import { AiFillCaretRight } from "react-icons/ai";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiMysql,
  SiGithub,
} from "react-icons/si";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
                md={7}
                style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
                }}
            >
            <h1  style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="cyan">GETTING TO KNOW ME</strong>
            </h1>
            </Col>
            <Card className="quote-card-view">
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hello, My name is Fadi Alrabadi, located in Westerville, OH.
                        <br />I graduated from Ohio University in April of 2022 with a Bachelors of Science in Computer Science.
                        <br />
                        <br />
                        Apart from coding, I like to...
                    </p>
                    <ul>
                        <li className="about-activity">
                        <AiFillCaretRight /> Play Video Games
                        </li>
                        <li className="about-activity">
                            <AiFillCaretRight /> Watch Sports
                        </li>
                        <li className="about-activity">
                            <AiFillCaretRight /> Binge Watch TV Shows
                        </li>
                    </ul>
                    </blockquote>
                </Card.Body>
            </Card>
            <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
            >
            </Col>
        </Row>
        <h1 className="project-heading">
            <strong className="cyan">Professional Skillset</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiC />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCplusplus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;