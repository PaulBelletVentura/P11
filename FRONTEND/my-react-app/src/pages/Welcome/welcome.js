import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Accounts from '../../components/Accounts/account';
import './welcome.css'; 

/**
 * Composant de bienvenue affichant le nom de l'utilisateur et proposant de modifier son nom.
 * @returns {JSX.Element} Composant de bienvenue.
 */
function Welcome() {
  // Récupération des données de l'utilisateur depuis le store Redux
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

