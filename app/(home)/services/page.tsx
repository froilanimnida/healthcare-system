import React from 'react';
import { ServicesGrid } from './components/ServicesGrid';

const Services = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>
				Services Offered
			</h1>
			<ServicesGrid />
		</div>
	);
};

export default Services;
