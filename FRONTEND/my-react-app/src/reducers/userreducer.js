const initialState = {
  userData: null, 
  error: null, 
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_DATA':
      
      return {
        ...state,
        userData: action.payload,
        error: null,
      };


    default:
      return state;
  }
};

export default userReducer;


  