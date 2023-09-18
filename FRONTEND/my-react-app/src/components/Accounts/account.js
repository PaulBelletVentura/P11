import React from 'react';
import '../Accounts/accounts.css';
import PropTypes from 'prop-types'; // Import de PropTypes depuis la bibliothèque prop-types

/**
 * Composant réutilisable pour représenter un compte.
 */
const SingleAccount = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">See Transactions</button>
      </div>
    </section>
  );
};

/**
 * Composant principal pour afficher plusieurs comptes.
 */
const Accounts = () => {
  return (
    <div>
      <h2 className="sr-only">Accounts</h2>

      <SingleAccount
        title="Argent Bank Checking (x5846)"
        amount="1500 $"
        description="Available Balance"
      />

      <SingleAccount
        title="Argent Bank Savings (x1234)"
        amount="2500 $"
        description="Available Balance"
      />

      <SingleAccount
        title="Argent Bank Credit Card (x9876)"
        amount="375 $"
        description="Credit Limit"
      />
    </div>
  );
};

// Spécification des PropTypes pour le composant SingleAccount
SingleAccount.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Accounts;
