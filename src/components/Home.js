import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-logo.png";
import {
    AiFillGithub,
    AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="home-body">
        <section>
        <Container fluid className="home-section" id="home">
            <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                    <h1 style={{ paddingBottom: 15 }} className="heading">
                        Welcome!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            😊
                        </span>
                    </h1>
                    <h1 className="heading-name">
                        My name is
                        <strong className="main-name"> Fadi Alrabadi </strong>
                    </h1>

                    <div style={{ padding: 50, textAlign: "left" }}>
                        <Typewriter
                            options={{
                                strings: [
                                    "New Grad",
                                    "Aspiring Developer",
                                    "Software Engineer",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                    </Col>

                    <Col md={5} style={{ paddingBottom: 20 }}>
                        <img
                            src={homeLogo}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "450px", paddingTop: "150px" }}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1  style={{ fontSize: "2.6em" }}>
                            <strong className="cyan"> ALLOW ME TO INTRODUCE MYSELF</strong>
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming ever since I was little. I used to make small programs to help me while I played games and I really enjoyed it.
                            <br />
                            <br />
                            I am proficient in languages such as... <i>C/C++, HTML/CSS/Javascript and Python</i> as well as technologies like <i>React.js, Next.js, Node.js and SQL.</i>
                            <br />
                            <br />
                                I've always been interested in 
                            <i> Web Development, Full Stack Development,</i> and <i>Cybersecurity.</i>
                            <br />
                            <br />
                            </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <ul className="home-about-social-links">
                        <li className="social-icons">
                            <a
                            href="https://github.com/falrabadi"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.linkedin.com/in/fadi-alrabadi/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            >
                            <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="mailto:falrabadi@hotmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            >
                            <AiFillMail />
                            </a>
                        </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            </Container>
        </section>
    </div>
  );
}

export default Home;