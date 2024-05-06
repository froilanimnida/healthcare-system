import React from 'react';
import Link from 'next/link';
import DoctorImage from '@/public/images/hero/team-doctors.jpg';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className='flex flex-col-reverse w-11/12 bg-cyan-500 p-5 gap-5 rounded-xl'>
			<aside className='flex flex-col'>
				<div className='flex flex-col justify-start gap-5'>
					<h1 className='text-2xl font-bold'>
						Crafting Care for your Holistic Health and Better Life
					</h1>
					<p>
						At our wellness center, we believe in the transformative power of
						personalized care. We understand that true well-being encompasses
						not only physical health but also emotional, mental, and spiritual
						balance
					</p>
				</div>
				<div className='flex flex-row gap-5 w-full'>
					<Link
						className='btn bg-slate-50'
						href={'/appointment'}>
						Book an Appointment
					</Link>
					<Link
						className='btn bg-transparent border-2 border-slate-50 text-white'
						href={'/our-services'}>
						Our Services
					</Link>
				</div>
			</aside>
			<figure>
				<Image
					className='rounded-xl'
					src={DoctorImage}
					alt='Team of Doctors'
				/>
			</figure>
		</div>
	);
};

export default Hero;
