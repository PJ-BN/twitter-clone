// LandingPage.tsx
import React from 'react';
import './LandingPage.css';
import {  Link } from 'react-router-dom';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {

 
        return (


            <div className="landing-container">
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

                
            </div>
          );
  

};

export default LandingPage;
