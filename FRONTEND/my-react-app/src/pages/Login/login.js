import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/authactions';
import { useNavigate } from 'react-router-dom'; 
import '../Login/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

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

      console.log(response.data); 

      // Réinitialisation formulaire
      setFormData({
        email: '',
        password: '',
      });

      // Redirection vers /welcome après une connexion réussie
      navigate('/welcome'); // 
    } catch (error) {
      
      console.error('Login error:', error.message);
    }
  };

  return (
    <div className="bgdark">
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



