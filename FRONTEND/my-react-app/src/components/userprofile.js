import React, { useEffect } from 'react'; // Import useEffect
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector et useDispatch
import { fetchUserData } from '../actions/useractions'; // Import de l'action pour récupérer les données utilisateur

const UserProfile = () => {
  const currentUserData = useSelector((state) => state.userData); // Données utilisateur depuis le store
  const dispatch = useDispatch(); // Initialisation de useDispatch pour lancer des actions

  useEffect(() => {
    // Utilisation de useEffect pour charger les données utilisateur lors du rendu initial
    dispatch(fetchUserData()); // Dispatch action pour récupérer les données utilisateur depuis l'API
  }, [dispatch]); // Ajoutez [dispatch] pour éviter les avertissements de dépendances manquantes 

  return (
    <div>
      <h1>Welcome back</h1>
      <div>
        <p><strong>Nom :</strong> {currentUserData.name}</p>
      </div>
      <div>
        <p><strong>Email :</strong> {currentUserData.email}</p>
      </div>
      {/* Ajoutez d'autres données utilisateur ici si nécessaire */}
    </div>
  );
};

export default UserProfile;



