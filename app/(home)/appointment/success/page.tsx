import React, { Suspense } from 'react';
import Skeleton from '@/components/Skeletons/Skeleton';
import {
	Card,
	CardContent,
	CardFooter,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import ButtonsSuccessActionsWrapper from './ButtonsSuccessActionsWrapper';

const page = () => {
	return (
		<div className='w-full flex items-center justify-center'>
			<Card className='max-w-screen-2xl w-11/12'>
				<CardHeader>
					<CardTitle>Appointment Booking Done</CardTitle>
					<CardDescription>
						Your appointment has been successfully booked.
					</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-5 justify-center items-center w-full'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-10 md:w-20 lg:w-48'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z'
						/>
					</svg>
					<p className='text-center'>
						Your appointment has been successfully booked.
					</p>
				</CardContent>
				<CardFooter className='w-full flex-col md:flex-row items-center justify-center'>
					<Suspense fallback={<Skeleton />}>
						<ButtonsSuccessActionsWrapper />
					</Suspense>
				</CardFooter>
			</Card>
		</div>
	);
};

export default page;
