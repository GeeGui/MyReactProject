import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import "./Doctors.css";

const Doctors = (props) => {
  const { name, status, img } = props.dentist;

  useEffect(() => {
    // Initializing AOS library with a duration of 2000ms
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <Col md={6} lg={6} xl={4} xs={12}>
      <div className="single-feature-box sigle-doctor">
        {/* Profile image */}
        <div className="doctors-profile" data-aos="fade-down">
          <img src={img} alt="" />
        </div>
        {/* Doctor's information */}
        <div className="doctors-info" data-aos="fade-left">
          <h3 className="mb-0">
            <a href=".#">{name}</a>
          </h3>
          <span>{status}</span>
        </div>
        {/* Social media links */}
        <div className="doctors-social" data-aos="flip-left">
          <a href=".#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href=".#">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href=".#">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href=".#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </Col>
  );
};

export default Doctors;

// The provided code is a React component that represents a doctor's profile in a website. Here's a breakdown of the code:

// - The component imports necessary dependencies, including FontAwesome icons, React Bootstrap components, AOS library for animations, and a CSS file for styling.
// - The component defines the Doctors functional component.
// - The component receives props that include the name, status, and img (profile image) of the dentist.
// - Inside the component, there's an useEffect hook that initializes the AOS library with a duration of 2000ms. This library is used for animating elements on the page.
// - The component returns a Col component from React Bootstrap, which represents a column in a grid layout.
// - Inside the Col component, there's a div with the class name "single-feature-box sigle-doctor".
//   - Inside this div, there are three sections representing the profile image, doctor's information, and social media links.
//   - The profile image section has the class name "doctors-profile" and uses the data-aos attribute to apply a fade-down animation effect.
//   - The doctor's information section has the class name "doctors-info" and uses the data-aos attribute to apply a fade-left animation effect. It displays the doctor's name and status.
//   - The social media links section has the class name "doctors-social" and uses the data-aos attribute to apply a flip-left animation effect. It displays social media icons (Facebook, Twitter, WhatsApp, LinkedIn) using FontAwesomeIcon components.
// - Overall, this component represents a single doctor's profile with their profile image, name, status, and social media links. The AOS library is used to animate the appearance of the profile elements.
