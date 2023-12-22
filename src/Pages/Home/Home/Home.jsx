import React from "react";
import Dentist from "../../../components/Dentist/Dentist";
import About from "../About/About";
import Promo from "../Appoinment-promo/Promo";
import Appoinment from "../Appoinment/Appoinment";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      {/* Banner section */}
      <Banner />
      {/* About section */}
      <About />
      {/* Dentist section */}
      <Dentist />
      {/* Contact Us section */}
      <ContactUs />
      {/* Appoinment section */}
      <Appoinment />
      {/* Promo section */}
      <Promo />
    </>
  );
};

export default Home;

// This code is a React component called "Home" that represents the layout and structure of a homepage for a website. It imports and combines several other components to create a cohesive and visually appealing homepage.

// Here's a breakdown of the code:

// - The component imports necessary dependencies: React, and the components Dentist, About, Promo, Appoinment, Banner, and ContactUs.
// - The component is defined as a function called "Home".
// - Inside the function, the component returns JSX code that represents the structure of the homepage.
// - The JSX code uses self-closing tags and curly braces to include the imported components in the desired order.
// - Each component is included within the <></> fragment tags to group them together.
// - The components are placed in the desired order to create the layout of the homepage, starting with the Banner component and ending with the Promo component.
// - The component is exported as the default export.

// This component can be used in a React application to render the homepage of a website, displaying a banner, information about the website or business, a section showcasing dentists, a contact form, an appointment section, and a promotional section. It provides a modular and reusable structure for building a homepage.
