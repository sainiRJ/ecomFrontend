import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/login');
    // Handle form submission here
    try {
      const response = await axios.post('http://localhost:8000/register', {
        email,
        password,
      });
      console.log('Signup successful!', response.data);
      // Handle successful login, redirect, or any other action
    } catch (error) {
        console.error('Request failed:', error.message);  
    }
  }

  return (
    <div className="registration-form">
      <h1>Register</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          placeholder="Enter Email" 
          name="email" 
          id="email" 
          required 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="psw">Password</label>
        <input 
          type="password" 
          placeholder="Enter Password" 
          name="psw" 
          id="psw" 
          required 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;