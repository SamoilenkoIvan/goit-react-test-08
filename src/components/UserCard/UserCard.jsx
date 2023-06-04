import React, { useState } from 'react';
import './UserCard.css';
import avatarImage from '../images/picture21.png';
import goit from '../images/goit.png';

function UserCard({ user, onUpdateUser }) {
    const [following, setFollowing] = useState(() => {
      const storedFollowing = localStorage.getItem(`following_${user.id}`);
      return storedFollowing ? JSON.parse(storedFollowing) : user.following;
    });
  
    const toggleFollowing = () => {
      const updatedFollowing = !following;
      setFollowing(updatedFollowing);
      localStorage.setItem(`following_${user.id}`, updatedFollowing);
  
      const updatedUser = { ...user };
      updatedUser.following = updatedFollowing;
      updatedUser.followers += updatedFollowing ? 1 : -1;
      onUpdateUser(updatedUser);
    };
  
    return (
      <div className="card">
        <img className="card__goit" src={goit} alt="Avatar"/>
        <img id="logo" src={avatarImage} alt="Avatar"/>
        <img className='card__img' src={user.avatar} alt={user.user} />
        {/* <h3>{user.user}</h3> */}
        <p className="card__tweets">{user.tweets} TWEETS</p>
        <p className="card__followers">{user.followers} FOLLOWERS</p>
        <button
          className={following ? 'follow-button following' : 'follow-button'}
          onClick={toggleFollowing}
        >
          {following ? 'FOLLOWING' : 'FOLLOW'}
        </button>
      </div>
    );
  }

  export default UserCard;