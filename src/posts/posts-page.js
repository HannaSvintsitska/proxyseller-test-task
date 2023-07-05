import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import iconBack from '../images/back-icon.svg';
import './posts.css';

const Posts = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json.filter(({ userId }) => id == userId)));
  }, [id]);

  return (
    <div className="container mainContainer">
      <div className="button-back-div">
        <Link to="/">
          <button className="button-back">
            <img src={iconBack} alt="back"></img>
            Back
          </button>
        </Link>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 ">
        {posts.map((el) => {
          return (
            <div className="col allCardsStyle" key={el?.id}>
              <div className="cardPosts shadow">
                <div className="card-body">
                  <h5 className="card-title">{el?.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Posts;
