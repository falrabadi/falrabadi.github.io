import React from "react";
import Particle from "./Particle.js";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <div className="about-body">
            <section>
                <Container fluid className="about-section" id="about">
                    <Particle />
                    Hello
                </Container>
            </section>
        </div>
    )
}

export default About;