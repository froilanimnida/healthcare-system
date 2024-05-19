import React from 'react';
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
		<div className='lg:p-8 w-full'>
			<div className='mx-auto flex w-full flex-col justify-center space-y-6 items-center '>
				<div className='flex flex-col space-y-2 text-center'>
					<h1 className='text-2xl font-semibold tracking-tight'>
						Thank you for booking an appointment!
					</h1>
				</div>
				<Card className='w-1/2'>
					<CardHeader>
						<CardTitle>Appointment Details</CardTitle>
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
							className='w-96 h-96'>
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
					<CardFooter>
						<ButtonsSuccessActionsWrapper />
					</CardFooter>
				</Card>
			</div>
		</div>
	);
};

export default page;
