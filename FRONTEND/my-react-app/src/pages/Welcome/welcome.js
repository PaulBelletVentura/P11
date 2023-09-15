import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Accounts from '../../components/Accounts/account';
import './welcome.css'; 

function Welcome() {
  // Récupératio données utilisateur depuis le store Redux
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="bgdark">
      <h1 className="title">Welcome back<br />{user.firstName} {user.lastName}</h1>
      <Link to="/userprofil">
        <button className="edit-button">Edit Name</button>
      </Link>
      <Accounts />
    </div>
  );
}

export default Welcome;
