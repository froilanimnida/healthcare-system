import React from 'react';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Link from 'next/link';
import './../globals.css';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';

const inter = Inter({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
});
export const metadata: Metadata = {
	title: 'Accounts Page',
	description: 'Nora Birthing Care Clinic Website and Booking System',
};

export default function AccountLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} min-h-screen w-full`}>
				<div className='container relative flex min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
					<Link
						href={'/account/forgot-password'}
						className={cn('absolute right-4 top-4 md:right-8 md:top-8')}>
						Forgot Password
					</Link>
					<div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r'>
						<div className='absolute inset-0 bg-zinc-900' />
						<div className='relative z-20 flex items-center text-lg font-medium'>
							<Logo className='mr-5' />
							Nora Birthing Care Clinic
						</div>
						<div className='relative z-20 mt-auto'>
							<blockquote className='space-y-2'>
								<p className='text-lg'>
									&ldquo;Open 24 Hours for Normal Spontaneous Delivery&rdquo;
								</p>
								<footer className='text-sm'>Nora Birthing Care Clinic</footer>
							</blockquote>
						</div>
					</div>
					{children}
				</div>
			</body>
		</html>
	);
}
