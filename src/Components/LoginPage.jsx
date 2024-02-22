/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginStatus, setLoginStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
        setLoginStatus('Login successful!'); // Set success message
      } else {
        // Handle login failure (e.g., show error message)
        console.error('Login failed');
        setLoginStatus('Login failed. Please check your credentials.'); // Set error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginStatus('Login failed. Please try again.'); // Set error message
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
          {loginStatus && <p>{loginStatus}</p>}
        </form>
        <p>
          Don't have an account? <Link to="/signup">Register</Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
