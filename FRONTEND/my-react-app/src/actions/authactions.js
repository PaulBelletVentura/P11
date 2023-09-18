import axios from 'axios';

/**
 * Action de connexion avec gestion du token.
 * @param {Object} userData - Les données d'authentification de l'utilisateur.
 * @param {string} userData.email - L'adresse e-mail de l'utilisateur.
 * @param {string} userData.password - Le mot de passe de l'utilisateur.
 * @returns {Promise} Promise résolue lorsque la connexion réussit.
 */
export const login = (userData) => {
  return async (dispatch) => {
    try {
      // Requête API pour connecter les données d'authentification
      const response = await axios.post('http://localhost:3001/api/v1/user/login', userData);

      const authToken = response.data.body.token;

      // Stockage du token dans le localStorage
      localStorage.setItem('authToken', authToken);

      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.body.token}`;
      const responseUser = await axios.post('http://localhost:3001/api/v1/user/profile');

      // Si la requête de connexion réussit, action de succès de connexion
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          token: response.data.body.token, // Token de connexion
          user: {
            firstName: responseUser.data.body.firstName, // Prénom de l'utilisateur
            lastName: responseUser.data.body.lastName,
            email: responseUser.data.body.email,
            userName: responseUser.data.body.userName,
          },
        },
      });

      // Réponse complète de l'API pour une utilisation future si nécessaire
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

/**
 * Action de déconnexion.
 * Déconnecte l'utilisateur en supprimant le token et redirige vers la page d'accueil.
 */
export const logout = () => {
  return async (dispatch) => {
    // Suppression du token côté client
    localStorage.removeItem('authToken');

    // Dispatch action de succès de déconnexion
    dispatch({
      type: 'LOGOUT_SUCCESS',
    });

    // Redirection de l'utilisateur vers la page d'accueil après la déconnexion
    window.location.href = '/';
  };
};


