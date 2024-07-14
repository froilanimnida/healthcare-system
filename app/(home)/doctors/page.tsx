import React from 'react';
import { DoctorsGrid } from '@/app/(home)/doctors/components/DoctorsGrid';

const FindDoctorPage = () => {
	return (
		<div className='w-full flex flex-col gap-5 items-center justify-center'>
			<h1 className='text-xl text-center md:text-2xl lg:text-4xl font-bold'>
				Our Doctors
			</h1>
			<DoctorsGrid />
		</div>
	);
};

export default FindDoctorPage;
