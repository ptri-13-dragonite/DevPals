'use client';

import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import ContainerMedium from '@/components/ContainerMed';
import Navbar2 from '@/components/NavBar2';
import Intro from '@/components/Home/Intro';
import Details from '@/components/Home/Details';
import Features from '@/components/Home/Features';
import ChoosePal from '@/components/Home/ChoosePal';
import Footer from '@/components/Footer';

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <p> Welcome User</p>
    );
  }

  return (

    <div>
      <div>
        <p> Not Signed in</p>
        <button className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" type="button" onClick={() => signIn('github')}>Sign in with github</button>
      </div>
      <Navbar2 />
      <Intro />
      <Details />
      <Features />
      <ChoosePal />
      <Footer />
    </div>
  );
}
