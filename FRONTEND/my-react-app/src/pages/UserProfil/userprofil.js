import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../actions/useractions'; // Importez l'action updateUser

function UserProfile() {
  const user = useSelector((state) => state.auth.user); // Récupérez les données de l'utilisateur depuis le store Redux
  const dispatch = useDispatch();

  // État local pour stocker le nouveau userName saisi par l'utilisateur
  const [newUserName, setNewUserName] = useState('');

  const handleSave = () => {
    // Dispatche l'action updateUser avec le nouveau userName
    dispatch(updateUser({ userName: newUserName }));
  };

  const handleCancel = () => {
    // Redirige l'utilisateur vers la page d'accueil (ou une autre page) en cas d'annulation
    window.location.href = '/'; // Remplacez '/home' par l'URL de votre page d'accueil
  };

  if (!user) {
    // Gére le cas où l'utilisateur n'est pas connecté ou les données de l'utilisateur ne sont pas disponibles
    return (
      <div>
        <h2>User Profile</h2>
        <p>No user data available. Please sign in.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User name :</strong> {user.userName}</p>

        {/* Champ de formulaire pour le nouveau userName */}
        <div>
          <label htmlFor="newUserName">New Username:</label>
          <input
            type="text"
            id="newUserName"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>

        {/* Boutons Save et Cancel */}
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default UserProfile;



