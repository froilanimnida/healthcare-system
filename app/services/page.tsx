import React from 'react';
import { ServicesData } from '@/app/services/data';
import { cn } from '@/lib/utils';
import { ServicesCard } from './components/ServicesCards';

const Services = () => {
	return (
		<div className='w-full flex justify-center items-center gap-10'>
			<div className='max-w-screen-2xl w-11/12 gap-10 flex flex-col justify-center items-center min-h-screen'>
				<h1 className='text-xl font-bold'>Services Offered</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
					{ServicesData.map((services, index) => (
						<ServicesCard
							key={index}
							services={services}
							aspectRatio='square'
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
