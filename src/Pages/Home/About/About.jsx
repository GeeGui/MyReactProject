import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/service-details-promo1.png";
import "./About.css";

const About = () => {
  useEffect(() => {
    // Initializing AOS library with a duration of 2000ms
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="about-wrapper">
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <div className="about-left">
              {/* Rendering the serviceDetailImg */}
              <img
                src={serviceDetailImg}
                alt="expertDentist"
                className="img-fluid"
              />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-right mt-5 mt-lg-0">
              <div className="about-content text-start" data-aos="zoom-in">
                {/* About content */}
                <h1>Welcome to our team</h1>
                <p>
                  Welcome to Datobbo Dental represents everything going to
                  dentist necessary. We have upgraded your dreaded dentist
                  appointment and transformed it into a relaxing. Consectetur
                  adipisicing elit. Quod ea, consequuntur itaque enim et
                  expedita, optio omnis ipsa magni, perspiciatis totam ipsum!
                  Voluptatibus, neque at.
                </p>
                {/* Link to the About Us page */}
                <a href="/page/about">About Us</a>
              </div>
              <div className="fun-fact-sec" data-aos="fade-right">
                {/* Fun fact section */}
                <div className="single-fun">
                  <span>500</span>
                  <span>+</span>
                  <p>Happy Patients</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-right">
                  <span>88</span>
                  <span>+</span>
                  <p>Qualified Doctors</p>
                </div>
                <div className="single-fun" data-aos="fade-left">
                  <span>25</span>
                  <span>+</span>
                  <p>Years Experience</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-left">
                  <span>50</span>
                  <span>+</span>
                  <p>Treatment Awards</p>
                </div>
                <span className="line"></span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

// The provided code is a React component that represents the About section of a website. Here's a breakdown of the code:

// - The component imports necessary dependencies, including the AOS library for animations, React Bootstrap components, and the image file for the service detail.
// - The component defines the About functional component.
// - Inside the component, there's an useEffect hook that initializes the AOS library with a duration of 2000ms and refreshes it.
// - The component returns a section with the class name "about-wrapper".
// - Inside the section, there's a Container component from React Bootstrap that provides a responsive container for the content.
// - Inside the Container, there's a Row component that represents a row of columns.
// - The first column, Col md={12} lg={6}, contains the about-left section.
//   - Inside the about-left section, there's an image tag that displays the serviceDetailImg.
// - The second column, Col md={12} lg={6}, contains the about-right section.
//   - Inside the about-right section, there's an about-content div that contains the about content.
//     - The about content includes a heading, paragraph, and a link to the "About Us" page.
//   - There's also a fun-fact-sec div that displays fun facts about the team.
//     - It includes multiple single-fun divs, each displaying a fun fact with a number and a description.
//     - There's also a line element that separates the fun facts.
// - Overall, this component represents the About section of a website, displaying an image, about content, and fun facts about the team. The AOS library is used for animating the content.
