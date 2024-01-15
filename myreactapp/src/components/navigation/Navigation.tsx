// Navigation.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import LandingPage from '../landing/LandingPage';
import SignUpPage from '../signin/SignInPage';
import LoginPage from '../login/LoginPage';
import './Navigation.css'; // Import the CSS file


const Navigation: React.FC = () => {
    
    return (
      <Router>

        <div>
          <header>
            <nav>
              <button className="signup-button">
              <Link to ="/">

                 Home
              </Link>
              </button>

              <button className="signup-button">
                    <Link to ="/signup">

                    Sign up
                    </Link>
                  </button>
                  <button className="login-button">
                  <Link to ="/login">

                    Log in
                  </Link>
                  </button>

            </nav>
          </header>
          <Routes>
              <Route path="/"  element ={<LandingPage />}>
                
                </Route>
              <Route path="/signup" element = {<SignUpPage />}>
                
              </Route>
              <Route path="/login"  element ={<LoginPage />}>
                
              </Route>
            </ Routes>

      </div>
      </Router>
    );
  };
  
  export default Navigation;