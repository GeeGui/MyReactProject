import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contactUs-wrapper">
      <Container>
        <Row>
          {/* Section title */}
          <div className="section-title">
            <h1 className="mt-5">Contact Me</h1>
          </div>
          {/* Column for address */}
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon1">
              <div className="c-icon">
                {/* Icon for address */}
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div className="c-info text-start">
                <h4>Address</h4>
                <p>55 West, 33rd Street</p>
                <p>5th Floor, New York</p>
              </div>
            </div>
          </Col>
          {/* Column for email */}
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon2">
              <div className="c-icon">
                {/* Icon for email */}
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="c-info text-start">
                <h4>Email</h4>
                <p>info@dentzone.com</p>
                <p>email@gmail.com</p>
              </div>
            </div>
          </Col>
          {/* Column for phone */}
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon3">
              <div className="c-icon">
                {/* Icon for phone */}
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="c-info text-start">
                <h4>Phone</h4>
                <p>(888) 4421-1238-32</p>
                <p>(888) 838-1238-645</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;

// The provided code is a React component that represents a contact section on a website. Here's a breakdown of the code:

// - The component imports necessary dependencies, including FontAwesome icons, React Bootstrap components, and a CSS file for styling.
// - The component defines the ContactUs functional component.
// - The component returns a section with the class name "contactUs-wrapper".
// - Inside the section, there's a Container component from React Bootstrap that provides a responsive container for the content.
// - Inside the Container, there's a Row component that represents a row of columns.
// - The first element in the Row is a div with the class name "section-title" that contains a heading with the text "Contact Me".
// - Following the section title, there are three columns representing different contact information: address, email, and phone.
// - Each column, defined by Col md={6} lg={6} xl={4}, contains a single-contact div with a specific icon class (icon1, icon2, icon3).
//   - Inside the single-contact div, there's a c-icon div that contains a FontAwesomeIcon component.
//     - The FontAwesomeIcon component renders the respective icon (faHome, faEnvelope, faPhone) from the "@fortawesome/free-solid-svg-icons" library.
//   - There's also a c-info div that contains the contact information.
//     - Inside the c-info div, there's an h4 heading with the title (Address, Email, Phone) and two paragraphs with the corresponding contact details.
// - Overall, this component represents a contact section on a website. It displays contact information such as address, email, and phone number. Each piece of information is accompanied by a relevant icon for easy recognition.
