import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <div
      className="flex flex-col items-left bg-base-100"
      style={{
        width: '100%',
        padding: '80px 120px 20px 120px',
        gap: '40px',
        opacity: '1',
      }}
    >
      <div
        className="flex flex-col items-start justify-between"
        style={{
          width: '1200px',
          height: '270px',
          gap: '0px',
          opacity: '1',
        }}
      >
        <div
          className="flex flex-col items-start"
          style={{
            width: '150px',
            height: '46px',
            opacity: '1',
          }}
        >
          <p
            className="text-left text-primary"
            style={{
              fontFamily: 'Mansalva',
              fontSize: '38px',
              fontWeight: '400',
              lineHeight: '45.77px',
              letterSpacing: '-0.06em',
            }}
          >
            DevPals
          </p>
        </div>
        <div
          className="flex flex-col items-start"
          style={{
            width: '809.5px',
            height: '124px',
            opacity: '1',
          }}
        >
          <p
            className="text-left"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '30.62px',
              color: '#333333',
            }}
          >
            Discover a new way to stay motivated and focused on your job search journey with Resumates. Let your virtual pet be your ultimate job search mate, keeping you company and cheering you on every step of the way.
          </p>
        </div>
        <Link href="/login" className="btn bg-base-100 border-primary text-primary" style={{ fontFamily: 'Montserrat', fontSize: 'var(--font-sizeH6)', fontWeight: '400', lineHeight: '28px', borderWidth: '1px' }}>
          Pick a Pal
        </Link>
      </div>
      <div
        className="flex items-start"
        style={{
          width: '1200px',
          opacity: '1',
        }}
      >
        <p
          className="text-left text-primary"
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
          }}
        >
          © 2024 DevPals. All rights reserved. | Licensed under MIT License
        </p>
      </div>
    </div>
  );
}

export default Footer;
