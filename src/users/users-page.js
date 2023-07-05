import React, { useState } from 'react';
import './users-page.css';
import Sorting from './sorting';
import Searchbar from './searchbar';
import Cards from './cards';

const Users = () => {
  const [sortingValue, setSortingValue] = useState('asc');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="container mainContainer">
      <Searchbar setSearchValue={setSearchValue} />
      <Sorting sortingValue={sortingValue} setSortingValue={setSortingValue} />
      <Cards searchValue={searchValue} sortingValue={sortingValue} />
    </div>
  );
};

export default Users;
