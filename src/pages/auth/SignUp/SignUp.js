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
      const response = await axios.post('http://localhost:5001/register', {
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
    <div className="wrapper">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" required onChange={(e) => setEmail(e.target.value)} />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
