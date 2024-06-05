import Image from 'next/image';
import ContainerMedium from '@/components/ContainerMed';
import Navbar2 from '@/components/NavBar2';
import Intro from '@/components/Home/Intro';
import Details from '@/components/Home/Details';
import Features from '@/components/Home/Features';
import ChoosePal from '@/components/Home/ChoosePal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar2 />
      <Intro />
      <Details />
      <Features />
      <ChoosePal />
      <Footer />
    </div>
  );
}
