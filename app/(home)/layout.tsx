import type { Metadata } from 'next';
import { ThemeProvider } from '@/provider/ThemeProvider';
import { NavigationBarLandingPage } from '@/app/(home)/components/NavigationBarLandingPage';
import FooterHero from '@/app/(home)/components/FooterHero';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import { Toaster } from 'react-hot-toast';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Nora Birthing Care Clinic',
	description: 'Nora Birthing Care Clinic Website and Booking System',
};

export default function LandingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<TooltipProvider>
				<body className={`${inter.className} min-h-screen w-full`}>
					<ThemeProvider
						defaultTheme='system'
						attribute='class'>
						<Toaster />
						<main className='w-full flex flex-col items-center justify-center'>
							<NavigationBarLandingPage />
							<div className='flex flex-col mt-32 w-full'>{children}</div>
							<FooterHero />
						</main>
						<Analytics />
						<SpeedInsights />
					</ThemeProvider>
				</body>
			</TooltipProvider>
		</html>
	);
}
