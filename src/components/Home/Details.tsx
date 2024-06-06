import Image from 'next/image';
import React from 'react';

function Details() {
  return (
    <div
      className="flex flex-col items-center bg-base-100"
      style={{
        width: '100%',
        height: '968px',
        padding: '100px 0 0 0',
        gap: '24px',
        opacity: '1',
      }}
    >
      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <div
            className="bg-accent rounded-2xl flex items-start justify-start p-14"
            style={{
              width: '608px',
              height: '324px',
              opacity: '1',
            }}
          >
            <p
              className="text-left text-neutral"
              style={{
                fontFamily: 'Montserrat',
                fontSize: '48px',
                fontWeight: '600',
                lineHeight: '52.67px',
              }}
            >
              Turn Your Job Search into
              {' '}
              <br />
              an Engaging Relationship
            </p>
          </div>
          <div
            className="bg-secondary rounded-2xl flex items-center justify-center"
            style={{
              width: '608px',
              height: '420px',
              padding: '56px 0 0 0',
              opacity: '1',
            }}
          >
            <Image
              src="/images/img-intro.png"
              alt="Centered Image"
              width={608}
              height={420}
              className="rounded-tl-[33px]"
              style={{ opacity: '1' }}
            />
          </div>
        </div>
        <div
          className="bg-primary rounded-2xl flex items-start justify-start p-14"
          style={{
            width: '608px',
            height: '768px',
            opacity: '1',
          }}
        >
          <p
            className="text-left text-neutral"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '32px',
              fontWeight: '400',
              lineHeight: '40.83px',
            }}
          >
            DevPals transforms your job search into an engaging and motivating experience by introducing a virtual pal that depends on your diligence for survival.
            This unique approach encourages you to consistently solve leetcode problems, push commits, and apply to jobs.
            As you care for your pal, you cultivate self-discipline and improvement, making your job preparation both productive and rewarding.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
