'use client';
import React, { useState } from 'react';
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { setNewAppointmentDate } from '@/actions/Admin/postAction';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SetNewDateSchema } from '@/app/schema/FormsSchema';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
interface RescheduleAppointmentProps {
	appointment_uuid: string;
}

const RescheduleAppointment = ({
	appointment_uuid,
}: RescheduleAppointmentProps) => {

	const newDateForm = useForm<z.infer<typeof SetNewDateSchema>>({
		resolver: zodResolver(SetNewDateSchema),
		defaultValues: {
			date_of_appointment: new Date(),
			appointment_id: appointment_uuid,
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
		<DialogContent className='sm:max-w-[425px]'>
			<DialogHeader>
				<DialogTitle>Reschedule this appointment</DialogTitle>
				<DialogDescription>Change the appointment date</DialogDescription>
			</DialogHeader>
			<Form {...newDateForm}>
				<form
					className='flex flex-col gap-3 w-full'
					onSubmit={newDateForm.handleSubmit(onSubmitAppointment)}>
					<div className='flex flex-col w-full gap-3 items-center '>
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
								<FormItem>
									<FormLabel>
										Enter the Appointment ID for verification
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											required
											type='text'
											onChange={(e) => {
												field.onChange(e);
												if (e.target.value === appointment_uuid) {
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
					<DialogFooter>
						<Button
							disabled={!newDate || !matchedAppointment || isSubmitting}
							type='submit'
							variant='default'>
							Set new changes
						</Button>
					</DialogFooter>
				</form>
			</Form>
		</DialogContent>
	);
};

export default RescheduleAppointment;
