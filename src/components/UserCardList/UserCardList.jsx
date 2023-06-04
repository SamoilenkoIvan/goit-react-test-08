import React, { useEffect, useState } from 'react';
import './UserCardList.css';
import UserCard from 'components/UserCard/UserCard';


function UserCardList() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(12);

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
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === data.id ? data : user))
      );
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const loadMore = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + 6);
  };

  return (
    <div>
      <div className="user-cards">
        {users.slice(0, visibleUsers).map((user) => (
          <UserCard key={user.id} user={user} onUpdateUser={updateUser} />
        ))}
      </div>
      {visibleUsers < users.length && (
        <button className="load-more-button" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default UserCardList;
