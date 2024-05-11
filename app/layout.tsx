import type { Metadata } from 'next';
import NavigationBarLandingPage from '@/app/components/NavigationBarLandingPage';
import FooterHero from '@/app/ui/FooterHero';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	// #TODO:Change Client Name
	title: 'East Avenue Medical Center',
	description: 'East Avenue Medical Center Website and Booking System',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<TooltipProvider>
				<body className={`${inter.className} min-h-screen w-full`}>
					<Toaster />
					<main className='min-h-screen w-full flex justify-center'>
						<div className='flex flex-col w-full min-h-screen'>
							<NavigationBarLandingPage />
							{children}
							<FooterHero />
						</div>
					</main>
					<Analytics />
					<SpeedInsights />
				</body>
			</TooltipProvider>
		</html>
	);
}
