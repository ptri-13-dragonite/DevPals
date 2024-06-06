import React from 'react';
import Image from 'next/image';

function Intro() {
  return (
    <div
      className="w-full bg-base-100 flex justify-center"
      style={{
        width: '100%',
        height: '860px',
        padding: '100px 0 0 0',
        gap: '24px',
        opacity: '1',
      }}
    >
      <div className="flex gap-6 mx-auto">
        <div
          className="flex-shrink-0"
          style={{
            width: '619px',
            height: '660px',
            opacity: '1',
          }}
        >
          <Image
            src="/images/img-header.png"
            alt="Intro Image"
            width={619}
            height={660}
            style={{ opacity: '1' }}
          />
        </div>
        <div
          className="flex flex-col justify-center bg-primary rounded-2xl"
          style={{
            width: '597px',
            height: '660px',
            padding: '0 44px',
            gap: '32px',
            background: '#4C5B92',
            opacity: '1',
          }}
        >
          <div
            className="flex flex-col"
            style={{
              width: '509px',
              height: '210px',
              opacity: '1',
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: 'Montserrat',
                fontSize: '64px',
                fontWeight: '600',
                lineHeight: '69.76px',
                letterSpacing: '-0.01em',
                color: '#FAFAFA',
              }}
            >
              Boost Your Job Search with
              {' '}
              <br />
              a Virtual Pal
            </p>
          </div>
          <div
            className="flex flex-col"
            style={{
              width: '509px',
              height: '82px',
              opacity: '1',
            }}
          >
            <p
              className="text-left"
              style={{
                fontFamily: 'Space Grotesk',
                fontSize: '32px',
                fontWeight: '400',
                lineHeight: '40.83px',
                color: '#EFEFEF', // Text color
              }}
            >
              Care for it by Solving Leetcode, Pushing Commits,
              {' '}
              <br />
              and Applying for Jobs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
