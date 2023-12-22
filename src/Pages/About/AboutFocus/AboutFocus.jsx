import React from "react";
import { Col } from "react-bootstrap";

const Services = (props) => {
  const { title, description, img } = props.treatment;

  return (
    <>
      {/* Column for each service */}
      <Col md={6} lg={6} xl={4} xs={12}>
        <div className="single-service-box focus">
          {/* Icon or image representing the service */}
          <div className="service-icon">
            <img src={img} alt="" />
          </div>
          {/* Title of the service */}
          <h3>{title}</h3>
          {/* Description of the service */}
          <p>{description}</p>
        </div>
      </Col>
    </>
  );
};

export default Services;

// This code is a React component called "Services" that represents a single service box or item. It is used to display information about a particular service, such as its title, description, and an icon or image representing the service.

// Here's a breakdown of the code:

// - The component imports necessary dependencies: React and the Col component from react-bootstrap.
// - The component is defined as a function called "Services" that takes in a "props" parameter.
// - Inside the function, the component extracts the "title", "description", and "img" properties from the "props.treatment" object using object destructuring.
// - The component returns JSX code that represents the structure and content of a single service box.
// - The JSX code uses self-closing tags and curly braces to include dynamic values from the extracted properties.
// - The JSX code includes a <Col> component from react-bootstrap to define the layout of the service box.
// - The service box includes a <div> element with the className "single-service-box focus" for styling purposes.
// - Inside the service box, there is a <div> element with the className "service-icon" that displays the icon or image representing the service.
// - The service box also includes an <h3> element to display the title of the service and a <p> element to display the description.
// - The component is wrapped in a <></> fragment tags to group the JSX code together.
// - The component is exported as the default export.

// This component can be used in a React application to render a single service box, which can be repeated for each service to create a list or grid of services. The component receives the necessary data for each service through the "props" parameter, allowing for dynamic rendering of different services.
