import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

function LeetCodeDailyProblem() {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <a href="https://leetcode.com/problemset/" target="_blank" rel="noopener noreferrer">
        <figure className="rounded-t-lg overflow-hidden">
          <Image src="/images/leetcode_daily_logo_1.jpeg" alt="LeetCode Daily Logo" width={928} height={548} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            LeetCode Daily Challenge!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>Insert LeetCode Problem Text here</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Insert Acceptance Rate</div>
            <div className="badge badge-outline">Insert Difficulty</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default LeetCodeDailyProblem;
