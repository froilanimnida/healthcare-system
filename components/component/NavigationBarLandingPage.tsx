import React from 'react';
import { Search } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NavigationBarLandingPage = () => {
	const links = [
		{ name: 'About', href: '/about' },
		{ name: 'Doctors', href: '/doctor' },
		{ name: 'Contact', href: '/contact' },
		{
			name: 'Appointment',
			href: '/appointment',
		},
	];
	return (
		<div className='w-full flex justify-center items-center my-10'>
			<div className='flex-row flex justify-between items-center w-11/12 max-w-screen-2xl'>
				<Link href='/'>
					<Logo />
				</Link>
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
