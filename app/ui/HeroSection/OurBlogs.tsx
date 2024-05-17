import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaticImageOne from '@/public/images/hero/static-blog-image-1.jpg';
import StaticImageTwo from '@/public/images/hero/static-blog-image-2.jpg';
import StaticImageThree from '@/public/images/hero/static-blog-image-3.jpg';
import { stat } from 'fs/promises';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

// change the blogs to maternal health blogs
const OurBlogs = () => {
	const staticCardContent = [
		{
			thumbnails: StaticImageOne,
			date: 'May 12, 2021',
			title: 'How to take care of your baby',
			description:
				'Learn about the essentials of baby care. Discover tips on how to keep your baby healthy and happy.',
			link: '/how-to-maintain-good-health',
		},
		{
			thumbnails: StaticImageTwo,
			date: 'June 15, 2021',
			title:
				'Importance of regular exercise and physical activity to your maternal health',
			description:
				'Understand the benefits of regular exercise and physical activity to your maternal health. Learn how to stay fit and healthy during pregnancy.',
			link: '/importance-of-regular-exercise',
		},
		{
			thumbnails: StaticImageThree,
			date: 'July 20, 2021',
			title: 'Healthy eating and balanced diet for maternal health',
			description:
				'Learn about the importance of healthy eating and balanced diet to your maternal health. Discover the essentials of a healthy diet.',
			link: '/healthy-eating-habits',
		},
	];
	return (
		<div className='w-full flex flex-col justify-center items-center gap-5'>
			<h1 className='font-bold text-2xl md:text-4xl flex flex-col justify-center items-center'>
				Our Blogs
			</h1>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
				{staticCardContent.map((content, index) => {
					return (
						<Card
							key={index}
							className='w-full bg-base-100'>
							<CardContent className='flex flex-col gap-3'>
								<Image
									className='mt-5 rounded-xl'
									src={content.thumbnails}
									alt='Blog Thumbnail'
								/>
								<h2 className='font-bold text-lg'>{content.title}</h2>
								<p>{content.description}</p>
							</CardContent>
							<CardFooter>
								<Link
									className='text-cyan-400 flex flex-row items-center gap-1 group hover:text-cyan-500 transition-colors duration-200'
									href={content.link}>
									Read More
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										className='w-6 h-6 stroke-cyan-400 transition-transform duration-200 group-hover:translate-x-1'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
										/>
									</svg>
								</Link>
							</CardFooter>
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default OurBlogs;
