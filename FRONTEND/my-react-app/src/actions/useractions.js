import axios from 'axios';

// Action pour récupérer les données de l'utilisateur
export const fetchUserData = () => {
  return async (dispatch) => {
    try {
      // Requête API pour obtenir les données de l'utilisateur 
      const token = localStorage.getItem('token'); // Récupération du token JWT du localStorage

      const response = await axios.get('http://localhost:3001/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Dispatch action avec les données récupérées depuis l'API
      dispatch({
        type: 'FETCH_USER_DATA_SUCCESS',
        payload: response.data, // Les données de l'utilisateur depuis l'API
      });
    } catch (error) {
      // En cas d'erreur, dispatchez une action d'échec de récupération des données
      dispatch({
        type: 'FETCH_USER_DATA_FAILURE',
        payload: error.message, // Payloas à revoir
      });
    }
  };
};


  