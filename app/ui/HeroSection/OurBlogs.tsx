import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StaticImageOne from '@/public/images/hero/static-blog-image-1.jpg';
import StaticImageTwo from '@/public/images/hero/static-blog-image-2.jpg';
import StaticImageThree from '@/public/images/hero/static-blog-image-3.jpg';
import { stat } from 'fs/promises';

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
		<div className='w-11/12 flex flex-col justify-center items-center gap-5'>
			<h1 className='font-semibold text-2xl md:text-4xl flex flex-col justify-center items-center'>
				Our Blogs
			</h1>
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
				{staticCardContent.map((content, index) => {
					return (
						<div
							key={index}
							className='card w-full bg-base-100 shadow-xl'>
							<figure>
								<Image
									src={content.thumbnails}
									alt='Shoes'
								/>
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>{content.title}</h2>
								<p>{content.description}</p>
								<div className='card-actions justify-end'>
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
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OurBlogs;
