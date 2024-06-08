import React from 'react';
import Link from 'next/link';

function NavbarDash() {
  return (
    <div className="navbar bg-base-100 border-b-2 border-primary">
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost text-primary"
          style={{
            fontFamily: 'Mansalva', fontSize: '38px', fontWeight: '400', lineHeight: '45.77px', letterSpacing: '-0.06em',
          }}
        >
          DevPals
        </Link>
      </div>
      <div className="navbar-end">
        <Link
          href="/pal"
          className="btn bg-base-100 border-primary text-primary"
          style={{
            fontFamily: 'Montserrat', fontSize: 'var(--font-sizeH6)', fontWeight: '400', lineHeight: '28px', borderWidth: '1px',
          }}
        >
          View Pal
        </Link>
      </div>
    </div>
  );
}

export default NavbarDash;
