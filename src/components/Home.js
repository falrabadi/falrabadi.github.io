import React from "react";
import Particle from "./Particle.js";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home-body">
        <section>
        <Container fluid className="home-section" id="home">
            <Particle />
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
        </section>
    </div>
  );
}

export default Home;