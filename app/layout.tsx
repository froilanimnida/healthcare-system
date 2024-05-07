import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const inter = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
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
			<body className={inter.className}>
				<main className='w-full flex flex-col justify-center items-center'>
					{children}
				</main>
			</body>
		</html>
	);
}
