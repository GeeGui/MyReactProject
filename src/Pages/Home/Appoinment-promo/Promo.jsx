import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import promoBanner from "../../../Images/doctor-nurse.png";
import "./Promo.css";

const Promo = () => {
  return (
    <section className="promo-wrapper">
      <Container>
        <Row className="align-items-center">
          {/* Left column with promo content */}
          <Col md={12} sm={12} lg={6}>
            <div className="promo-content text-white text-start">
              {/* Heading */}
              <h1 className="mt-sm-req">
                Request your appointment and start your smile makeover!
              </h1>
              {/* Link to the login page */}
              <Link to="/login">
                <button href=".#" className="theme-btn btn-fill mt-4">
                  Request Appointment
                </button>
              </Link>
            </div>
          </Col>
          {/* Right column with promo banner */}
          <Col md={12} sm={12} lg={6}>
            <div className="promo-banner">
              {/* Image */}
              <img src={promoBanner} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Promo;

// The provided code is a React component that represents a promotional section on a website. Here's a breakdown of the code:

// - The component imports necessary dependencies, including React Bootstrap components and the Link component from React Router.
// - The component defines the Promo functional component.
// - The component returns a section with the class name "promo-wrapper".
// - Inside the section, there's a Container component from React Bootstrap that provides a responsive container for the content.
// - Inside the Container, there's a Row component that represents a row of columns.
// - The first column, Col md={12} sm={12} lg={6}, contains the promo content.
//   - Inside the column, there's a promo-content div that wraps the content.
//     - The div includes a heading that displays the promotional message "Request your appointment and start your smile makeover!".
//     - There's also a Link component that links to the login page.
//       - Inside the Link component, there's a button with the class name "theme-btn btn-fill mt-4" that displays the text "Request Appointment".
// - The second column, Col md={12} sm={12} lg={6}, contains the promo banner.
//   - Inside the column, there's a promo-banner div that wraps the image.
//     - The div includes an img tag that displays the promo banner image.
// - Overall, this component represents a promotional section on a website. It displays a message encouraging users to request an appointment and start their smile makeover. It includes a button that links to the login page. The section also includes a banner image for visual appeal.
