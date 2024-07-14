import React from 'react';
import { CardStack } from '@/components/ui/card-stack';
import { cn } from '@/lib/utils';

const Reviews = () => {
	const ReviewsItem = [
		{
			id: 1,
			name: 'Jessica Calzita Guisihan',
			content: (
				<p>
					very accommodating.. thanks to ate Nora for being supportive and
					careful midwife.. She will never fail you in all aspect from checkup
					up to delivery...
				</p>
			),
			designation: '2021-05-31',
		},
		{
			id: 2,
			name: 'Alexis Garcia Verwin',
			content: (
				<p>
					I am so grateful for all you did throughout my pregnancy. Your
					constant support during this special time was invaluable to me. To:
					Ms. Noreen and ate Nora.
				</p>
			),
			designation: '2021-04-09',
		},
		{
			id: 3,
			name: 'Leonanel Mangaong Bargo',
			content: (
				<p>
					Salamat po ate nora napakabait at maasikaso nyo po dalawang beses na
					po ako nanganak sa lying in nyo😊😊😊
				</p>
			),
			designation: '2021-07-22',
		},
	];

	return (
		<div className='w-full flex flex-col justify-center gap-10 items-center'>
			<h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Reviews</h1>
			<div className='h-[40rem] flex items-center justify-center w-full'>
				<CardStack items={ReviewsItem} />
			</div>
		</div>
	);
};

export default Reviews;
