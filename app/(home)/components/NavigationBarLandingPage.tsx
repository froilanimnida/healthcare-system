import React from 'react';
import { Search } from 'lucide-react';
import Logo from '../../../components/ui/Logo';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NavigationBarLandingPage = () => {
	const links = [
		{ name: 'About', href: '/about', icon: <AboutIcon /> },
		{ name: 'Doctors', href: '/doctors', icon: <DoctorIcon /> },
		{ name: 'Contact', href: '/contact', icon: <ContactIcon /> },
		{
			name: 'Appointment',
			href: '/appointment',
			icon: <Search />,
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
					<Button
						asChild
						variant='default'>
						<Link href={'/account/login'}>Log In</Link>
					</Button>
					<Button
						asChild
						variant='outline'>
						<Link href={'/account/sign-up'}>Sign Up</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default NavigationBarLandingPage;

export const AboutIcon: React.FC = () => (
	<svg
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		className='w-6 h-6'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z'
		/>
	</svg>
);

const DoctorIcon: React.FC = () => (
	<svg
		fill='#000000'
		className='w-6 h-6'
		viewBox='0 0 32 32'
		style={{
			fillRule: 'evenodd',
			clipRule: 'evenodd',
			strokeLinejoin: 'round',
			strokeMiterlimit: 2,
		}}
		version='1.1'
		xmlSpace='preserve'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'>
		<path d='M9.733,14.107c-1.387,0.252 -2.676,0.921 -3.687,1.932c-1.309,1.309 -2.044,3.084 -2.044,4.935l0,4.039c0,1.657 1.343,3 3,3c4.184,-0 13.816,-0 18,-0c1.657,-0 3,-1.343 3,-3l0,-4.039c0,-1.851 -0.735,-3.626 -2.044,-4.935c-1.011,-1.011 -2.3,-1.68 -3.687,-1.932c0.468,-0.939 0.731,-1.997 0.731,-3.117c0,-3.863 -3.137,-7 -7,-7c-3.863,0 -7,3.137 -7,7c0,1.12 0.263,2.178 0.731,3.117Zm12.263,1.984l-0,2.079c1.164,0.412 2,1.524 2,2.83c0,1.101 0.004,1.995 0.004,1.995c0.003,0.552 -0.443,1.002 -0.995,1.005c-0.552,0.002 -1.002,-0.444 -1.005,-0.995c0,-0 -0.004,-0.899 -0.004,-2.005c0,-0.552 -0.446,-1 -0.997,-1c-0.551,-0 -0.997,0.448 -0.997,1l-0.002,2.001c-0.001,0.552 -0.449,1 -1.001,0.999c-0.552,-0.001 -1,-0.449 -0.999,-1.001c-0,-0 0.002,-2 0.002,-1.999c0,-1.304 0.833,-2.414 1.994,-2.828l-0,-1.433c-1.133,0.789 -2.51,1.251 -3.994,1.251c-1.489,0 -2.871,-0.466 -4.006,-1.26l-0,1.441c1.165,0.412 2,1.524 2,2.829c0,1.656 -1.344,3 -3,3c-1.656,-0 -3,-1.344 -3,-3c-0,-1.305 0.835,-2.417 2,-2.829l-0,-2.078c-0.954,0.193 -1.837,0.662 -2.535,1.36c-0.934,0.934 -1.459,2.201 -1.459,3.521c0,0 0,4.039 0,4.039c0,0.552 0.448,1 1,1l18,-0c0.552,-0 1,-0.448 1,-1c0,-0 0,-4.039 0,-4.039c0,-1.32 -0.525,-2.587 -1.458,-3.521c-0.701,-0.701 -1.59,-1.171 -2.548,-1.362Zm-11,3.909c0.552,-0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,-0 -1,-0.448 -1,-1c-0,-0.552 0.448,-1 1,-1Zm5.006,-14.01c2.76,0 5,2.241 5,5c0,2.76 -2.24,5 -5,5c-2.76,0 -5,-2.24 -5,-5c0,-2.759 2.24,-5 5,-5Z' />
	</svg>
);

const ContactIcon: React.FC = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		className='w-6 h-6'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
		/>
	</svg>
);
