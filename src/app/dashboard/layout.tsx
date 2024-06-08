import React from 'react';
import Footer from '@/components/Footers/Footer';
import NavbarDash from '@/components/Navbars/NavbarDash';

interface DashboardLayout {
    children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayout): JSX.Element {
  return (
    <div>
      <NavbarDash />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
