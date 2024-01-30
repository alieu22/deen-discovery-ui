import React, { useState } from 'react';
import NavBar from './Navbar';
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your backend API to add the user using the 'user' state
    // You can use fetch or any library like axios here
    // Example using fetch:
    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data as needed
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <NavBar />
      <div className="auth-page">
        <h2>Register</h2>
        <p>Create an account to use the full range of functions.</p>
        <form onSubmit={handleSubmit}>
          {/* Add login/signup form fields */}
          <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} />
          <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} />
          <input type="text" placeholder="Email" name="email" onChange={handleChange} />
          <input type="text" placeholder="Username" name="username" onChange={handleChange} />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} />
          <button type="submit">Register</button>
          <p>Already have an account? <Link to="/login">login</Link></p>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
