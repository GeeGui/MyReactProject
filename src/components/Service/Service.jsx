import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FakeService } from "../../FakeData/Treatment"; // Importing the data for FakeService
import Services from "../../Pages/About/Services/Services"; // Importing the Services component

const Service = () => {
  return (
    <section className="service-wrapper">
      {/* Container to hold the content */}
      <Container>
        <Row>
          {/* Title */}
          <Col sm={12}>
            <div className="section-title text-center">
              <h1>ACTIVITIES AND HONORS</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Mapping through the FakeService data and rendering Services component for each item */}
          {FakeService.map((treatment) => (
            <Services key={treatment.id} treatment={treatment} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;

// This code represents a React component called "Service" that displays a section on a webpage with a title "ACTIVITIES AND HONORS" and a list of services or treatments.

// Here's a breakdown of the code:

// - The component is defined as a functional component using the arrow function syntax.
// - It imports necessary dependencies from the React and React Bootstrap libraries.
// - It imports data for the services or treatments from a file called "FakeService" using the import statement.
// - The component returns a section element with the class name "service-wrapper" to hold the content.
// - Inside the section, a Container component from React Bootstrap is used to contain the content.
// - Inside the Container, there are two Row components. The first Row contains a Col component with a section title "ACTIVITIES AND HONORS".
// - The second Row uses the map function to iterate over the array of services or treatments from the FakeService data. For each item in the array, it renders the Services component, passing the item as a prop.
// - The Services component is responsible for rendering the individual service or treatment, using the data passed as props.

// Overall, this code sets up a section on a webpage to display a list of services or treatments, with each item rendered using the Services component.
