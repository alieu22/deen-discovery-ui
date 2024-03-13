import React, { useEffect } from 'react';
import NavBar from './Navbar';

const LogoutPage = ({ onLogout }) => {
  useEffect(() => {
    // Implement your logout logic
    onLogout();
  }, [onLogout]);

  return (
    <>
      <NavBar />
      <div className="auth-page">
        <h2>Logout</h2>
        <p>You have been successfully logged out.</p>
      </div>
    </>
  );
};

export default LogoutPage;


