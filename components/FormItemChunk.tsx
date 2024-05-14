import React from 'react';
import {
	FormControl,
	FormDescription,
	FormItem,
	FormLabel,
} from '@/components/ui/form';

interface FormItemChunk {
	description: string;
	label: string;
	children: React.ReactNode;
}
const FormItemChunk = ({ children, label, description }: FormItemChunk) => {
	return (
		<FormItem>
			<FormLabel>{label}</FormLabel>
			<FormControl>{children}</FormControl>
			<FormDescription>{description}</FormDescription>
		</FormItem>
	);
};

export default FormItemChunk;
