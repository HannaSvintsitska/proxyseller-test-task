import React from 'react';
import searchIcon from '../images/search-icon.svg';

const Searchbar = ({ setSearchValue }) => {
  return (
    <div className="input-group searchingContainer">
      <input
        type="text"
        className="form-control"
        placeholder="Search by username"
        aria-label="earch by username"
        aria-describedby="basic-addon2"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <span className="input-group-text" id="basic-addon2">
        <img src={searchIcon} alt="search"></img>
      </span>
    </div>
  );
};

export default Searchbar;
