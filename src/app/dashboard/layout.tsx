import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface DashboardLayout {
    children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayout): JSX.Element {
  return (
    <div>
      <div>
        <h1 style={{ fontFamily: 'Montserrat, sans-serif' }}>Hello, World!</h1>
        <p style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          This is a paragraph using the Space Grotesk font.
        </p>
      </div>
      <Navbar />
      <main>
        { children }
      </main>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
