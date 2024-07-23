import React from 'react';
import Babies from '@/public/images/hero/babies-image.webp';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TrustYourHealthToUsCard = () => {
	return (
		<Card className='p-5 gap-5 md:gap-7 rounded-xl flex flex-col md:flex-row'>
			<div className='w-full'>
				<Image
					className='rounded-xl h-full object-cover'
					src={Babies}
					alt='Fingertip of a baby holding an adult finger'
				/>
			</div>
			<div className='flex justify-between flex-col pb-10'>
				<div className='flex flex-col gap-5'>
					<h1 className='font-bold text-xl md:text-4xl'>
						Trust your prenatal health to us
					</h1>
					<p>
						Our prenatal clinic is home to a team of highly skilled
						obstetricians and nurses specialized in prenatal care. They have
						extensive experience in providing comprehensive care for expectant
						mothers and their babies. With our team, you can trust that your
						prenatal health and well-being are our top priority.
					</p>
				</div>
				<div className='flex flex-col md:flex-row gap-5'>
					<Button>
						<Link href={'/appointment'}>Book an appointment</Link>
					</Button>
					<Button variant={'outline'}>
						<Link href={'/list-of-doctors'}>
							Learn more about our prenatal care team
						</Link>
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default TrustYourHealthToUsCard;
