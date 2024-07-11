import { cn } from '@/utils/cn';
import React from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';

export function DoctorsGrid() {
	return (
		<BentoGrid className='w-11/12 max-w-screen-2xl mx-auto'>
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className='cursor-pointer'
				/>
			))}
		</BentoGrid>
	);
}
const Skeleton = () => (
	<div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
);
const items = [
	{
		title: 'Nora S. Velasquez, BSM, RM',
		description: 'Clinic Owner',
		header: <Skeleton />,
	},
	{
		title: 'Maria Jeddah B. Tan, MD',
		description: 'Obstetrician-Gynecologist',
		header: <Skeleton />,
	},
	{
		title: 'Ruby R. Rivera, MD',
		description: 'Pediatrician',
		header: <Skeleton />,
	},
	{
		title: 'Maria Dolores O. Bugante, RM',
		description: 'Midwife staff',
		header: <Skeleton />,
	},
	{
		title: 'Regine Anne S. Velasquez, RM',
		description: 'Midwife staff/Clinic Driver/Clerk',
		header: <Skeleton />,
	},
	{
		title: 'Rosalie Fajardo, BSM, RM',
		description: 'On-Call Midwife',
		header: <Skeleton />,
	},
];
