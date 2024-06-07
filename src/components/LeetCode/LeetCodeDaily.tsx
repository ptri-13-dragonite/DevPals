'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useLeetCode } from '../LeetCodeContext';

function LeetCodeDailyProblem(): JSX.Element {
  const { leetCodeContext, isLoading } = useLeetCode();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!leetCodeContext) {
    return <p>Failed to load daily problem.</p>;
  }

  const {
    questionLink, questionTitle, difficulty, tags,
  } = leetCodeContext;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <a href={questionLink} target="_blank" rel="noopener noreferrer">
        <figure className="rounded-t-lg overflow-hidden">
          <Image src="/images/leetcode_daily_logo_1.jpeg" alt="LeetCode Daily Logo" width={928} height={548} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            LeetCode Daily Challenge!
          </h2>
          <p>{questionTitle}</p>
          <p>
            Difficulty:
            {' '}
            {difficulty}
          </p>
          <div className="card-actions justify-end">
            {tags.map((tag, index) => (
              <div key={index} className="badge badge-outline">{tag}</div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}

export default LeetCodeDailyProblem;
