import React from 'react';
import { cn } from '@/lib/utils';
import { ServicesGrid } from './components/ServicesGrid';

const Services = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<h1 className='text-xl font-bold'>Services Offered</h1>
			<ServicesGrid />
		</div>
	);
};

export default Services;
