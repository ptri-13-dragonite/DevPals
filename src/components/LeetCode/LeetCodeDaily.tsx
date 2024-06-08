'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import SkeletonLoaderStats from '../SkeletonLoaderStats';
import { useLeetCode } from '../../context/LeetCodeContext';

function LeetCodeDailyProblem(): JSX.Element {
  const { leetCodeContext, isLoading } = useLeetCode();

  if (!leetCodeContext) {
    return (
      <div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! Task failed successfully.</span>
      </div>
    );
  }

  const {
    questionLink, questionTitle, difficulty, tags,
  } = leetCodeContext;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <a href={questionLink} target="_blank" rel="noopener noreferrer">
        <figure className="rounded-t-lg overflow-hidden">
          <Image src="/images/leetcode_daily_logo_1.jpeg" alt="LeetCode Daily Logo" width={384} height={384} />
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
