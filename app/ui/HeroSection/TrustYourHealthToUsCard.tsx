import React from 'react';
import GroupOfDoctors from '@/public/images/hero/group-of-doctors.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TrustYourHealthToUsCard = () => {
	return (
		<Card className='bg-indigo-100 p-5 gap-5 md:gap-7 rounded-xl flex flex-col md:flex-row'>
			<div className='w-full'>
				<Image
					className='rounded-xl h-full object-cover'
					src={GroupOfDoctors}
					alt='Group of doctors'
				/>
			</div>
			<div className='flex flex-col gap-3 md:gap-6'>
				<h1 className='font-bold text-xl md:text-4xl'>
					Trust your health to us
				</h1>
				<p>
					Our healthcare center is home to a team of highly skilled doctors and
					nurses. They come from diverse medical backgrounds, bringing a wealth
					of knowledge in various fields of medicine. With our team, you can
					trust that your health and well-being are our top priority.
				</p>
				<div className='flex flex-col md:flex-row gap-5'>
					<Button>
						<Link href={'/appointment'}>Book an appointment</Link>
					</Button>
					<Button variant={'outline'}>
						<Link href={'/trust-your-health-to-us'}>
							Learn more about our team
						</Link>
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default TrustYourHealthToUsCard;
