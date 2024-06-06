import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

function LinkedInCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <a href="https://www.linkedin.com/mynetwork/grow/" target="_blank" rel="noopener noreferrer">
        <figure className="rounded-t-lg overflow-hidden">
          <Image src="/images/LinkedIn_logo.png" alt="LinkedIn Logo" width={928} height={548} />
        </figure>
        <div className="card-body" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <h2 className="card-title" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Grow your Network!
          </h2>
          <p>Your network is your networth</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Num of Connections</div>
            <div className="badge badge-outline" style={{ fontFamily: 'Montserrat, sans-serif' }}>Insert</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default LinkedInCard;
