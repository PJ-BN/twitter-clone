// NewNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file for styling

const CentralNavbar = () => {
    const handleForYouClick = () => {
      // Handle For You button click
      console.log("For You clicked");
      // Add your custom function logic here
    };
  
    const handleFollowingClick = () => {
      // Handle Following button click
      console.log("Following clicked");
      // Add your custom function logic here
    };
  
    const handleSettingsClick = () => {
      // Handle Settings button click
      console.log("Settings clicked");
      // Add your custom function logic here
    };
  
    return (
        <div className='central-home'>

            <div className="new-navbar">
                <button className="nav-button for-you" onClick={handleForYouClick}>
                For You
                </button>
                <button className="nav-button following" onClick={handleFollowingClick}>
                Following
                </button>
                <button className="nav-link settings-button" onClick={handleSettingsClick}>
                ⚙️
                </button>
              <hr className="line" /> 
              <hr className="line" /> 
              <hr className="line" /> 
              
             </div>
                
              <br />
              <br />
            <div className='post'>

                 <h1>helloworld</h1>
                
            </div>

            
        </div>
    );
};

export default CentralNavbar;
