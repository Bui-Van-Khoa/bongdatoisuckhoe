import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Providers } from '@/lib/providers';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/header/Header'), {
	ssr: false,
});

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: 'Bong da suc khoe toi',
	description: 'Nơi những anh em đam mê bóng đá giao lưu võ thuật, trao đổi ống đồng.',
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
						<main className="-z-10">{children}</main>
					</body>
				</html>
			</Providers>
	);
}
