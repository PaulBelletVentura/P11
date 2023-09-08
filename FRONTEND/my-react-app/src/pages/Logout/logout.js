import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../actions/authactions'; // Import action de logout

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch action de logout
    dispatch(logout());
  };

  return (
    <div>
      
      <button onClick={handleLogout}>Déconnexion</button>
    </div>
  );
};

export default Logout;

