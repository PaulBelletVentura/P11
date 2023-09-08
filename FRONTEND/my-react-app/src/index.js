import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Importez le Provider
import store from './store'; // Importez votre store Redux
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);