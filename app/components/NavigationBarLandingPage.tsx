'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Link from 'next/link';
import { AboutIcon, ContactIcon, DoctorIcon, PlansIcon } from '../ui/icons';
import { Button } from '@/components/ui/button';

const NavigationBarLandingPage = () => {
	const links = [
		{ name: 'About', href: '/about', icon: <AboutIcon /> },
		{ name: 'Doctors', href: '/doctor', icon: <DoctorIcon /> },
		{ name: 'Plans', href: '/plans', icon: <PlansIcon /> },
		{ name: 'Contact', href: '/contact', icon: <ContactIcon /> },
	];
	const path = usePathname();
	const pathList = ['/account', '/user', '/admin', '/nurse', '/doctor'];
	const isPath = pathList.some((p) => path.includes(p));
	return (
		<div
			className={`${
				isPath ? 'hidden' : 'block'
			} w-full flex justify-center items-center my-10`}>
			<div className='flex-row flex justify-between items-center w-11/12'>
				<Logo />
				<div className='md:flex flex-row items-center hidden gap-4'>
					{links.map((link) => {
						return (
							<Link
								className='font-medium'
								href={link.href}
								key={link.name}>
								{link.name}
							</Link>
						);
					})}
				</div>
				<div className='flex flex-row items-center gap-4'>
					<Button variant='default'>
						<Link href={'/account/login'}>Log In</Link>
					</Button>
					<Button variant='outline'>
						<Link href={'/account/sign-up'}>Sign Up</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NavigationBarLandingPage;
