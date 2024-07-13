import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import IWantToKnowMoreDialog from '@/app/(home)/services/components/IWantToKnowMoreDialog';

interface ServiceCardProps {
	title: string;
	description: string;
	first_line: string;
	content: {
		sub_title: string;
		sub_content: string;
	}[];
	links: {
		title: string;
		url: string;
	}[];
}

const ServiceCard = ({
	title,
	description,
	first_line,
	content,
	links,
}: ServiceCardProps) => {
	return (
		<Card className='w-11/12 max-w-screen-2xl'>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className='flex flex-col gap-5'>
				<p>{first_line}</p>
				{content.map((item, index) => (
					<p key={index}>
						<strong>{item.sub_title}</strong> {item.sub_content}
					</p>
				))}
			</CardContent>
			<CardFooter className='flex justify-between items-center flex-row'>
				<IWantToKnowMoreDialog
					title={title}
					links={links}
				/>
				<Button
					asChild
					variant={'ghost'}>
					<Link href={'/services'}>Back</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ServiceCard;
