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
					<Highlight>very accommodating.. </Highlight> thanks to ate Nora for
					being <Highlight>supportive and careful midwife..</Highlight> She will
					never fail you in all aspect from checkup up to delivery...
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
					<Highlight> constant </Highlight> support during this special time was
					invaluable to me. To: Ms. Noreen and ate Nora.
				</p>
			),
			designation: '2021-04-09',
		},
		{
			id: 3,
			name: 'Leonanel Mangaong Bargo',
			content: (
				<p>
					Salamat po ate nora <Highlight>napakabait</Highlight> at{' '}
					<Highlight>maasikaso</Highlight> nyo po dalawang beses na po ako
					nanganak sa lying in nyo😊😊😊
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
export const Highlight = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<span
			className={cn(
				'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
				className,
			)}>
			{children}
		</span>
	);
};
