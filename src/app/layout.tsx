import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevPals',
  description: 'Progress as a Developer with a Pal!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
