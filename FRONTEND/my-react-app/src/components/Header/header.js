import React from 'react';
import '../Header/header.css';
import logo from './../../designs/img/argentBankLogo.png';
import 'font-awesome/css/font-awesome.min.css'; // Importez le CSS de FontAwesome



function Header() {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={logo} // Utilisez la variable "logo" comme source de l'image
          alt="Argent Bank Logo"
        />
      
      </a>
      <div>
        <a className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
      
    </nav>
  );
}

export default Header;

