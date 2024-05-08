import React from 'react';
import Link from 'next/link';
import DoctorImage from '@/public/images/hero/hero-doctor.jpg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='flex flex-col-reverse md:flex-row w-11/12 shadow-xl transition-all duration-300 hover:shadow-2xl bg-primary p-5 gap-5 rounded-xl'>
			<aside className='flex flex-col justify-around'>
				<div className='flex flex-col justify-start gap-2 md:gap-7'>
					<h1 className='text-2xl md:text-4xl font-bold'>
						Crafting Care for your Holistic Health and Better Life
					</h1>
					<p className='text-xl'>
						At our wellness center, we believe in the transformative power of
						personalized care. We understand that true well-being encompasses
						not only physical health but also emotional, mental, and spiritual
						balance
					</p>
				</div>
				<div className='flex mt-5 flex-row gap-5 w-full'>
					<Link
						className='hover:scale-105 transition-all duration-300 btn bg-slate-100 rounded-full text-base'
						href={'/appointment'}>
						Book an Appointment
					</Link>
					<Link
						className='btn hover:scale-105 transition-all duration-300 text-base hidden rounded-full md:flex bg-transparent border-2 border-slate-50 text-white'
						href={'/our-services'}>
						Our Services
					</Link>
				</div>
			</aside>
			<figure>
				<Image
					className='rounded-xl w-full md:w-96 h-96 md:h-96 object-cover'
					src={DoctorImage}
					alt='A Doctor'
				/>
			</figure>
		</div>
	);
};

export default Hero;
