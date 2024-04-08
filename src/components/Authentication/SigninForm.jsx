import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

const SigninForm = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.adminSignIn({ emailAddress, password });
      localStorage.setItem('token', response.data.token);
      navigate('/overview');
    } catch (error) {
      setError('Invalid email address or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSignin}>
        <label>Email Address:</label>
        <input type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SigninForm;
