import React from 'react';
import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

// Address: Phase 7b, Package 6, Block 35, Lot 28, Bagong Silang, Caloocan, Philippines
// Contact no.: 0949 333 0338
// Email: nsvelasquez@yahoo.com
// Facebook: https://www.facebook.com/phase7bBagongSilangBirthingClinic
// Google Maps: https://www.google.com/maps/place/Nora+Birthing+Care+Clinic/@14.7758418,121.0561972,17z/data=!4m6!3m5!1s0x3397afe8680f9e95:0x257884cc48494957!8m2!3d14.7765317!4d121.0585575!16s%2Fg%2F11j7x5kzp9?entry=ttu

const Contact = () => {
	const contactInfo = [
		{
			id: 1,
			title: 'Address',
			description:
				'Phase 7b, Package 6, Block 35, Lot 28, Bagong Silang, Caloocan, Philippines',
		},
		{
			id: 2,
			title: 'Contact no.',
			description: '0949 333 0338',
		},
		{
			id: 3,
			title: 'Email',
			description: 'nsvelasquez@yahoo.com',
		},
		{
			id: 4,
			title: 'Facebook',
			description: 'https://www.facebook.com/phase7bBagongSilangBirthingClinic',
		},
		{
			id: 5,
			title: 'Google Maps',
			description:
				'https://www.google.com/maps/place/Nora+Birthing+Care+Clinic/@14.7758418,121.0561972,17z/data=!4m6!3m5!1s0x3397afe8680f9e95:0x257884cc48494957!8m2!3d14.7765317!4d121.0585575!16s%2Fg%2F11j7x5kzp9?entry=ttu',
		},
	];
	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Contacts</h1>
			<Card>
				<CardHeader>
					<CardTitle>Reach us:</CardTitle>
				</CardHeader>
				<CardContent>
					<CardDescription>
						<div>
							<p>For inquiries, you can reach us through the following:</p>
							<p>
								Facebook:{' '}
								<Link
									className='hover:underline'
									href={
										'https://www.facebook.com/phase7bBagongSilangBirthingClinic'
									}>
									Our facebook page:
								</Link>{' '}
								https://www.facebook.com/phase7bBagongSilangBirthingClinic
							</p>
							<p>
								Email:
								<Link
									className='hover:underline'
									href={'mailto:nsvelasquez@yahoo.com'}>
									Mail us here
								</Link>{' '}
								nsvelasquez@yahoo.com
							</p>
						</div>
					</CardDescription>
				</CardContent>
			</Card>
			{contactInfo.map((contact) => (
				<Card key={contact.id}>
					<CardHeader>
						<CardTitle>{contact.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>{contact.description}</CardDescription>
					</CardContent>
				</Card>
			))}
		</div>
	);
};

export default Contact;
