import axios from 'axios';

// Action de connexion avec gestion du token
export const login = (userData) => {
  return async (dispatch) => {
    try {
      // Requête API pour connecter les données d'authentification
      const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);

      // Si la requête de connexion réussit, action de succès de connexion
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token: response.data.token, // Token de connexion
          user: response.data.user, // Prénom de l'utilisateur ici
        },
      });
      
      

      // Zéponse complète de l'API pour une utilisation future si nécessaire
      return response;
    } catch (error) {
      // Si la requête de connexion échoue, dispatch de l'action d'échec de connexion avec l'erreur
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.message, // Payload à revoir
      });

      // Erreur gérée dans le composant
      throw error;
    }
  };
};

// Action de déconnexion
export const logout = () => {
  return async (dispatch) => {
    // Suppression du token côté client 

    // Dispatch action de succès de déconnexion
    dispatch({
      type: 'LOGOUT_SUCCESS',
    });

    // Redirection de l'utilisateur vers la page d'accueil après la déconnexion
    window.location.href = '/'; 
  };
};


