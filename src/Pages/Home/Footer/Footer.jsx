import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <Container>
        <Row className="text-white">
          {/* Column for Practices */}
          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Practices</h2>
              </div>
              <div className="widget-content">
                {/* Links related to Practices */}
                <NavLink className="footer-link">For Patients</NavLink>
                <NavLink className="footer-link">FAQ's</NavLink>
                <NavLink className="footer-link">About</NavLink>
                <NavLink className="footer-link">Contact Me</NavLink>
                <NavLink className="footer-link">Blog</NavLink>
              </div>
            </div>
          </Col>
          {/* Column for Resources */}
          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Resources</h2>
              </div>
              <div className="widget-content">
                {/* Links related to Resources */}
                <NavLink className="footer-link">New Patients</NavLink>
                <NavLink className="footer-link">Meet the team</NavLink>
                <NavLink className="footer-link">Patient Form</NavLink>
                <NavLink className="footer-link">Insurance</NavLink>
                {/* <NavLink className="footer-link">Account Login</NavLink> */}
              </div>
            </div>
          </Col>
          {/* Column for Address */}
          <Col xs={6} md={3}>
            <div className="single-footer-widget">
              <div className="widget-title">
                <h2>Address</h2>
              </div>
              <div className="widget-content">
                {/* Address information */}
                <NavLink className="footer-link">1355 Eden Ave Apt B12</NavLink>
                <NavLink className="footer-link">San Jose, CA 95117.</NavLink>
                <NavLink className="footer-link">
                  Phone:+1 (970) 513-000
                </NavLink>
                <NavLink className="footer-link">Email:john@yahoo.fr</NavLink>
                <NavLink className="footer-link">Fax:+1 675 5867 340</NavLink>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Footer copy right */}
      <div className="footer-copy-right text-center text-white">
        <p className="mb-0">
          &copy; 2023 - <span className="developer">Guillain Nguilu</span> | All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

// The provided code is a React component that represents a footer section in a website. Here's a breakdown of the code:

// - The component imports necessary dependencies, including React Bootstrap components and a CSS file for styling.
// - The component defines the Footer functional component.
// - Inside the component, there's a return statement that renders the JSX representing the footer section.
// - The footer is wrapped in a div with the class name "footer-bg".
// - Inside the div, there's a Container component from React Bootstrap, which provides a responsive container for the footer content.
// - Inside the Container component, there's a Row component from React Bootstrap, which represents a row in a grid layout. The row contains multiple columns.
// - There are three columns in the row:
//   - The first column (md={3}) represents "Practices" and contains links related to practices, such as "For Patients", "FAQ's", etc.
//   - The second column (md={3}) represents "Resources" and contains links related to resources, such as "New Patients", "Meet the team", etc.
//   - The third column (md={3}) represents "Address" and contains address information, including the street address, city, phone number, email, and fax.
// - After the Row component, there's a div with the class name "footer-copy-right text-center text-white" that represents the footer copy right section. It displays the copyright year and the name of the developer.
// - Overall, this component represents a footer section with multiple columns containing links and address information. The footer is styled using the provided CSS file.
