import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { user } = location.state;

  return (
    <div className="profile">
      <h1>Welcome, {user.displayName}</h1>
      <img src={user.photoURL} alt="User Profile" />
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;