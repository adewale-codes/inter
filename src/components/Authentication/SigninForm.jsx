import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

const SigninForm = () => {
  const [credentials, setCredentials] = useState({ emailAddress: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.adminSignIn(credentials);
      console.log(response.data);
      const token = response.data.sessionToken;
      localStorage.setItem('token', token);

      navigate('/overview');
    } catch (error) {
      console.log(error);
      setError('Invalid email address or password. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({ ...prevCredentials, [name]: value }));
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-center h-full w-full items-center">
        <div className="flex items-center justify-center">
          <div className="bg-sblack h-full w-full p-5">
            <div className="flex text-white py-2 justify-center">
              <p>Welcome to ISW5</p>
            </div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <form className="flex flex-col text-white gap-2 items-center" onSubmit={handleSignin}>
              <div>
                <input type="email" name="emailAddress" className="rounded p-2" value={credentials.emailAddress} placeholder="email" onChange={handleChange} required />
              </div>
              <div>
                <input type="password" name="password" className="rounded p-2" value={credentials.password} placeholder="password" onChange={handleChange} required />
              </div>
              
              <button className="bg-bblue rounded py-2 px-10" type="submit">Sign In</button>
            </form>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default SigninForm;
