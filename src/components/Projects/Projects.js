import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat  from "../../Assets/Projects/chatroom.jpg";
import todo from "../../Assets/Projects/todo_dev.png";
import task from "../../Assets/Projects/taskamanager.jpg";
import portfolio from "../../Assets/Projects/portfolio.jpg";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chat}
              isBlog={false}
              title="ChatRoom"
              description="Developed a personal chatroom and workspace using EJS, Express.js, and MongoDB. The platform enables real-time messaging and user authentication, providing a simple and interactive space for communication. Designed a clean and user-friendly interface with seamless message handling."
              ghLink="https://github.com/sreehari-dev-codes?tab=repositoriesy"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TOdO"
              description="Developed a full-stack Todo application using React for the frontend and Node.js with MongoDB for the backend. The app features a toggleable dark/light theme and organizes tasks into Home, Pending, and Completed sections. Users can mark tasks as complete, adding a strikethrough effect, and perform CRUD operations for task management."
              ghLink="https://github.com/sreehari-dev-codes?tab=repositories"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="TASK MANAGER APP"
              description="Built a Task Manager application using React (with Sass for styling) on the frontend and Node.js with MongoDB on the backend. The app includes user authentication with JWT for secure access. It features separate dashboards for users and admins—admins have full CRUD operations on users and tasks, while users can view assigned tasks and update their status. The system is optimized with Redux for state management and utilizes custom hooks for reusable logic, ensuring efficient task handling with role-based access control and a clean, modern UI."
              ghLink="https://github.com/sreehari-dev-codes?tab=repositories"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="PORTFOLIO"
              description="Built a personal portfolio website using React and Bootstrap to showcase my skills, projects, and experience as a MERN Stack Developer. Designed a modern and responsive UI with a dark theme, interactive navigation, and smooth animations. The portfolio includes sections for my resume, projects, blogs, and social links, ensuring easy accessibility for potential clients and employers."
              ghLink="https://github.com/sreehari-dev-codes?tab=repositories"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
