import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importez Routes au lieu de Switch
import { useSelector } from 'react-redux';
import Login from './pages/Login/login';
import UserProfile from './components/userprofile';
import UpdateProfile from './actions/updateprofile';
import Logout from './pages/Logout/logout';

const App = () => {
  
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Mon Application React/Redux</h1>
          {/* Affichez des éléments d'en-tête, de navigation, etc., ici */}
        </header>
        <main>
          <Routes> {/* Utilisez Routes au lieu de Switch */}
            <Route path="/" element={isAuthenticated ? <UserProfile /> : <Login />} />
            <Route path="/profile" element={isAuthenticated ? <UserProfile /> : <Login />} />
            <Route path="/update-profile" element={isAuthenticated ? <UpdateProfile /> : <Login />} />
            <Route path="/logout" element={isAuthenticated ? <Logout /> : <Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;




/* Dans cet exemple, nous avons utilisé React Router (react-router-dom) pour gérer la navigation entre différentes vues de l'application. Voici ce que fait ce composant App.js :

Importe les composants nécessaires, tels que Login, UserProfile, UpdateProfile, et Logout, qui sont responsables des différentes parties de l'application.

Utilise le hook useSelector pour accéder à l'état d'authentification (isAuthenticated) à partir du store Redux. Cela vous permet de déterminer si l'utilisateur est connecté ou non.

Utilise BrowserRouter pour configurer la navigation à l'aide de React Router.

Définit les différentes routes à l'intérieur d'un Switch. Les routes déterminent quel composant à afficher en fonction de l'URL actuelle. Par exemple, si l'URL est /, cela affiche le composant UserProfile si l'utilisateur est authentifié, sinon il affiche Login.

Dans chaque route, nous conditionnons l'affichage des composants en fonction de l'état d'authentification. Si l'utilisateur est authentifié, nous affichons le composant correspondant (par exemple, UserProfile), sinon nous affichons le composant Login.

Vous pouvez personnaliser les routes, les composants et l'interface utilisateur en fonction des besoins spécifiques de votre application.

N'oubliez pas de configurer correctement React Router et de l'ajouter à votre application, ainsi que de connecter votre application au store Redux pour gérer l'état d'authentification et les données de l'utilisateur. */
