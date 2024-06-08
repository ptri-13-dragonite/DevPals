'use client';

import React, { useEffect, useState } from 'react';
import LoginInput from '@/components/LoginInput';
import Oauth from '@/components/Oauth';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      console.log('session obj ->', session);
      console.log('token ->', session.accessToken);
      router.push('/dashboard');
    }
  }, [session, router]);

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
