import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Navbar2 from '@/components/NavBar2';

interface DashboardLayout {
    children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayout): JSX.Element {
  return (
    <div>
      <Navbar2 />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
