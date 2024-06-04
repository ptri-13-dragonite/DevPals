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
        <div className="card-body">
          <h2 className="card-title">
            Grow your Network!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Your network is your networth</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Insert Num of Connections</div>
            <div className="badge badge-outline">Insert</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default LinkedInCard;
