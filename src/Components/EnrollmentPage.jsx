import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnrollmentPage = () => {
  const [code, setCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleEnroll = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goBackToHome = () => {
    navigate('/'); // This will navigate to the Landing Page which is set as the root route
  };

  // Styles
  const pageStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#FFF', // White text for better visibility
    textShadow: '2px 2px 4px #000', // Text shadow for better readability
    position: 'relative', // Needed for absolute positioning of the back button
  };

  const inputStyles = {
    margin: '20px 0',
    padding: '10px',
    width: '300px',
    fontSize: '16px',
    backgroundColor: '#FFF', // White background for the input
    borderColor: '#000', // Black border for the input
    color: '#000', // Black text for better visibility
  };

  const buttonStyles = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50', // A green background for the button
    color: '#FFF', // White text for the button
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow for depth
  };

  const backButtonStyles = {
    position: 'absolute',
    top: '50%',
    left: '20px',
    transform: 'translateY(-50%)',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#f44336', // Red background for the back button
    color: '#FFF', // White text for the button
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 1000,
    borderRadius: '10px', // Rounded corners for the modal
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adding shadow for depth
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  };

  return (
    <div style={pageStyles}>
      <button style={backButtonStyles} onClick={goBackToHome}>Return to Home</button>
      <h2>Enter Enrollment Code</h2>
      <textarea
        style={inputStyles}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter Code"
        rows="4"
      />
      <button style={buttonStyles} onClick={handleEnroll}>Enroll</button>

      {showModal && (
        <>
          <div style={overlayStyles} onClick={closeModal} />
          <div style={modalStyles}>
            <p>You have successfully enrolled!</p>
            <button style={buttonStyles} onClick={closeModal}>Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default EnrollmentPage;

