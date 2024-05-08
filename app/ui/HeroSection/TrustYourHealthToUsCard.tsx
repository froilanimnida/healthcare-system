import React from 'react';
import GroupOfDoctors from '@/public/images/hero/group-of-doctors.jpg';
import Image from 'next/image';
import Link from 'next/link';

const TrustYourHealthToUsCard = () => {
	return (
		<div className='bg-indigo-100 w-11/12 shadow-xl p-5 gap-5 md:gap-7 rounded-xl flex flex-col md:flex-row'>
			<div className='w-full'>
				<Image
					className='rounded-xl h-full object-cover'
					src={GroupOfDoctors}
					alt='Group of doctors'
				/>
			</div>
			<div className='flex flex-col gap-3 md:gap-6'>
				<h1 className='font-semibold text-xl md:text-4xl'>
					Trust your health to us
				</h1>
				<p>
					Our healthcare center is home to a team of highly skilled doctors and
					nurses. They come from diverse medical backgrounds, bringing a wealth
					of knowledge in various fields of medicine. With our team, you can
					trust that your health and well-being are our top priority.
				</p>
				<div className='flex flex-col md:flex-row gap-5'>
					<Link
						className='hover:scale-105 transition-all duration-300 btn bg-cyan-400 rounded-full'
						href={'/appointment'}>
						Book an appointment
					</Link>
					<Link
						className='hover:scale-105 transition-all duration-300 btn btn-ghost rounded-full'
						href={'/trust-your-health-to-us'}>
						Learn more about our team
					</Link>
				</div>
			</div>
		</div>
	);
};

export default TrustYourHealthToUsCard;
