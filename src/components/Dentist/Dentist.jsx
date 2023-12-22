import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FakeDoctors } from "../../FakeData/Dentist"; // Importing the data for FakeDoctors
import Doctors from "../../Pages/Home/Doctors/Doctors"; // Importing the Doctors component

const Dentist = () => {
  return (
    <section className="doctor-wrapper">
      <Container>
        <Row>
          <Col sm={12}>
            <div className="section-title">
              {/* Title for the section */}
              <h1 className="mb-5 mb-sm-dent">Our doctors</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {/* Mapping through the FakeDoctors data and rendering Doctors component for each item */}
          {FakeDoctors.map((dentist) => (
            <Doctors key={dentist.id} dentist={dentist} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Dentist;

// This code is a React component called "Dentist" that renders a section displaying a list of doctors. Here's a breakdown of the code:

// 1. The code imports the necessary dependencies from React and react-bootstrap.
// 2. It also imports the data for the doctors from the "FakeData/Dentist" file and the "Doctors" component from the "Pages/Home/Doctors" directory.
// 3. The "Dentist" component is defined as a functional component.
// 4. Inside the component, a section with the class "doctor-wrapper" is created.
// 5. Within the section, a container is added to hold the content.
// 6. Inside the container, there is a row with a single column that contains a section title.
// 7. The section title is a heading with the text "Our doctors".
// 8. Below the section title, another row is created.
// 9. The "FakeDoctors" data is mapped through, and for each doctor, the "Doctors" component is rendered with the doctor's information passed as props.
// 10. The "Doctors" component is given a unique key using the doctor's ID.
// 11. Finally, the "Dentist" component is exported as the default export.

// This code sets up the structure and layout for displaying a list of doctors in a section. The data for the doctors is imported from a separate file, and the "Doctors" component is responsible for rendering each individual doctor's information.
