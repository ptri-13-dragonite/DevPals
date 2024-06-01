import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PalLayout {
    children: React.ReactNode;
}

function PalLayout({ children }: PalLayout): JSX.Element {
  return (
    <div>
      <Navbar />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  );
}

export default PalLayout;
