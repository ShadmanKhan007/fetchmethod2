import {React, useState } from 'react';
import './card.css'

const UserCard = ({ user }) => (
  <div className="user_card1">
       <img src={user.avatar} alt={"user_pic"} />
       <p>first Name:{user.first_name}</p>
       <p>last Name:{user.last_name}</p>
       <p>email:{user.email}</p>
    </div>
);

export default function Cards() {
  const [users, setUsers] = useState([]);

// -------------------------------------------------------------------------------------

  const getUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users/');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('same error', error);
    }
// -------------------------------------------------------------------------------------

  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <div id="Cart">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};