import React from 'react';
import Image from 'next/image';

function Features() {
  return (
    <div
      className="flex flex-col items-center bg-base-100"
      style={{
        width: '100%',
        padding: '120px 100px',
        gap: '48px',
        opacity: '1',
      }}
    >
      <div
        className="flex flex-col items-center"
        style={{
          width: '1240px',
          height: '126px',
          opacity: '1',
        }}
      >
        <p
          className="text-center"
          style={{
            fontFamily: 'Montserrat',
            fontSize: '52px',
            fontWeight: '600',
            lineHeight: '63.39px',
            color: '#333333',
          }}
        >
          Unlock Your Potential
          {' '}
          <br />
          with DevPals
        </p>
      </div>
      <div className="flex gap-6">
        <div
          className="bg-secondary rounded-2xl flex flex-col items-center p-8"
          style={{
            width: '397.33px',
            height: '337.33px',
            opacity: '1',
          }}
        >
          <Image
            src="/images/icon-mood.svg"
            alt="Motivation Icon"
            width={39.33}
            height={39.33}
            className="mt-3"
            style={{ opacity: '1' }}
          />
          <p
            className="text-center mt-4"
            style={{
              fontFamily: 'Montserrat',
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '39.01px',
              letterSpacing: '0.01em',
              color: '#FAFAFA',
            }}
          >
            Stay Motivated
            <br />
            <br />
          </p>
          <p
            className="text-center mt-4"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '30.62px',
              color: '#FAFAFA',
            }}
          >
            Keep your pal alive by actively engaging in career prep activities.
          </p>
        </div>
        <div
          className="bg-primary rounded-2xl flex flex-col items-center p-8"
          style={{
            width: '397.33px',
            height: '337.33px',
            opacity: '1',
          }}
        >
          <Image
            src="/images/icon-calendar_month.svg"
            alt="Consistency Icon"
            width={40}
            height={39.33}
            className="mt-3"
            style={{ padding: '3px 5px 3px 5px', opacity: '1' }}
          />
          <p
            className="text-center mt-4"
            style={{
              fontFamily: 'Montserrat',
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '39.01px',
              letterSpacing: '0.01em',
              color: '#FAFAFA',
            }}
          >
            Promote Consistency
          </p>
          <p
            className="text-center mt-4"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '30.62px',
              color: '#FAFAFA',
            }}
          >
            Regularly practice leetcode challenges and contribute code to ensure steady progress.
          </p>
        </div>
        <div
          className="bg-accent rounded-2xl flex flex-col items-center p-8"
          style={{
            width: '397.33px',
            height: '337.33px',
            opacity: '1', // Changed to 1 for visibility during development
          }}
        >
          <Image
            src="/images/icon-rocket_launch.svg" // replace with your image path
            alt="Self-Improvement Icon"
            width={38.95}
            height={38.95}
            className="mt-3"
            style={{ opacity: '1' }}
          />
          <p
            className="text-center mt-4"
            style={{
              fontFamily: 'Montserrat',
              fontSize: '32px',
              fontWeight: '600',
              lineHeight: '39.01px',
              letterSpacing: '0.01em',
              color: '#FAFAFA',
            }}
          >
            Encourage
            {' '}
            <br />
            Self-Improvement
          </p>
          <p
            className="text-center mt-4"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: '24px',
              fontWeight: '400',
              lineHeight: '30.62px',
              color: '#FAFAFA',
            }}
          >
            Enhance your developer skills and boost your employability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
