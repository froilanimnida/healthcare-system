'use client';
import React, { useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { setNewAppointmentDate } from '@/actions/Admin/postAction';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SetNewDateSchema } from '@/app/schema/FormsSchema';
import toast from 'react-hot-toast';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';

interface CalendarNewProps {
	uuid: string;
}
const CalendarNew = ({ uuid }: CalendarNewProps) => {
	const newDateForm = useForm<z.infer<typeof SetNewDateSchema>>({
		resolver: zodResolver(SetNewDateSchema),
		defaultValues: {
			date_of_appointment: new Date(),
			appointment_id: uuid,
			appointment_id_verification_input: '',
		},
	});
	var onSubmitAppointment = async (data: z.infer<typeof SetNewDateSchema>) => {
		if (data.appointment_id_verification_input !== data.appointment_id) {
			toast.error('Appointment ID does not match!');
			return;
		}

		const newDate = new Date(data.date_of_appointment);
		const uuid = data.appointment_id;

		setIsSubmitting(true);
		toast.promise(setNewAppointmentDate(data), {
			loading: 'Changing appointment date...',
			success: 'Appointment date changed!',
			error: (err) => err.message || 'Failed to change appointment date!',
		});
	};
	const [newDate, setNewDate] = useState<Date>();
	const [matchedAppointment, setMatchedAppointment] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	return (
		<Form {...newDateForm}>
			<form
				className='flex flex-col justify-start gap-3 mt-14 w-auto'
				onSubmit={newDateForm.handleSubmit(onSubmitAppointment)}>
				<h1 className='font-bold text-xl'>Change the appointment date here:</h1>
				<div className='flex flex-col md:flex-row gap-3 items-center '>
					<FormField
						name='date_of_appointment'
						render={({ field, fieldState: { error } }) => (
							<FormItem className='w-1/3'>
								<FormLabel>New Date of Appointment</FormLabel>
								<FormControl>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={'outline'}
												className={cn(
													'w-full justify-start text-left font-normal',
													!newDate && 'text-muted-foreground',
												)}>
												<CalendarIcon className='mr-2 h-4 w-4' />
												{newDate ? (
													format(newDate, 'PPP')
												) : (
													<span>Pick a date</span>
												)}
											</Button>
										</PopoverTrigger>
										<PopoverContent className='w-auto p-0'>
											<Calendar
												disabled={(date) => {
													const isPastDate =
														date <= new Date() ||
														date <= new Date('1900-01-01');
													const isWeekend =
														date.getDay() === 0 || date.getDay() === 6;
													return isPastDate || isWeekend;
												}}
												selected={newDate}
												mode='single'
												onSelect={(date) => {
													setNewDate(date);
													const event = {
														target: {
															name: field.name,
															value: date,
														},
													};
													field.onChange(event);
												}}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</FormControl>
								{error && <FormDescription></FormDescription>}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name='appointment_id'
						render={({ field, fieldState: { error } }) => (
							<FormItem>
								<FormControl>
									<Input
										{...field}
										required
										type='hidden'
									/>
								</FormControl>
								{error && <FormDescription></FormDescription>}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						name='appointment_id_verification_input'
						render={({ field, fieldState: { error } }) => (
							<FormItem className='w-1/3'>
								<FormLabel>Enter the Appointment ID for verification</FormLabel>
								<FormControl>
									<Input
										{...field}
										required
										type='text'
										onChange={(e) => {
											field.onChange(e);
											if (e.target.value === uuid) {
												setMatchedAppointment(true);
											} else {
												setMatchedAppointment(false);
											}
										}}
										placeholder='Appointment ID'
										className='w-full'
									/>
								</FormControl>
								{error && <FormDescription></FormDescription>}
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex flex-col md:flex-row gap-5 mt-3'>
					<Button
						disabled={!newDate || !matchedAppointment || isSubmitting}
						type='submit'
						variant='default'>
						Set new date
					</Button>
					<Button
						disabled={isSubmitting}
						variant='outline'>
						<Link href='/admin/appointments'>Back</Link>
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default CalendarNew;
