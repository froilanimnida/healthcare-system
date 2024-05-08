import { link } from 'fs';
import React from 'react';
import { HealthIcon, MicroscopeIcon, SurgeryIcon } from '@/app/ui/icons';
import Link from 'next/link';

const OurMedicalServices = () => {
	const medicalServices = [
		{
			icon: <MicroscopeIcon />,
			title: 'Laboratory Test Services',
			description:
				'Our laboratory test services are designed to provide accurate and reliable results, ensuring that you receive the best possible care.',
			link: '/laboratory-test-services',
		},
		{
			icon: <HealthIcon />,
			title: 'First Aid Services',
			description:
				'Our first aid services are designed to provide immediate medical attention in case of an emergency, ensuring that you receive the best possible care.',
			link: '/first-aid-services',
		},
		{
			icon: <SurgeryIcon />,
			title: 'Professional Surgical Services',
			description:
				'Our professional surgical services are designed to provide expert surgical care, ensuring that you receive the best possible treatment.',
			link: '/surgical-services',
		},
	];
	return (
		<div className='w-11/12 flex flex-col gap-5'>
			<div className='gap-3 flex flex-col'>
				<h1 className='font-semibold text-2xl md:text-4xl'>
					Our Medical Services
				</h1>
				<p>
					Experience personalized and comprehensive healthcare at Our Medical
					Services. Our dedicated team ensures your journey to optimal health
					and vitality, from diagnosis to treatment.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5'>
				{medicalServices.map((service) => {
					return (
						<div
							className='border cursor-pointer shadow-md hover:shadow-2xl duration-300 border-slate-300 p-5 rounded-xl flex flex-col gap-3'
							key={service.title}>
							<div className='bg-cyan-100 w-fit p-2 rounded-xl'>
								{service.icon}
							</div>
							<h2 className='font-semibold text-xl md:text-2xl'>
								{service.title}
							</h2>
							<p>{service.description}</p>
							<Link
								className='text-cyan-400 flex flex-row items-center gap-1 group hover:text-cyan-500 transition-colors duration-200'
								href={service.link}>
								Learn More
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									className='w-6 h-6 stroke-cyan-400 transition-transform duration-200 group-hover:translate-x-1'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
									/>
								</svg>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OurMedicalServices;
