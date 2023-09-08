import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authactions';
import '../Login/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await dispatch(login(formData));

      console.log(response.data); // "token" est présent dans la réponse ?
  
      // Réinitialisation du formulaire
      setFormData({
        email: '',
        password: '',
      });
    } catch (error) {
      // erreur
      console.error('Login error:', error.message);
    }
  };

  return (
    <div>
      <section className="sign-in-content">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <label className="input-remember">
            <input type="checkbox" id="remember-me" />
            <span className="checkbox-label">Remember Me</span>
          </label>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;

