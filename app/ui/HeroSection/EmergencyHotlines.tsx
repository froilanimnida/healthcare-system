import React from 'react';
import { HomeIcon, PhoneIcon } from '../icons';
import Image from 'next/image';
import CallingPerson from '@/public/images/hero/calling-person.jpg';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

const EmergencyHotlines = () => {
	return (
		<div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10'>
			<div className='w-11/12 lg:w-1/2 xl:w-2/5'>
				<Image
					style={{
						boxShadow: '15px -15px 0 #6097ff',
					}}
					className='rounded-xl'
					src={CallingPerson}
					alt='Calling Person'
				/>
			</div>

			<div className='flex lg:w-1/2 flex-col gap-5'>
				<div className='flex flex-col gap-3'>
					<h2 className='font-bold text-2xl md:text-4xl'>Emergency Hotlines</h2>
					<p>
						Wether you&apos;re facing a medical emergencies that requires
						immediate attention or need guidance during a critical situation,
						these emergency hotlines are available 24/7 to provide you with the
						help you need.
					</p>
				</div>

				<Card>
					<div className='flex flex-col gap-3'>
						<CardHeader>
							<PhoneIcon />
							<p className='text-primary'>123-456-7890</p>
						</CardHeader>
						<CardContent>
							<h3 className='font-semibold text-lg'>Medical Emergency</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Accusamus eos voluptas facilis alias, non soluta vel dicta
								voluptatem consequatur?
							</p>
						</CardContent>
					</div>
				</Card>
				<Card>
					<div className='flex flex-col gap-3'>
						<CardHeader>
							<HomeIcon />
							<p className='text-primary'>123-456-7890</p>
						</CardHeader>
						<CardContent>
							<h3 className='font-semibold text-lg'>Home Service</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Accusamus eos voluptas facilis alias, non soluta vel dicta
								voluptatem consequatur?
							</p>
						</CardContent>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default EmergencyHotlines;
