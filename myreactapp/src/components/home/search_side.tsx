// SearchNavbar.jsx
import React from 'react';
import './search_side.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchNavbar = () => {
  return (
    <div className='search-section'>

        <nav className="search-navbar">
        <div className="search-box">
            <input type="text" placeholder="Search" />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        </nav>
    </div>
  );
};

export default SearchNavbar;
