import React from 'react';
import Link from 'next/link';
import BabyImage from '@/public/images/hero/hero.webp';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const Hero = () => {
	return (
		<Card className='flex flex-col-reverse md:flex-row p-5 gap-5 rounded-xl'>
			<aside className='flex flex-col justify-around'>
				<div className='flex flex-col justify-start gap-2 md:gap-7'>
					<TextGenerateEffect
						words={'Welcome to Nora Birthing Care Clinic'}
						className='text-2xl md:text-4xl font-bold'
					/>
					{/* <h1 className='text-2xl md:text-4xl font-bold'>
						Welcome to Nora Birthing Care Clinic
					</h1> */}
					<p className='text-xl'>
						Experience personalized and comprehensive healthcare at Nora
						Birthing Care Clinic. Our dedicated team ensures your journey to
						optimal health and vitality, from diagnosis to treatment.
					</p>
				</div>
				<div className='flex mt-5 flex-row gap-5 w-full'>
					<Button>
						<Link
							className=''
							href={'/appointment'}>
							Book an Appointment
						</Link>
					</Button>
					<Button
						className='text-base hidden md:flex'
						variant={'outline'}>
						<Link href={'/our-services'}>Our Services</Link>
					</Button>
				</div>
			</aside>
			<figure>
				<Image
					className='rounded-xl w-full md:w-96 h-96 md:h-96 object-cover'
					src={BabyImage}
					alt='A Doctor'
				/>
			</figure>
		</Card>
	);
};

export default Hero;
