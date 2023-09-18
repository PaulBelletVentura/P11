import axios from 'axios';

/**
 * Action pour mettre à jour le nom d'utilisateur de l'utilisateur.
 * @param {Object} userData - Les données de mise à jour de l'utilisateur.
 * @param {string} userData.userName - Le nouveau nom d'utilisateur.
 * @returns {Promise} Promise résolue lorsque la mise à jour réussit.
 */
export const updateUser = (userData) => {
  return async (dispatch) => {
    try {
      // Requête API pour mettre à jour le nom d'utilisateur
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData);

      // Extraction des données de l'utilisateur de la réponse API
      const updatedUser = response.data.body;

      // Si la requête de mise à jour réussit, dispatch une action de succès
      dispatch({
        type: 'UPDATE_USER_SUCCESS',
        payload: {
          user: updatedUser, // Mise à jour de l'utilisateur dans le store Redux
        },
      });

      // Réponse complète de l'API pour une utilisation future si nécessaire
      return response;
    } catch (error) {
      // Si la requête échoue, dispatch une action d'échec avec l'erreur
      dispatch({
        type: 'UPDATE_USER_FAILURE',
        payload: error.message,
      });

      // Gestion de l'erreur dans le composant, autres actions si nécessaires
      throw error;
    }
  };
};
