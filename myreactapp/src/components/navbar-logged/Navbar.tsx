// Navbar.tsx

import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faBell, faEnvelope, faList, faBookmark, faUsers, faCrown, faUser, faEllipsisH, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar: React.FC = () => {

  const logoutButton = () =>{
    Cookies.remove('username');
    // navigate('/');
    window.location.reload();
  }

  return (
    <div  className='main-navbar'>

      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="custom-icon"/>
              Home
            </Link>
          </li>
          <li>
            <Link to="/explore">
              <FontAwesomeIcon icon={faCompass} className="custom-icon"/>
              Explore
            </Link>
          </li>
          <li>
            <Link to="/notifications">
              <FontAwesomeIcon icon={faBell}className="custom-icon" />
              Notifications
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <FontAwesomeIcon icon={faEnvelope} className="custom-icon"/>
              Messages
            </Link>
          </li>
          <li>
            <Link to="/list">
              <FontAwesomeIcon icon={faList} className="custom-icon"/>
              List
            </Link>
          </li>
          <li>
            <Link to="/bookmarks">
              <FontAwesomeIcon icon={faBookmark} className="custom-icon"/>
              Bookmarks
            </Link>
          </li>
          <li>
            <Link to="/communities">
              <FontAwesomeIcon icon={faUsers} className="custom-icon"/>
              Communities
            </Link>
          </li>
          <li>
            <Link to="/premium">
              <FontAwesomeIcon icon={faCrown} className="custom-icon" />
              Premium
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} className="custom-icon"/>
              Profile
            </Link>
          </li>
          <li>
            <Link to="/more">
              <FontAwesomeIcon icon={faEllipsisH} className="custom-icon"/>
              More
            </Link>
          </li>
          <li>

            <div className="post-button">
              <button>
                <FontAwesomeIcon icon={faPlus} className="custom-icon"/>
                Post
              </button>
            </div>
          </li>
          <div className="logout-button">
            <button onClick={logoutButton}>
              <FontAwesomeIcon icon={faEllipsisH} className="custom-icon"/>
              Logout
            </button>
          </div>
        </ul>


      </div>
      

    </div>
  );
};

export default Navbar;
