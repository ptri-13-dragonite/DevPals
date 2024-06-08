'use client';

import React from 'react';

function SkeletonLoaderStats({ className }: { className?: string }): JSX.Element {
  return (
    <div className={`skeleton ${className} w-full h-full rounded-2xl`} />
  );
}

export default SkeletonLoaderStats;
