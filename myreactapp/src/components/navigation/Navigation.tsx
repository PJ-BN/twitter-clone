// Navigation.tsx
import React, { useState } from 'react';
import LandingPage from '../landing/LandingPage';
import SignUpPage from '../signin/SignInPage';
import LoginPage from '../login/LoginPage';
import './Navigation.css'; // Import the CSS file


const Navigation: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'landing' | 'signup' | 'login'>('landing');
  
    const renderCurrentPage = () => {
      switch (currentPage) {
        case 'signup':
          return <SignUpPage />;
        case 'login':
          return <LoginPage />;
        default:
          return <LandingPage />;
      }
    };
  
    return (
      <div>
        <header>
          <nav>
            <button onClick={() => setCurrentPage('landing')}>Home</button>
            <button onClick={() => setCurrentPage('signup')}>Sign Up</button>
            <button onClick={() => setCurrentPage('login')}>Log In</button>
          </nav>
        </header>
        {renderCurrentPage()}
      </div>
    );
  };
  
  export default Navigation;