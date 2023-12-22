import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="head-bg">
      {/* Navbar */}
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container className="container-head">
          {/* Logo */}
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          {/* Navbar toggle button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation links */}
            <Nav className="ms-auto align-items-center">
              {/* Home link */}
              <Link to="/home" className="list-item text-decoration-none">
                Home
              </Link>
              {/* About link */}
              <Link to="/about" className="list-item text-decoration-none">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

// This code is a React component called "Header" that represents a navigation bar at the top of a webpage. It uses the React Bootstrap library to create responsive and customizable navigation elements.

// Here's a breakdown of the code:

// - The component imports necessary dependencies: React, Container, Nav, Navbar, Link, and the logo image.
// - The component is defined as a function called "Header".
// - Inside the function, the component returns JSX code that represents the navigation bar.
// - The navigation bar is wrapped in a div with the class name "head-bg" for styling purposes.
// - The navigation bar is created using the Navbar component from React Bootstrap.
// - The Navbar component has a collapsible behavior and expands to a large size on larger screens.
// - The Navbar.Brand component displays the logo image, which is sourced from the "logo" variable imported at the beginning.
// - The Navbar.Toggle component is a button that toggles the visibility of the navigation links on smaller screens.
// - The Navbar.Collapse component contains the navigation links and collapses or expands based on the toggle button's state.
// - The Nav component represents a list of navigation links.
// - The Link components from React Router are used for each navigation link, with the "to" prop specifying the destination URL and the link text displayed as "Home" and "About".
// - The component is exported as the default export.

// This component can be used in a React application to display a responsive navigation bar with a logo and links to home and about pages.
