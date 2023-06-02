import React, { useEffect, useState } from 'react';

function UserCard({ user, onUpdateUser }) {
  const [following, setFollowing] = useState(user.following);

  const toggleFollowing = () => {
    setFollowing(!following);
    user.followers = following ? user.followers-1 : user.followers+1;
    console.log(user.followers);
    onUpdateUser(user);
  };

  return (
    <div className="card">
      <img src={user.avatar} alt={user.user} />
      <p>{user.user}</p>
      <p>{user.tweets} tweets </p>
      <p>{user.followers} followers</p>
      <button
        className={following ? 'follow-button following' : 'follow-button'}
        onClick={toggleFollowing}
      >
        {following ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}

function UserCardList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch('https://647388c9d784bccb4a3cb3f4.mockapi.io/api/v1/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      const response = await fetch(`https://647388c9d784bccb4a3cb3f4.mockapi.io/api/v1/users/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
      });
      const data = await response.json();
      console.log('User updated:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="user-cards">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onUpdateUser={updateUser} />
      ))}
    </div>
  );
}

export default UserCardList;

