'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { v4 } from 'uuid';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	FormItem,
	FormControl,
	Form,
	FormDescription,
	FormMessage,
	FormField,
	FormLabel,
} from '@/components/ui/form';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { TeleMedicineFormSchema } from '@/app/schema/TeleMedicineFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const ScheduleTeleMedicineForm = () => {
	const [scheduleDate, setScheduleDate] = useState<Date>();
	const [callId, setCallId] = useState(v4());
	const defaultValues = {
		call_id: callId,
		first_name: '',
		last_name: '',
		age: '0',
		date_of_telemedicine: new Date(),
		email: '',
		phone_number: '',
		remarks: '',
	};
	const telemedicineForm = useForm<z.infer<typeof TeleMedicineFormSchema>>({
		resolver: zodResolver(TeleMedicineFormSchema),
		defaultValues,
	});

	const onSubmitTelemedicineForm = async (
		data: z.infer<typeof TeleMedicineFormSchema>,
	) => {
		console.log(data);
	};

	return (
		<div>
			<Form {...telemedicineForm}>
				<form
					className='w-full flex flex-col space-y-4'
					onSubmit={telemedicineForm.handleSubmit(onSubmitTelemedicineForm)}>
					<div className='grid gird-cols-1 gap-4 md:grid-cols-2 md:gap-8 '>
						<FormField
							name='call_id'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Call ID *click to copy this</FormLabel>
									<FormControl>
										<Input
											type='text'
											{...field}
											readOnly
											value={callId}
											onClick={() => {
												navigator.clipboard.writeText(callId);
											}}
											style={{ cursor: 'pointer' }}
										/>
									</FormControl>
									{error && <FormDescription></FormDescription>}
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name='first_name'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>First Name *</FormLabel>
									<FormControl>
										<Input
											type='text'
											{...field}
											required
										/>
									</FormControl>
									{error && <FormDescription></FormDescription>}
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name='last_name'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Last Name *</FormLabel>
									<FormControl>
										<Input
											type='text'
											{...field}
											required
										/>
									</FormControl>
									{error && <FormDescription></FormDescription>}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='age'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Age *</FormLabel>
									<FormControl>
										<Input
											type='number'
											{...field}
											required
										/>
									</FormControl>
									{error && <FormDescription></FormDescription>}
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							name='date_of_telemedicine'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Date of TeleMedicine</FormLabel>
									<FormControl>
										<Popover>
											<PopoverTrigger asChild>
												<Button
													variant={'outline'}
													className={cn(
														'w-full justify-start text-left font-normal',
														!scheduleDate && 'text-muted-foreground',
													)}>
													<CalendarIcon className='mr-2 h-4 w-4' />
													{scheduleDate ? (
														format(scheduleDate, 'PPP')
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
														return isPastDate;
													}}
													selected={scheduleDate}
													mode='single'
													onSelect={(date) => {
														setScheduleDate(date);
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
							name='email'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type='email'
											{...field}
										/>
									</FormControl>
									{error && <FormDescription></FormDescription>}
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name='phone_number'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input
											type='tel'
											{...field}
										/>
									</FormControl>
									{error && <FormDescription></FormDescription>}
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name='reason_for_call'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Reason for Call*</FormLabel>
									<Select
										required
										value={field.value}
										onValueChange={field.onChange}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder='Reason for Call' />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Reason</SelectLabel>
												<SelectItem value='General Consultation'>
													General Consultation
												</SelectItem>
												<SelectItem value='Follow-up'>Follow-up</SelectItem>
												<SelectItem value='Prescription Refill'>
													Prescription Refill
												</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
									{error && <FormDescription></FormDescription>}
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							name='remarks'
							render={({ field, fieldState: { error } }) => (
								<FormItem>
									<FormLabel>Remarks</FormLabel>
									<FormControl>
										<Input
											type='text'
											{...field}
										/>
									</FormControl>
									{error && <FormDescription></FormDescription>}
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button type='submit'>Schedule Appointment</Button>
				</form>
			</Form>
		</div>
	);
};

export default ScheduleTeleMedicineForm;
