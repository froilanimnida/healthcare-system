import React from 'react';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const Contact = () => {
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Contacts</h1>
			<Card>
				<CardHeader>
					<CardTitle>Reach us:</CardTitle>
					<CardDescription>
						These are the ways you can reach us.
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-5'>
					<div className='flex flex-col gap-3'>
						<p>For inquiries, you can reach us through the following:</p>
						<p>
							Facebook:{' '}
							<Link
								className='hover:underline text-blue-500'
								href={
									'https://www.facebook.com/phase7bBagongSilangBirthingClinic'
								}>
								Our facebook page:
							</Link>{' '}
							https://www.facebook.com/phase7bBagongSilangBirthingClinic
						</p>
						<p>
							Email:{' '}
							<Link
								className='hover:underline text-blue-500'
								href={'mailto:nsvelasquez@yahoo.com'}>
								Mail us here
							</Link>{' '}
							nsvelasquez@yahoo.com
						</p>
						<p>
							Phone:{' '}
							<Link
								className='hover:underline text-blue-500'
								href={'tel:09493330338'}>
								Call us here:
							</Link>{' '}
							0949 333 0338
						</p>
					</div>

					<div className='flex flex-col gap-3'>
						<p>For location, you can visit us at:</p>
						<p>
							Address: Phase 7b, Package 6, Block 35, Lot 28, Bagong Silang,
							Caloocan, Philippines
						</p>
						<p>
							Google Maps:{' '}
							<Link
								className='hover:underline text-blue-500'
								href={
									'https://www.google.com/maps/place/Nora+Birthing+Care+Clinic/@14.7758418,121.0561972,17z/data=!4m6!3m5!1s0x3397afe8680f9e95:0x257884cc48494957!8m2!3d14.7765317!4d121.0585575!16s%2Fg%2F11j7x5kzp9?entry=ttu'
								}>
								Our location:
							</Link>{' '}
							https://www.google.com/maps/place/Nora+Birthing+Care+Clinic/@14.7758418,121.0561972,17z/
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default Contact;
