import axios from 'axios';

// Action pour mettre à jour l'userName de l'utilisateur
export const updateUser = (userData) => {
  return async (dispatch) => {
    try {
      // Requête API pour mettre à jour userName
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData);

      // Extraction données de l'utilisateur de la réponse API
      const updatedUser = response.data.body;

      // Si la requête de mise à jour réussit, dispatch une action de succès
      dispatch({
        type: 'UPDATE_USER_SUCCESS',
        payload: {
          user: updatedUser, // Mise à jour utilisateur dans le store Redux
        },
      });

    
    } catch (error) {
      // Si la requête échoue, dispatch une action d'échec avec l'erreur
      dispatch({
        type: 'UPDATE_USER_FAILURE',
        payload: error.message,
      });

      // Si erreur dans le composant, autres actions si nécessaires
      throw error;
    }
  };
};


  