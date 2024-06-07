import Navbar from '@/components/Navbars/Navbar';
import Intro from '@/components/Home/Intro';
import Details from '@/components/Home/Details';
import Features from '@/components/Home/Features';
import ChoosePal from '@/components/Home/ChoosePal';
import FooterLanding from '@/components/Footers/FooterLanding';

export default function Home() {
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
