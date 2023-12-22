import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Appoinment.css";

const Appoinment = () => {
  return (
    <section className="appoinment-wrapper">
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="section-title">
              <h1 className="mt-5">Request Appointment</h1>
            </div>
            <div className="appoinment-form">
              <form action="#" className="row">
                {/* Input field for Name */}
                <Col md={6} lg={6}>
                  <input type="text" placeholder="Name" />
                </Col>
                {/* Input field for Email */}
                <Col md={6} lg={6}>
                  <input type="email" placeholder="Email" />
                </Col>
                {/* Input field for Phone */}
                <Col md={6} lg={6}>
                  <input type="phone" placeholder="Phone" />
                </Col>
                {/* Input field for Subject */}
                <Col md={6} lg={6}>
                  <input type="text" placeholder="Subject" />
                </Col>
                {/* Textarea field for Message */}
                <Col md={12} lg={12}>
                  <textarea
                    name="Message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </Col>
                {/* Link to the login page */}
                <Link to="/login">
                  <button className="theme-btn btn-fill form-btn mt-5">
                    Submit
                  </button>
                </Link>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Appoinment;

// The provided code is a React component that represents an appointment request form section on a website. Here's a breakdown of the code:

// - The component imports necessary dependencies, including React Bootstrap components and the Link component from React Router.
// - The component defines the Appoinment functional component.
// - The component returns a section with the class name "appoinment-wrapper".
// - Inside the section, there's a Container component from React Bootstrap that provides a responsive container for the content.
// - Inside the Container, there's a Row component that represents a row of columns.
// - The column, Col sm={12} md={12}, contains the content of the appointment form.
//   - Inside the column, there's a section-title div that displays the title "Request Appointment".
//   - There's also an appoinment-form div that wraps the form.
//     - The form has multiple input fields for Name, Email, Phone, and Subject.
//     - There's also a textarea field for the Message.
//     - The form also includes a Link component that links to the login page.
//       - Inside the Link component, there's a button with the class name "theme-btn btn-fill form-btn" that displays the text "Submit".
// - Overall, this component represents an appointment request form section on a website. It allows users to input their name, email, phone, subject, and message, and submit the form. The form includes a link to the login page.
