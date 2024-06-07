import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

function GitHubCard() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
        <figure className="rounded-t-lg overflow-hidden">
          <Image src="/images/gh-small.png" alt="GitHub Logo" width={384} height={384} />
        </figure>
        <div className="card-body" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          <h2 className="card-title" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Push more Code!
          </h2>
          <p>Keep those commit squares green</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline" style={{ fontFamily: 'Montserrat, sans-serif' }}>???</div>
            <div className="badge badge-outline" style={{ fontFamily: 'Montserrat, sans-serif' }}>???</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default GitHubCard;
