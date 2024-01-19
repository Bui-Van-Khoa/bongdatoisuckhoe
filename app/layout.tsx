import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Providers } from '@/lib/providers';
import dynamic from 'next/dynamic';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

const Header = dynamic(() => import('@/components/header/Header'), {
  ssr: false,
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Bong da suc khoe toi',
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
			<ConfigProvider><body>
          <Header />
				 <main className="-z-10">{children}</main>
         
        </body>
				</ConfigProvider>
      </html>
    </Providers>
  );
}
