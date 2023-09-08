import React from 'react';

function UserProfile() {
  
  const userData = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p><strong>First Name:</strong> {userData.firstName}</p>
        <p><strong>Last Name:</strong> {userData.lastName}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        {/* Ajoutez d'autres informations du profil ici */}
      </div>
    </div>
  );
}

export default UserProfile;
