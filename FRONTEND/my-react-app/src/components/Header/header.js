import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';
import logo from './../../designs/img/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authactions';

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user); // Obtenez les données de l'utilisateur depuis le store Redux
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            
            <button className="main-nav-item" onClick={handleSignOut}>
              Sign Out
            </button>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;







