import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountChecking from '../../components/Accounts/accountchecking';
import AccountSavings from '../../components/Accounts/accountsavings';
import AccountCard from '../../components/Accounts/accountcard';
import '../../pages/Welcome/welcome.css'

function Welcome() {
  
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="bgdark">
      <h1 className="title">Welcome back<br />Tony Jarvis!</h1>
      <Link to="/userprofil">
      <button className="edit-button">Edit Name</button>

      </Link>
      <AccountChecking />
      <AccountSavings />
      <AccountCard />

    </div>
  );
}

export default Welcome;