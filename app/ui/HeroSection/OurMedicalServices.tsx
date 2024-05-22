import React from 'react';
import { DentalIcon, VaccineIcon, PrenatalIcon } from '@/app/ui/icons';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

const OurMedicalServices = () => {
	const medicalServices = [
		{
			icon: <DentalIcon />,
			title: 'Dental Services',
			description:
				'Our dental services are designed to provide expert dental care, ensuring that you receive the best possible treatment.',
			link: '/laboratory-test-services',
		},
		{
			icon: <VaccineIcon />,
			title: 'Vaccination Services',
			description:
				'Our vaccination services are designed to provide expert vaccination care, ensuring that your infant and kids receive the best possible treatment.',
			link: '/first-aid-services',
		},
		{
			icon: <PrenatalIcon />,
			title: 'Prenatal Services',
			description:
				'Our prenatal services are designed to provide expert prenatal care, ensuring that you receive the best possible treatment.',
			link: '/surgical-services',
		},
	];
	return (
		<div className='flex flex-col gap-5'>
			<div className='gap-3 flex flex-col'>
				<h1 className='font-bold text-2xl md:text-4xl'>Our Medical Services</h1>
				<p>
					We offer a wide range of medical services to cater to your health
					needs. Our services are designed to provide expert medical care,
					ensuring that you receive the best possible treatment.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5'>
				{medicalServices.map((service) => {
					return (
						<Card
							className='p-5 rounded-xl flex flex-col gap-3'
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
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default OurMedicalServices;
