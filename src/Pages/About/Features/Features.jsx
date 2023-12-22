import AOS from "aos"; // Importing the AOS library for animations
import "aos/dist/aos.css"; // Importing the AOS styles
import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import "./Features.css";

const Features = (props) => {
  const { title, description, img } = props.feature;

  useEffect(() => {
    // Initializing AOS library with a duration of 2000ms
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <Col md={6} xl={4} lg={6} sm={12}>
      <div className="single-feature-box" data-aos="fade-right">
        {/* Icon or image representing the feature */}
        <div className="icon-box">
          <img src={img} alt="" />
        </div>
        {/* Title of the feature */}
        <h3>{title}</h3>
        {/* Description of the feature */}
        <p>{description}</p>
      </div>
    </Col>
  );
};

export default Features;

// This code represents a React component called "Features" that is used to display a single feature box. Here's a breakdown of the code:

// - The component imports necessary dependencies: AOS for animations, React, and Col from react-bootstrap.
// - The component is defined as a function called "Features" that takes in a "props" parameter.
// - Inside the function, the component extracts the "title", "description", and "img" properties from the "props" object using destructuring.
// - The component uses the useEffect hook to initialize the AOS library for animations. It sets the duration of the animations to 2000ms and refreshes the AOS library.
// - The component returns JSX code that represents the structure and content of a single feature box.
// - The JSX code uses the Col component from react-bootstrap to define the column size for different screen sizes.
// - Inside the Col component, there is a div element with the className "single-feature-box" and the data-aos attribute set to "fade-right" for animation purposes.
// - Inside the div, there is another div element with the className "icon-box" that represents the icon or image for the feature.
// - The img element within the icon-box div displays the image specified by the "img" property.
// - Below the icon or image, there is an h3 element that displays the "title" of the feature.
// - Below the title, there is a p element that displays the "description" of the feature.
// - The component is exported as the default export.

// You can explain to the client that this code represents a reusable component that displays a single feature box. The component takes in properties such as the title, description, and image for the feature. It uses the AOS library for animations and applies a fade-right animation effect to the feature box. The component is designed to be responsive and can adjust its column size based on the screen size. The client can pass different properties to the component to customize the content and appearance of each feature box.
