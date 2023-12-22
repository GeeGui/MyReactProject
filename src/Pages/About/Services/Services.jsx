import AOS from "aos"; // Importing the AOS library for animations
import "aos/dist/aos.css"; // Importing the AOS styles
import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import "./Services.css";

const Services = (props) => {
  const { title, description, link, img } = props.treatment;

  useEffect(() => {
    // Initializing AOS library with a duration of 2000ms
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Column for each service */}
      <Col md={6} lg={6} xl={4} xs={12}>
        <div className="single-service-box" data-aos="flip-left">
          {/* Icon or image representing the service */}
          <div className="service-icon">
            <img src={img} alt="" />
          </div>
          {/* Title of the service */}
          <h3>{title}</h3>
          {/* Description of the service */}
          <p>{description}</p>
          {/* Link related to the service */}
          <a href=".#">{link}</a>
        </div>
      </Col>
    </>
  );
};

export default Services;

// This code represents a React component called "Services" that is used to display a single service box. Here's a breakdown of the code:

// - The component imports necessary dependencies: AOS for animations, React, and Col from react-bootstrap.
// - The component is defined as a function called "Services" that takes in a "props" parameter.
// - Inside the function, the component extracts the "title", "description", "link", and "img" properties from the "props" object using destructuring.
// - The component uses the useEffect hook to initialize the AOS library for animations. It sets the duration of the animations to 2000ms and refreshes the AOS library.
// - The component returns JSX code that represents the structure and content of a single service box.
// - The JSX code uses the Col component from react-bootstrap to define the column size for different screen sizes.
// - Inside the Col component, there is a div element with the className "single-service-box" and the data-aos attribute set to "flip-left" for animation purposes.
// - Inside the div, there is another div element with the className "service-icon" that represents the icon or image for the service.
// - The img element within the service-icon div displays the image specified by the "img" property.
// - Below the icon or image, there is an h3 element that displays the "title" of the service.
// - Below the title, there is a p element that displays the "description" of the service.
// - Below the description, there is an anchor element that represents a link related to the service. The href attribute is set to ".#" which is a placeholder link.
// - The component is exported as the default export.

// You can explain to the client that this code represents a reusable component that displays a single service box. The component takes in properties such as the title, description, link, and image for the service. It uses the AOS library for animations and applies a flip-left animation effect to the service box. The component is designed to be responsive and can adjust its column size based on the screen size. The client can pass different properties to the component to customize the content and appearance of each service box.
