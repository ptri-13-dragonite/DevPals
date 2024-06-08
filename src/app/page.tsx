'use client';

import Navbar from '@/components/Navbars/Navbar';
import Intro from '@/components/Home/Intro';
import Details from '@/components/Home/Details';
import Features from '@/components/Home/Features';
import ChoosePal from '@/components/Home/ChoosePal';
import FooterLanding from '@/components/Footers/FooterLanding';

import React, { useEffect } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  // const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (session) {
  //     router.push('/dashboard');
  //   }
  // }, [session, router]);

  return (

    <div>
      <Navbar />
      <Intro />
      <Details />
      <Features />
      <ChoosePal />
      <FooterLanding />
    </div>
  );
}
