const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  token: null, 
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const { token, user } = action.payload; // Extraction du token et de l'utilisateur
      return {
        ...state,
        isAuthenticated: true,
        user, 
        token,
      };

    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null, // En cas d'échec de connexion, effacez le token (mettez-le à null)
        error: action.payload,
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null, // Effacez le token en cas de déconnexion réussie
        error: null,
      };

    default:
      return state;
  }
};

export default authReducer;



  