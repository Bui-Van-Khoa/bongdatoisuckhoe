import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Providers } from '@/lib/providers';
import dynamic from 'next/dynamic';
// import Header from '@/components/header/Header';

const Header = dynamic(() => import('@/components/header/Header'), {
  ssr: false,
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={GeistSans.className}>
        <body>
          <Header />
          <main>
            {children}
          </main>
        </body>
      </html>
    </Providers>
  );
}



