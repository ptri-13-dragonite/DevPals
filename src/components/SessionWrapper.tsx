// mark as client component

'use client';

import { SessionProvider } from 'next-auth/react';

import React from 'react';

function SessionWrapper({ children }: {children: React.ReactNode}) {
  return (
    <SessionProvider>{children}</SessionProvider>
  );
}

export default SessionWrapper;
