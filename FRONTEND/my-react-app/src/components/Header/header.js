import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css';
import logo from './../../designs/img/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/authactions';

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  // Accédez au prénom de l'utilisateur depuis responseUser.data.body
  const firstName = useSelector((state) => state.auth.user ? state.auth.user.firstName : '');

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
            <span>{firstName}</span> {/* Afficher le prénom ici */}
            <button className="main-nav-item" onClick={handleSignOut}>
              Sign Out!
            </button>
            <Link className="main-nav-item" to="/userprofil">
              User Profile
            </Link>
            
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









