import React from 'react';
import '../Accounts/accounts.css';

// Composant réutilisable pour un compte
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

const Accounts = () => {
  return (
    <div>
      <h2 className="sr-only">Accounts</h2>
      {/* Première instance du composant SingleAccount */}
      <SingleAccount
        title="Argent Bank Checking (x5846)"
        amount="1500 $"
        description="Available Balance"
      />

      {/* Deuxième instance du composant SingleAccount */}
      <SingleAccount
        title="Argent Bank Savings (x1234)"
        amount="2500 $"
        description="Available Balance"
      />

      {/* Troisième instance du composant SingleAccount */}
      <SingleAccount
        title="Argent Bank Credit Card (x9876)"
        amount="375 $"
        description="Credit Limit"
      />
    </div>
  );
};

export default Accounts;
