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
        token: null, // En cas d'échec de connexion, effacement le token (mis à null)
        error: action.payload,
      };

    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null, // Effacement du token en cas de déconnexion réussie
        error: null,
      };

case 'UPDATE_USER_SUCCESS':
  return {
    ...state,
    user: action.payload.user, // Mise à jour utilisateur dans le store Redux
  };


    default:
      return state;
  }
};

export default authReducer;



  