import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaticImageOne from '@/public/images/hero/static-blog-image-1.jpg';
import StaticImageTwo from '@/public/images/hero/static-blog-image-2.jpg';
import StaticImageThree from '@/public/images/hero/static-blog-image-3.jpg';
import { stat } from 'fs/promises';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const OurBlogs = () => {
	const staticCardContent = [
		{
			thumbnails: StaticImageOne,
			date: 'May 12, 2021',
			title: 'How to maintain good health',
			description:
				'Explore practical tips for a healthier lifestyle. Understand the importance of balanced nutrition, regular exercise, and adequate sleep.',
			link: '/how-to-maintain-good-health',
		},
		{
			thumbnails: StaticImageTwo,
			date: 'June 15, 2021',
			title: 'The importance of regular exercise',
			description:
				'Discover the benefits of consistent physical activity. Learn how regular exercise can improve your physical health and mental well-being.',
			link: '/importance-of-regular-exercise',
		},
		{
			thumbnails: StaticImageThree,
			date: 'July 20, 2021',
			title: 'Healthy eating habits',
			description:
				'Learn about nutritious foods and balanced diets. Get insights into how healthy eating habits can boost your immunity and overall health.',
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
