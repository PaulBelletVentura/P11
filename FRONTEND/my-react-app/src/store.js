import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import authReducer from './reducers/authreducers';
import userReducer from './reducers/userreducer'; 


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  
});

// Middleware Redux Thunk pour gérer les actions asynchrones
const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
