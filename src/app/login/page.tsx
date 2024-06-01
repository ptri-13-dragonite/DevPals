import React from 'react';
import LoginInput from '@/components/LoginInput';
import Oauth from '@/components/Oauth';

function Login() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6">Login</h1>
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <LoginInput />
      </div>
      <div className="mt-6">
        <Oauth />
      </div>
    </div>
  );
}

export default Login;
