import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Accounts Page',
	description: 'East Avenue Medical Center Website and Booking System',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main
			className={`${poppins.className} min-h-screen w-full flex flex-col justify-center items-center`}>
			{children}
		</main>
	);
}
