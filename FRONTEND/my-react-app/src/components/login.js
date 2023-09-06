// Importé les dépendances nécessaires, notamment useState pour gérer l'état local du formulaire et useDispatch pour envoyer l'action de login au store Redux.
import React, { useState } from 'react'; // Utilisé le hook useState pour gérer l'état local du formulaire, notamment les champs email et mot de passe.
import { useDispatch } from 'react-redux'; // Utilisé le hook useDispatch pour accéder à la fonction dispatch qui nous permet d'envoyer l'action login au store Redux lorsque l'utilisateur clique sur le bouton de soumission.
import { login } from '../actions/authactions';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => { //fonction handleChange pour mettre à jour l'état du formulaire à mesure que l'utilisateur saisit ses informations.
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => { // fonction handleSubmit pour gérer la soumission du formulaire. Cette fonction dispatche l'action login avec les données du formulaire au store Redux, puis réinitialise le formulaire.
    e.preventDefault();

    // Dispatch l'action de login avec les données du formulaire
    dispatch(login(formData));

    // Réinitialise le formulaire
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <label class="checkbox-container">
        <input type="checkbox" id="remember-me"></input>
        <span class="checkbox-label">Remember Me</span>
    </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
