import React from "react";
import AboutService from "../../../components/AboutService/AboutService";
import Appoinment from "../../Home/Appoinment/Appoinment";
import Achivement from "../Achivement/Achivement";
import Banner from "../Banner/Banner";
import Feature from "../../../components/Feature/Feature";
import Service from "../../../components/Service/Service";
import Timeline from "../Timeline/Timeline";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Banner section */}
      <Banner />
      {/* Feature section */}
      <Feature />
      {/* AboutService section */}
      <AboutService />
      {/* Timeline section */}
      <Timeline />
      {/* Service section */}
      <Service />
      {/* Achivement section */}
      <Achivement />
      {/* Appoinment section */}
      <Appoinment />
    </div>
  );
};

export default About;

// This code is a React component called "About" that represents the layout and structure of an about page for a website. It imports and combines several other components to create a cohesive and informative about page.

// Here's a breakdown of the code:

// - The component imports necessary dependencies: React, and the components AboutService, Appoinment, Achivement, Banner, Feature, Service, and Timeline.
// - The component is defined as a function called "About".
// - Inside the function, the component returns JSX code that represents the structure of the about page.
// - The JSX code uses self-closing tags and curly braces to include the imported components in the desired order.
// - Each component is included within the <></> fragment tags to group them together.
// - The components are placed in the desired order to create the layout of the about page, starting with the Banner component and ending with the Appoinment component.
// - The component is wrapped in a div with the className "about-container" for styling purposes.
// - The component is exported as the default export.

// This component can be used in a React application to render the about page of a website. It displays a banner section, a feature section, information about the services provided, a timeline section, a section showcasing achievements, and an appointment section. It provides a modular and reusable structure for building an about page.
