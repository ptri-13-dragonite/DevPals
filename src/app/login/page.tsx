'use client';

import React from 'react';
import LoginInput from '@/components/LoginInput';
import Oauth from '@/components/Oauth';
import { useEffect, useState} from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

function Login() {
  // const { data: session } = useSession();
  // const [userData, setUserData] = useState(null);
  // console.log('login page', session);
  // useEffect(() => {
  //   if (session?.accessToken) {
  //     console.log('user had token', session.accessToken);
      
  //   }

  // },[session]);
  
  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-6">Sign up / Login</h1>
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
