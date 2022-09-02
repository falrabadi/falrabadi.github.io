import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
                    </div>
                    </Col>

                    <Col md={5} style={{ paddingBottom: 20 }}>
                        
                    </Col>
                </Row>
            </Container>
        </Container>

        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I fell in love with programming and I have at least learnt
                            something, I think… 🤷‍♂️
                            <br />
                            <br />I am fluent in classics like
                            <i>
                                <b className="purple"> C++, Javascript and Python. </b>
                            </i>
                            <br />
                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                Deep Learning and Natural Launguage Processing.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                {" "}
                                Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i>
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