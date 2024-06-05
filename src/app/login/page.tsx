import React from 'react';
import LoginInput from '@/components/LoginInput';
import Oauth from '@/components/Oauth';

function Login() {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col justify-center items-center">
      <h1
        className="text-3xl mb-6 text-primary"
        style={{
          fontFamily: 'Montserrat',
        }}
      >
        Login
      </h1>
      <div className="card w-96 bg-primary shadow-xl p-6 rounded-2xl">
        <LoginInput />
      </div>
      <div className="mt-6 bg-accent p-4 rounded-2xl">
        <Oauth />
      </div>
    </div>
  );
}

export default Login;
