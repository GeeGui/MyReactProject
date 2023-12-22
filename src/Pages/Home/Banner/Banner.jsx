import "@fontsource/josefin-sans";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as MySvg } from "../../../Images/doctor.svg";
import "./Banner.css";
import React from "react";
const Banner = () => {
  return (
    <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
      <Container>
        <Row className="align-items-center">
          {/* Left column */}
          <Col md={12} sm={12} lg={6}>
            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
              {/* Heading */}
              <h2>Better Life Through</h2>
              <h1>Better Treatments</h1>
              {/* Description */}
              <p className="mb-xs-5">
                Join us to a fun and friendly treatment environment. Our
                professionals are working so hard to see smile on your face that
                you deserve! We are dedicated about our duties.
              </p>
              {/* Button section */}
              <div className="banner-btn m-sm-auto">
                {/* Link to the login page */}
                <Link to="/login">
                  <button className="theme-btn btn-fill">Appoinment</button>
                </Link>
                <button className="theme-btn bth-blank">Learn More</button>
              </div>
            </div>
          </Col>
          {/* Right column */}
          <Col md={12} sm={12} lg={6} className="mt-sm-5">
            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
              {/* SVG image */}
              <MySvg />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

// The provided code is a React component that represents a banner section on a website. Here's a breakdown of the code:

// - The component imports necessary dependencies, including the Josefin Sans font, React Bootstrap components, the Link component from React Router, and an SVG image.
// - The component defines the Banner functional component.
// - The component returns a section with the class name "single-hero-slide text-white d-flex justify-content-center align-items-center".
// - Inside the section, there's a Container component from React Bootstrap that provides a responsive container for the content.
// - Inside the Container, there's a Row component that represents a row of columns.
// - The first column, Col md={12} sm={12} lg={6}, contains the content on the left side of the banner.
//   - Inside the column, there's a hero-slide-left div that wraps the content.
//     - The div includes a heading that displays the text "Better Life Through" and a larger heading that displays the text "Better Treatments".
//     - There's also a description paragraph that provides additional information about the treatments and the friendly treatment environment.
//     - The div includes a banner-btn div that wraps the button section.
//       - Inside the banner-btn div, there are two buttons: one with the class name "theme-btn btn-fill" that displays the text "Appointment" and another with the class name "theme-btn bth-blank" that displays the text "Learn More".
// - The second column, Col md={12} sm={12} lg={6} className="mt-sm-5", contains the SVG image on the right side of the banner.
//   - Inside the column, there's a hero-slide-right div that wraps the SVG image.
//     - The div includes the SVG image component, which renders the SVG image defined elsewhere in the code.
// - Overall, this component represents a banner section on a website. It displays a heading and description promoting better treatments and a friendly treatment environment. It includes buttons for appointment booking and learning more. Additionally, it showcases an SVG image related to the content of the banner.
