import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
interface FormCardProps {
	title: string;
	description: string;
	children: React.ReactNode;
	className?: string;
}

const FormCard = ({
	className,
	title,
	description,
	children,
}: FormCardProps) => {
	return (
		<Card className={`w-11/12 ${className ?? ''}`}>
			<CardHeader className='font-bold text-xl md:text-2xl lg:text-4xl'>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
};

export default FormCard;
