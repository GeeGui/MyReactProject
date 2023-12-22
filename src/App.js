import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';

// Importing the AuthProvider component from the AuthProvider.js file
import AuthProvider from './Context/AuthProvider';

// Importing the About, Approved, Footer, Header, Home, and NotFound components
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* Wrapping the entire app with the AuthProvider component */}
      <AuthProvider>
        <Router>
          {/* Rendering the Header component */}
          <Header />

          {/* Setting up the routes */}
          <Routes>
            {/* Route for the home page */}
            <Route path='/' element={<Home />} /> 

            {/* Route for the home page (alternative path) */}
            <Route path='/home' element={<Home />} />

            {/* Route for the about page */}
            <Route path='/about' element={<About />} />

            {/* Route for the approved page */}
            <Route path='/approved' element={<Approved />} />

            {/* Route for any other paths */}
            <Route path='*' element={<NotFound />} />
          </Routes>

          {/* Rendering the Footer component */}
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

// This code represents the main App component of a React application. It sets up the routing for different pages and includes components for the header, footer, and authentication. 
 
// Here's a breakdown of the code: 
 
// - The component imports necessary dependencies from the React and React Router libraries. 
// - It imports the AuthProvider component from the AuthProvider.js file, which is responsible for managing authentication state. 
// - It imports several components: About, Approved, Footer, Header, Home, and NotFound. 
// - The component returns a div with the class name "App" to hold the entire application. 
// - Inside the div, the App component is wrapped with the AuthProvider component, which provides authentication context to the app. 
// - The Router component from React Router is used to handle routing in the application. 
// - The Header component is rendered at the top of the app. 
// - The Routes component is used to define the routes for different pages. 
// - There are several Route components defined: 
//   - Route for the home page with the path '/' and the element being the Home component. 
//   - Alternative route for the home page with the path '/home' and the element being the Home component. 
//   - Route for the about page with the path '/about' and the element being the About component. 
//   - Route for the approved page with the path '/approved' and the element being the Approved component. 
//   - Route for any other paths with the path '*' and the element being the NotFound component. 
// - The Footer component is rendered at the bottom of the app. 
 
// Overall, this code sets up the routing for different pages in the application and includes components for the header, footer, and authentication. The AuthProvider component manages authentication state, and the Routes component handles rendering the appropriate components based on the current route.