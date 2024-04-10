import React from 'react';
import SigninForm from '../components/Authentication/SigninForm';

const SigninPage = ({ onSignIn }) => {
  return (
    <div className="signin-page">
      <SigninForm onSignIn={onSignIn} />
    </div>
  );
};

export default SigninPage;
