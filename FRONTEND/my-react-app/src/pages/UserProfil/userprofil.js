import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../actions/useractions'; // Import de l'action updateUser
import { Link } from 'react-router-dom';
import '../../pages/UserProfil/userprofil.css';
import Accounts from '../../components/Accounts/account';

/**
 * Composant pour la gestion du profil utilisateur.
 * Affiche et permet la modification des informations de l'utilisateur.
 * @returns {JSX.Element} Composant de gestion du profil utilisateur.
 */
function UserProfile() {
  const user = useSelector((state) => state.auth.user); // Récupération des données de l'utilisateur depuis le store Redux
  const dispatch = useDispatch();

  // État local pour stocker le nouveau userName saisi par l'utilisateur
  const [newUserName, setNewUserName] = useState('');

  /**
   * Gère l'enregistrement des modifications du nom d'utilisateur.
   */
  const handleSave = () => {
    // Dispatche l'action updateUser avec le nouveau userName
    dispatch(updateUser({ userName: newUserName }));
  };

  if (!user) {
    // Gère le cas où l'utilisateur n'est pas connecté ou les données de l'utilisateur ne sont pas disponibles
    return (
      <div>
        <h2>Edit user info</h2>
        <p>Vous n'êtes pas connecté, pour pouvoir éditer votre nom d'utilisateur ou consulter votre compte, veuillez vous connecter en cliquant sur Sign In</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Edit user info</h2>
      <div>
        <div>
          <label htmlFor="newUserName">User name :</label>
          <input
            type="text"
            id="newUserName"
            className="textinput"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <p>
          <strong>First Name :</strong>
          <input type="text" className="textinput" value={user.firstName} disabled />
        </p>
        <p>
          <strong>Last Name :</strong>
          <input type="text" className="textinput" value={user.lastName} disabled />
        </p>
        <div className="buttonssection">
          <button className="save-button" onClick={handleSave}>Save</button>
          <Link to="/welcome">
            <button className="cancel-button">Cancel</button>
          </Link>
        </div>
      </div>
      <Accounts />
    </div>
  );
}

export default UserProfile;


