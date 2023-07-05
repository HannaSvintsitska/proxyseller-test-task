import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ searchValue, sortingValue }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const processData = useMemo(() => {
    return users
      .filter((user) => {
        return searchValue
          ? user?.name.toLowerCase().includes(searchValue.toLowerCase())
          : true;
      })
      .sort((user1, user2) =>
        sortingValue === 'asc'
          ? user1.name.localeCompare(user2.name)
          : user2.name.localeCompare(user1.name)
      );
  }, [sortingValue, users, searchValue]);
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 ">
      {processData.map((el) => {
        return (
          <div className="col allCardsStyle" key={el?.id}>
            <div className="card shadow">
              <span className="header">{el?.name}</span>
              <div className="body buttons-container">
                <Link to={`/posts/${el.id}`} className="card-link">
                  <button className="buttonLink">See all posts</button>
                </Link>
                <Link to={`/albums/${el.id}`} className="card-link">
                  <button className="buttonLink">See all albums</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
