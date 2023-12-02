import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecw from "../../Assets/Projects/ecw.png";
import lms from "../../Assets/Projects/lms.png";

import cms from "../../Assets/Projects/cms.png";


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
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lms}
              isBlog={false}
              title="Library Management System"
              description="A college library management is a project that manages and stores books information electronically according to students’ needs."
              ghLink="https://github.com/tusharbindal/Library-Management-System"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cms}
              isBlog={false}
              title="College Management System"
              description="Colleges managementSystems is a desktop Application. Manage the Student Data and Teacher Data or Manage the Exam schedules in online mode, and Manage the student fees online and online mode, or Add Notices any update and collect and store books according to students' needs manage all Data."
              ghLink="https://github.com/tusharbindal/Collage-Management-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecw}
              isBlog={false}
              title="Ecommerce Website"
              description="Doing a project titled “E-commerce Website” refer for Online Shopping using HTML, CSS, JAVASCRIPT, PHP, MYSQL."
              ghLink="https://github.com/tusharbindal/ecommerce-master"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
