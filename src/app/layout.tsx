import type { Metadata } from 'next';
import React from 'react';
// import { AuthProvider } from '@/hooks/useAuth';
import { LeetCodeProvider } from '@/context/LeetCodeContext';
import './globals.css';
import SessionWrapper from '@/components/SessionWrapper';

export const metadata: Metadata = {
  title: 'DevPals',
  description: 'Progress as a Developer with a Pal!',
};

export default function RootLayout({ children }: {children: React.ReactNode }): JSX.Element {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <title>DevPals</title>
        </head>
        <body>
          {/* <AuthProvider> */}
          <LeetCodeProvider>
            {children}
          </LeetCodeProvider>
          {/* </AuthProvider> */}
        </body>
      </html>
    </SessionWrapper>
  );
}
