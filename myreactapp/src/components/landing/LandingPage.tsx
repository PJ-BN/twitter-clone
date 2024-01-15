// LandingPage.tsx
import React, { useState } from 'react';
import SignUpPage from '../signin/SignInPage'; // Import your SignUpPage component
import LoginPage from '../login/LoginPage'; // Import your LoginPage component
import './LandingPage.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  const [page, setPage] = useState<'landing' | 'signup' | 'login'>('landing');

  const renderContent = () => {
    // switch (page) {
    //   case 'signup':
    //     return <SignUpPage />;
    //   case 'login':
    //     return <LoginPage />;
    //   default:
        return (

          <Router>

            <div>
              {/* Existing landing page content */}
              <header className="landing-header">
                <img
                  className="logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Twitter_logo.png"
                  alt="Twitter Logo"
                />
                <h1>Welcome to Twitter</h1>
                <p>See what's happening in the world right now</p>
              </header>
  
              <section className="cta-section">
                <h2>Join Twitter today.</h2>
                <p>Sign up now to get your own personalized timeline!</p>
                <div>
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
                </div>
              </section>
  
              <section className="image-section">
                <img
                  className="landing-image"
                  src="https://source.unsplash.com/1600x900/?nature,technology"
                  alt="Twitter Landing "
                />
              </section>

                <Routes>
                  <Route path="/signup" element = {<SignUpPage />}>
                    
                  </Route>
                  <Route path="/login"  element ={<LoginPage />}>
                    
                  </Route>
                </ Routes>
            </div>
          </Router>
          );
      // }
  };

  return <div className="landing-container">{renderContent()}</div>;
};

export default LandingPage;
