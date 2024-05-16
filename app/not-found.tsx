import Link from 'next/link';
import NotFound404Image from '@/public/images/404.webp';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className='w-full min-h-screen flex flex-col justify-center items-center'>
			<Image
				width={600}
				src={NotFound404Image}
				alt='404 Not Found'
			/>
			<h1 className='text-xl md:text-2xl lg:text-4xl py-3 font-extrabold'>
				Not Found
			</h1>
			<p>Could not find requested resource</p>
			<Button className='mt-10'>
				<Link href='/'>Return Home</Link>
			</Button>
		</div>
	);
}
