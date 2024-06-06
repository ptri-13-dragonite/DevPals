import React from 'react';
import Link from 'next/link';

function Navbar2() {
  return (
    <div className="navbar bg-base-100 border-b-2 border-primary">
      <div className="navbar-start">
        <Link href="/login" className="btn btn-ghost text-primary" style={{ fontFamily: 'Mansalva', fontSize: '38px', fontWeight: '400', lineHeight: '45.77px', letterSpacing: '-0.06em' }}>
          DevPals
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/login" className="btn bg-base-100 border-primary text-primary" style={{ fontFamily: 'Montserrat', fontSize: 'var(--font-sizeH6)', fontWeight: '400', lineHeight: '28px', borderWidth: '1px' }}>
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Navbar2;

