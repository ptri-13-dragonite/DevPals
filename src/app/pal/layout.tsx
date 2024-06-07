import React from 'react';
import NavbarPal from '@/components/Navbars/NavbarPal';
import Footer from '@/components/Footers/Footer';

interface PalLayout {
    children: React.ReactNode;
}

function PalLayout({ children }: PalLayout): JSX.Element {
  return (
    <div>
      <NavbarPal />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  );
}

export default PalLayout;
