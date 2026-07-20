import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CoRyd',
  description: 'Subscription-based mobility for predictable city travel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
