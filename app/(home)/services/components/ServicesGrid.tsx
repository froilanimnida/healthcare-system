import React from 'react';
import { HoverEffect } from '@/components/ui/card-hover-effect';

export function ServicesGrid() {
	return (
		<div className='max-w-7xl w-11/12 mx-auto'>
			<HoverEffect items={items} />
		</div>
	);
}

const items = [
	{
		title: 'Prenatal',
		description:
			'Prenatal care is the act of having a healthy lifestyle while you are pregnant and attending regular checkups with a doctor or midwife throughout the duration of your pregnancy.',
		link: '/services/prenatal',
	},
	{
		title: 'Vaginal Cleaning',
		description:
			'Vaginal cleansing is the process of cleaning the vaginal area to maintain a healthy vaginal environment.',
		link: '/services/vaginal-cleaning',
	},
	{
		title: 'Dental',
		description:
			'Dental care involves the maintenance of healthy teeth and may refer to oral hygiene, dentistry, and oral surgery.',
		link: '/services/dental',
	},
	{
		title: 'Vaccination for Babies',
		description:
			'Vaccination for babies involves giving them vaccines to protect them from various diseases.',
		link: '/services/vaccination-for-babies',
	},
	{
		title: 'Maintenance for those in need',
		description:
			'Maintenance for those in need involves providing necessary care and support to those who are in need.',
		link: '/services/maintenance-for-those-in-need',
	},
	{
		title: 'HIV Testing',
		description:
			'HIV testing involves testing a person for the presence of HIV, the virus that causes AIDS.',
		link: '/services/hiv-testing',
	},
	{
		title: 'TB Dots',
		description:
			'TB Dots is a strategy used to ensure that people with tuberculosis take their medicine regularly and complete their treatment.',
		link: '/services/tb-dots',
	},
];
