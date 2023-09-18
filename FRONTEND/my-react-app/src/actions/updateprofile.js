import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from './useractions'; // Import de l'action de mise à jour des données utilisateur

/**
 * Composant pour la mise à jour des informations du profil utilisateur.
 * @returns {JSX.Element} Composant de mise à jour du profil utilisateur.
 */
const UpdateProfile = () => {
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.userData); // Données utilisateur actuelles depuis le store

  const [updatedUserData, setUpdatedUserData] = useState({
    // Création d'un état local pour stocker les données mises à jour
    // Initialisation avec les données utilisateur actuelles
    name: currentUserData.name,
    // Ajout de champs utilisateur
    firstName: currentUserData.firstName, // Ajout du prénom de l'utilisateur
    lastName: currentUserData.lastName, // Ajout du nom de l'utilisateur
  });

  /**
   * Gère le changement des valeurs des champs de formulaire.
   * @param {Event} e - L'événement de changement.
   */
  const handleChange = (e) => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Gère la soumission du formulaire de mise à jour des données utilisateur.
   * @param {Event} e - L'événement de soumission du formulaire.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatche l'action de mise à jour des données utilisateur avec les données mises à jour
    dispatch(updateUserData(updatedUserData));
  };

  return (
    <div>
      <h2>Edit user info</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="name"
            value={updatedUserData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={updatedUserData.firstName}
            readOnly // Champ "First Name" non modifiable
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={updatedUserData.lastName}
            readOnly // Champ "Last Name" non modifiable
          />
        </div>
        {/* Ajoutez d'autres champs de données utilisateur ici */}
        <div>
          <button type="submit">Save</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;


