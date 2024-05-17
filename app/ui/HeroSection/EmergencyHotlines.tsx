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
					<h2 className='font-bold text-2xl md:text-4xl'>Our Hotlines</h2>
					<p>
						This hotline is dedicated to medical emergencies related to
						maternity care. Our team of trained medical professionals is ready
						to provide immediate assistance and guide you through any
						pregnancy-related emergencies.
					</p>
				</div>

				<Card>
					<div className='flex flex-col gap-3'>
						<CardHeader>
							<PhoneIcon />
							<p className='text-primary'>0949 333 0338</p>
						</CardHeader>
						<CardContent>
							<h3 className='font-semibold text-lg'>Phone Number</h3>
							<p>
								Our hotline is available 24/7. Call us for any pregnancy-related
								emergencies.
							</p>
						</CardContent>
					</div>
				</Card>
				<Card>
					<div className='flex flex-col gap-3'>
						<CardHeader>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								className='fill-current w-6 h-6'>
								<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
							</svg>
							<p className='text-primary'>123-456-7890</p>
						</CardHeader>
						<CardContent>
							<h3 className='font-semibold text-lg'>Facebook Message</h3>
							<p>
								Nora Birthing Care Clinic is also available on Facebook. Send us
								a message for any inquiries or concerns.
							</p>
						</CardContent>
					</div>
				</Card>
			</div>
		</div>
	);
};

export default EmergencyHotlines;
