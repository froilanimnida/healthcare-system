'use client';
import React, { useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { setNewAppointmentDate } from '@/actions/Admin/postAction';
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
	});
	var onSubmitAppointment = async (data: z.infer<typeof SetNewDateSchema>) => {
		if (data.appointment_id_verification_input !== data.appointment_id) {
			toast.error('Appointment ID does not match!');
		}
	};
	const [newAppointmentDate, setNewAppointmentDate] = useState<Date>();
	return (
		<Form {...newDateForm}>
			<form
				className='flex flex-col justify-start gap-3 mt-5 w-auto'
				onSubmit={newDateForm.handleSubmit(onSubmitAppointment)}>
				<FormField
					name='date_of_appointment'
					render={({ field, fieldState: { error } }) => (
						<FormItem>
							<FormLabel>New Date of Appointment</FormLabel>
							<FormControl>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={'outline'}
											className={cn(
												'w-full justify-start text-left font-normal',
												!newAppointmentDate && 'text-muted-foreground',
											)}>
											<CalendarIcon className='mr-2 h-4 w-4' />
											{newAppointmentDate ? (
												format(newAppointmentDate, 'PPP')
											) : (
												<span>Pick a date</span>
											)}
										</Button>
									</PopoverTrigger>
									<PopoverContent className='w-auto p-0'>
										<Calendar
											disabled={(date) => {
												const isPastDate =
													date <= new Date() || date <= new Date('1900-01-01');
												const isWeekend =
													date.getDay() === 0 || date.getDay() === 6;
												return isPastDate || isWeekend;
											}}
											selected={newAppointmentDate}
											mode='single'
											onSelect={(date) => {
												setNewAppointmentDate(date);
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
									defaultValue={uuid}
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
						<FormItem>
							<FormLabel>Enter the Appointment ID for verification</FormLabel>
							<FormControl>
								<Input
									{...field}
									required
									type='text'
									onChange={(e) => {
										field.onChange(e);
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
				<Button
					type='submit'
					variant='default'
					className='w-full'>
					Set new date
				</Button>
			</form>
		</Form>
	);
};

export default CalendarNew;
