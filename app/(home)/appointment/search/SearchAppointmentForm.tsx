'use client';
import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SearchAppointmentSchema } from '@/app/schema/FormsSchema';
import { z } from 'zod';
import { Icons } from '@/components/ui/icons';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { checkIfAppointmentExists } from '@/actions/client/getActions';

const SearchAppointmentForm = () => {
	const [isSearching, setIsSearching] = useState(false);
	const searchAppointmentForm = useForm<
		z.infer<typeof SearchAppointmentSchema>
	>({
		resolver: zodResolver(SearchAppointmentSchema),
		defaultValues: {
			appointment_id: '',
		},
	});

	var onSubmitSearch = async (
		data: z.infer<typeof SearchAppointmentSchema>,
	) => {
		if (data.appointment_id.length === 0) {
			toast.error('Appointment ID is required!');
		} else if (data.appointment_id.search(/[^a-zA-Z0-9-]/) !== -1) {
			toast.error('Appointment ID is invalid!');
		} else if (data.appointment_id.length < 20) {
			toast.error('Appointment ID must be 20 characters long!');
		} else {
			setIsSearching(true);
			toast.promise(checkIfAppointmentExists(data.appointment_id), {
				loading: 'Searching for appointment...',
				success: 'Appointment found, redirecting to details page...',
				error: 'Appointment not found or is cancelled!',
			});
			setIsSearching(false);
		}
	};
	return (
		<>
			<Form {...searchAppointmentForm}>
				<form
					className='flex flex-col gap-3 w-full'
					onSubmit={searchAppointmentForm.handleSubmit(onSubmitSearch)}>
					<FormField
						name='appointment_id'
						render={({ field, fieldState: { error } }) => (
							<FormItem>
								<FormLabel>Enter appointment ID:</FormLabel>
								<FormControl>
									<Input
										{...field}
										required
										type='text'
										onChange={field.onChange}
										placeholder='Appointment ID'
										className='w-full'
									/>
								</FormControl>
								{error && <FormDescription></FormDescription>}
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						disabled={isSearching}
						type='submit'
						variant='default'>
						{isSearching && (
							<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
						)}
						Search Appointment
					</Button>
				</form>
			</Form>
		</>
	);
};

export default SearchAppointmentForm;
