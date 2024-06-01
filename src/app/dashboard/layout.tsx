import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DashboardLayout {
    children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayout): JSX.Element {
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

export default DashboardLayout;
