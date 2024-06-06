import type { Metadata } from 'next';
import './globals.css';
import SessionWrapper from '@/components/SessionWrapper';

export const metadata: Metadata = {
  title: 'DevPals',
  description: 'Progress as a Developer with a Pal!',
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SessionWrapper>
  );
}
