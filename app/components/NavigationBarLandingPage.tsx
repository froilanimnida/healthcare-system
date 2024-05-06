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
		<div className='flex pt-3 flex-row w-full items-center justify-evenly'>
			<Menu links={links} />
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

			<Link
				href={'/appointment'}
				className='btn btn-primary rounded-full hidden md:block'>
				Book an Appointment
			</Link>
			<Link
				href={'/our-services'}
				className='btn btn-primary rounded-full hidden md:block'>
				Our Services
			</Link>
		</div>
	);
};

export default NavigationBarLandingPage;
