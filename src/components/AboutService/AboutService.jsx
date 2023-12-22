import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AboutFocus } from "../../FakeData/AboutFocus"; // Importing the data for AboutFocus
import Services from "../../Pages/About/Services/Services"; // Importing the Services component

const Service = () => {
  return (
    <section className="service-wrapper">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title text-center">
              {/* Title for the section */}
              <h6>What I work with</h6>
              <h1>My Skills</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Mapping through the AboutFocus data and rendering Services component for each item */}
          {AboutFocus.map((treatment) => (
            <Services key={treatment.id} treatment={treatment} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;

// This code is a React component called "Service" that represents a section of a webpage. It displays a section titled "My Skills" with a subtitle "What I work with". Inside the section, it renders a list of services using the "Services" component.
// The component imports data from the "AboutFocus" file, which contains information about different services. It then maps through this data and renders a "Services" component for each item in the data array. Each "Services" component displays the title, description, and image of a service.
// The overall structure of the component is divided into a "Container" component from React Bootstrap, which provides a responsive grid system. Inside the container, there are rows and columns to organize the content.
// The "section-title" div displays the title and subtitle of the section. The "Row" component is used to create a row of services, and the "Col" component is used to define the layout of each service within the row.
// Overall, this component is responsible for rendering a section that showcases different services or skills, using data from the "AboutFocus" file.
