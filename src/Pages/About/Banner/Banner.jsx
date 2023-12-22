import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-all text-white">
      <Container>
        <Row className="align-items-center">
          {/* Left column */}
          <Col md={7} lg={8}>
            <div className="single-dentist-details">
              <h6>Who I am</h6>
              <h1>About Me</h1>
              <p>
                Hello! My name is Peace and I enjoy creating things that live on
                the internet. Over 2 years of experience as a Registered Nurse
                in a Long-term care facility and in the home health setting.
                Also, over 3 years in the United States Army with expertise in
                chemical-biological-radiological and nuclear (CBRN) defense.
              </p>
              <p>
                Exceptional skills in assessment, diagnostics, and critical
                thinking in hospital settings. Skills in operations and
                maintenance of CBRN equipment, handling of hazardous materials,
                mass decontamination, administration, and application of CBRN
                measures.
              </p>
            </div>
            <div className="dentist-award">
              <h3>CORE STRENGTHS</h3>
              <ul className="p-0">
                <li>Self-discipline</li>
                <li>Flexibility</li>
                <li>Adaptability</li>
                <li>Teamwork</li>
                <li>Attention</li>
                <li>Critical thinking</li>
              </ul>
            </div>
          </Col>
          {/* Right column */}
          <Col md={5} lg={4}>
            <div className="dentist-profile text-center">
              <div className="profile-img"></div>
              <p>
                Name: <strong>Nathan Currie</strong>
              </p>
              <p>
                Specialization: <strong>Registered Nurse</strong>
              </p>
              <p>
                Phone: <strong>1-866-764-5387</strong>
              </p>
              {/* Social media links */}
              <div className="doctors-social">
                <a href=".#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href=".#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href=".#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;

// This code is a React component called "Banner" that represents a section with information about a person, their core strengths, and their social media links. It is commonly used as a banner or introduction section on a website.

// Here's a breakdown of the code:

// - The component imports necessary dependencies: React, Col, Container, Row from react-bootstrap, FontAwesomeIcon from @fortawesome/react-fontawesome, and the CSS file for styling.
// - The component is defined as a function called "Banner" without any parameters.
// - Inside the function, the component returns JSX code that represents the structure and content of the banner section.
// - The JSX code uses self-closing tags and curly braces to include dynamic values and class names.
// - The JSX code includes a <section> element with the className "banner-all text-white" for styling purposes.
// - Inside the section, there is a <Container> component from react-bootstrap to create a responsive container for the content.
// - Inside the container, there is a <Row> component with the className "align-items-center" to create a row and align its items vertically.
// - The row is divided into two columns: a left column and a right column.
// - The left column, represented by the <Col> component, takes up 7 columns on medium and large screens and 8 columns on small screens.
// - Inside the left column, there are two <div> elements: one with the className "single-dentist-details" and another with the className "dentist-award".
// - The "single-dentist-details" div contains a <h6> element with the text "Who I am", a <h1> element with the text "About Me", and two <p> elements with paragraphs of text describing the person's background and skills.
// - The "dentist-award" div contains a <h3> element with the text "CORE STRENGTHS" and an unordered list (<ul>) with the className "p-0" that contains several list items (<li>) representing the person's core strengths.
// - The right column, also represented by the <Col> component, takes up 5 columns on medium and large screens and 4 columns on small screens.
// - Inside the right column, there is a <div> element with the className "dentist-profile text-center" that contains information about the person, such as their name, specialization, and phone number.
// - Below the information, there is a <div> element with the className "doctors-social" that displays social media links using the FontAwesomeIcon component from the @fortawesome/react-fontawesome package.
// - The FontAwesomeIcon component is used to render icons for social media platforms like Facebook, Twitter, and LinkedIn.
// - The component is exported as the default export.

// You can explain to the client that this code represents a banner section that introduces a person, their background, core strengths, and provides links to their social media profiles. The code uses React and react-bootstrap to create a responsive and visually appealing section. The social media icons are rendered using the FontAwesomeIcon component, allowing for easy customization and integration of different social media platforms. The content within the banner section can be easily customized to fit the specific requirements and information of the client.
