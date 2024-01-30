// LoginPage.jsx
import React, { useState } from 'react';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your backend
    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect to dashboard)
        console.log('Login successful');
      } else {
        // Handle login failure (e.g., show error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="auth-page">
        <h2>Login</h2>
        <p>Welcome back!</p>
        <form onSubmit={handleSubmit}>
          {/* Add login/signup form fields */}
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>
          Dont have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
