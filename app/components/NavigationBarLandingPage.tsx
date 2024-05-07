import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import Menu from '../ui/Menu';
import { AboutIcon, ContactIcon, DoctorIcon, PlansIcon } from '../ui/icons';

const NavigationBarLandingPage = () => {
	const links = [
		{ name: 'About', href: '/about', icon: <AboutIcon /> },
		{ name: 'Doctors', href: '/doctor', icon: <DoctorIcon /> },
		{ name: 'Plans', href: '/plans', icon: <PlansIcon /> },
		{ name: 'Contact', href: '/contact', icon: <ContactIcon /> },
	];
	return (
		<div className='flex py-3 px-5 md:py-6 md:px-10 flex-row w-full items-center justify-between'>
			<Logo />
			<Menu links={links} />

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
				<Link
					href={'/appointment'}
					className='btn btn-primary text-xs rounded-full hidden md:flex'>
					Book an Appointment
				</Link>
				<Link
					href={'/our-services'}
					className='btn btn-primary text-xs rounded-full hidden md:flex'>
					Our Services
				</Link>
			</div>
		</div>
	);
};

export default NavigationBarLandingPage;
