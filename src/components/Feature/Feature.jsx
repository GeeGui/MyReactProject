import { Container, Row } from "react-bootstrap";
import { FakeFeatures } from "../../FakeData/Features"; // Importing the data for FakeFeatures
import Features from "../../Pages/About/Features/Features"; // Importing the Features component
import React from "react";
const Feature = () => {
  return (
    <section className="feature-wrapper">
      {/* Container to hold the content */}
      <Container>
        <Row className="g-2">
          {/* Mapping through the FakeFeatures data and rendering Features component for each item */}
          {FakeFeatures.map((feature) => (
            <Features key={feature.id} feature={feature}></Features>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Feature;

// This code is a React component that renders a section on a web page called "Feature". It imports necessary components and data to display a set of features.

// Here's a breakdown of the code:

// 1. The code imports two components from the "react-bootstrap" library: "Container" and "Row". These components are used to create a responsive layout for the features section.

// 2. It also imports a data file called "FakeFeatures" from a specific location. This file contains an array of fake feature data that will be used to render the features on the page.

// 3. The code imports another component called "Features" from a specific location. This component is responsible for rendering a single feature item.

// 4. The "Feature" component is defined as a functional component. It returns JSX code that represents the features section on the web page.

// 5. Inside the JSX code, there is a "section" element with a class name of "feature-wrapper". This element wraps the content of the features section.

// 6. Inside the "Container" component, there is a "Row" component that holds the features. The "g-2" class is applied to the "Row" component to add some spacing between the features.

// 7. The "FakeFeatures" data is mapped over using the "map" function. For each feature in the data, the "Features" component is rendered with the feature data passed as a prop.

// 8. The "Features" component receives the "key" prop with a unique identifier for each feature item, and the "feature" prop with the specific feature data.

// 9. Finally, the "Feature" component is exported as the default export, which means it can be imported and used in other parts of the application.

// Overall, this code sets up a features section on a web page by importing necessary components and data, mapping over the data to render individual feature items, and applying responsive layout using the "Container" and "Row" components from "react-bootstrap".
