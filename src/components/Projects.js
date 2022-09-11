import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import bobcatstudylogo from "../Assets/bobcatstudylogo.png";
import PFVlogo from "../Assets/PFVlogo.png";

function Projects() {
    return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            <strong className="cyan">My Recent Works </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
                <ProjectCard
                    imgPath={bobcatstudylogo}
                    title="Bobcat Study"
                    description="Capstone project used by Ohio University students to find available study rooms across campus. Infared sensors placed in each study room allows students to see whether a study room is available or occupied/closed before they step outside their dorm."
                    ghLink="https://github.com/falrabadi/bobcatstudy"
                />
            </Col>
  
            <Col md={4} className="project-card">
            <ProjectCard
                    imgPath={PFVlogo}
                    title="Path finding Visualization"
                    description="Maze Generator and solver that compares the different algorithms used and shows the difference in speed and approach with each algorithm."
                    ghLink="https://github.com/falrabadi/pathfindingvisualization"
                />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  
  export default Projects;