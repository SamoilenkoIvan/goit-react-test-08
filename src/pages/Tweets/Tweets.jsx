import React from 'react';
import { Link } from 'react-router-dom';
import UserCardList from '../../components/UserCardList/UserCardList';
import './Tweets.css';
function Tweets() {
  return (
    <div>
      <h1>Tweets Page</h1>
      <Link to="/">Back</Link>
      <button className='back' onClick={() => window.history.back()}>Back</button>
      <UserCardList/>
    </div>
  );
}

export default Tweets;
