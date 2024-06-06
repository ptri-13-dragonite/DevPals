import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ChoosePal() {
  return (
    <div
      className="flex flex-col items-center bg-primary"
      style={{
        width: '100%',
        padding: '120px 100px',
        gap: '48px',
        opacity: '1',
      }}
    >
      <div className="flex gap-6">
        {['cta-pet-04.png', 'cta-pet-03.png', 'cta-pet-02.png', 'cta-pet-01.png'].map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{
              width: '292px',
              height: '349px',
              padding: '48px 28px',
              borderRadius: '24px 0 0 0',
              opacity: '1',
            }}
          >
            <Image
              src={`/images/${img}`}
              alt={`Choose Pal ${index + 1}`}
              width={292}
              height={349}
              style={{ opacity: '1' }}
              className="rounded-tl-[24px]"
            />
          </div>
        ))}
      </div>
      <div
        className="flex flex-col items-center"
        style={{
          width: '1240px',
          gap: '24px',
          opacity: '1',
        }}
      >
        <p
          className="text-center"
          style={{
            fontFamily: 'Montserrat',
            fontSize: '64px',
            fontWeight: '600',
            lineHeight: '69.76px',
            letterSpacing: '-0.01em',
            color: '#FAFAFA',
          }}
        >
          Ready to embark on your job search adventure with DevPals?
        </p>
        <p
          className="text-center"
          style={{
            fontFamily: 'Montserrat',
            fontSize: '26px',
            fontWeight: '400',
            color: '#FAFAFA',
          }}
        >
          Choose your pal and get started today!
        </p>
        <Link href="/login">
          <button
            className="rounded-[12px] bg-secondary"
            style={{
              padding: '14px 36px',
              gap: '10px',
              opacity: '1',
            }}
          >
            <p
              className="text-center"
              style={{
                fontFamily: 'Montserrat',
                fontSize: 'var(--font-sizeH6)',
                fontWeight: '400',
                lineHeight: '28px',
                color: '#FAFAFA',
              }}
            >
              Get Started
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ChoosePal;
