import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from './useractions'; // Import action de mise à jour des données utilisateur

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const currentUserData = useSelector((state) => state.userData); // Données utilisateur actuelles depuis le store

  const [updatedUserData, setUpdatedUserData] = useState({
    // Création d'un état local pour stocker les données mises à jour
    // Initialisation avec les données utilisateur actuelles
    name: currentUserData.name,
    // Ajout champfs utilisateur 
    firstName: currentUserData.firstName, // Ajout prénomp utilisateur
    lastName: currentUserData.lastName, // Ajout nom utilisateur
  });

  const handleChange = (e) => {
    setUpdatedUserData({
      ...updatedUserData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch action de mise à jour des données utilisateur avec les données mises à jour
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

