import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tortuga - Institutional-Grade RWA On-Chain',
  description: 'Bridge the $16T+ real estate opportunity to Web3. Fully compliant, yield-bearing bonds live from Day 1.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}