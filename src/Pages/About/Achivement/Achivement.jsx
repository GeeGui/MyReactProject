import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Achivement.css";

const Achivement = () => {
  return (
    <section className="achivement-wrap text-white">
      <Container>
        <Row className="align-items-center">
          {/* Left column */}
          <Col md={6} lg={6} sm={12}>
            <div className="section-title">
              {/* Title */}
              <h1>My Goals</h1>
            </div>
            <div className="achivement-txt">
              <ul className="w-75">
                {/* List of goals */}
                <li>
                  Become an expert in Programing, and become a web and software
                  developer.
                </li>
                <li>
                  Become an Informative Nurse. Be able to use data analytics and
                  information technologies to improve healthcare. Gather data,
                  use information, and build knowledge. Evaluate and develop
                  informatics programs, coordinate multidisciplinary and
                  interdisciplinary projects, optimize workplace communications,
                  and maintain accurate patient data.
                </li>
              </ul>
            </div>
          </Col>
          {/* Right column */}
          <Col md={6} lg={6} sm={12}>
            <Row className="achivement-funfact text-white">
              {/* Fun fact cards */}
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>22 +</span>
                  <p>Patients</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>75 +</span>
                  <p>Doctors</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>25 +</span>
                  <p>Awards</p>
                </div>
              </Col>
              <Col sm={6} className="text-center">
                <div className="single-funfact">
                  <span>28 +</span>
                  <p>Branch</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Achivement;

// This code is a React component called "Achievement" that represents a section displaying goals and fun facts. It is used to showcase personal goals and achievements in a visually appealing manner.

// Here's a breakdown of the code:

// - The component imports necessary dependencies: React, Col, Container, Row from react-bootstrap, and the CSS file for styling.
// - The component is defined as a function called "Achievement" without any parameters.
// - Inside the function, the component returns JSX code that represents the structure and content of the achievement section.
// - The JSX code uses self-closing tags and curly braces to include dynamic values and class names.
// - The JSX code includes a <section> element with the className "achievement-wrap text-white" for styling purposes.
// - Inside the section, there is a <Container> component from react-bootstrap to create a responsive container for the content.
// - Inside the container, there is a <Row> component with the className "align-items-center" to create a row and align its items vertically.
// - The row is divided into two columns: a left column and a right column.
// - The left column, represented by the <Col> component, takes up 6 columns on medium and large screens and 12 columns on small screens.
// - Inside the left column, there is a <div> element with the className "section-title" that displays the title "My Goals".
// - Below the title, there is a <div> element with the className "achievement-txt" that contains an unordered list (<ul>) with a className "w-75".
// - Inside the list, there are two list items (<li>) that represent the goals. The goals are hardcoded in the code but can be customized.
// - The right column, also represented by the <Col> component, takes up 6 columns on medium and large screens and 12 columns on small screens.
// - Inside the right column, there is a <Row> component with the className "achievement-funfact text-white" to create a row for the fun fact cards.
// - The row is divided into four columns, each represented by the <Col> component, with a className "text-center".
// - Inside each column, there is a <div> element with the className "single-funfact" that displays a number and a corresponding label for each fun fact.
// - The fun facts, such as "Patients", "Doctors", "Awards", and "Branch", are hardcoded in the code but can be customized.
// - The component is exported as the default export.

// This component can be used in a React application to render an achievement section, showcasing goals and fun facts. The component provides flexibility to customize the goals and fun facts to fit the specific requirements of the client.
