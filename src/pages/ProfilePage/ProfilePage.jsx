import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.scss'

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login');
  };
  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Username : <span>SHOHNAZAR</span></h2>
      <h2>Password : <span>SHOHNAZAR</span></h2>
      <button onClick={handleLogout} className="button-82-pushable" role="button">
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span className="button-82-front text">
          LogOut
        </span>
       </button>
    </div>
  );
};

export default ProfilePage;