'use client'; // Error components must be Client Components

import Image from 'next/image';
import { useEffect } from 'react';
import NotFound from './../../public/images/404.png';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='grid place-content-center gap-10 w-full min-h-screen'>
			<Image
				src={NotFound}
				alt='404'
				className='w-96 rounded-xl'
			/>
			<h2 className='text-xl font-bold text-center'>Something went wrong!</h2>
			<button
				className='btn btn-primary'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}>
				Reload
			</button>
		</div>
	);
}
