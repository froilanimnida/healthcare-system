'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { handleAppointment } from '@/app/appointment/appointmentAction';
import FormCard from '@/components/FormCard';
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
import { CardContent, CardFooter } from '@/components/ui/card';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { AppointmentFormSchema } from '@/app/schema/FormsSchema';
import { Cities } from '@/app/schema/Cities';
import { zodResolver } from '@hookform/resolvers/zod';
import { type z } from 'zod';
import toast from 'react-hot-toast';
const AppointmentForm = () => {
	const [appointmentDate, setAppointmentDate] = useState<Date>();
	const [confirm, setConfirm] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const { executeRecaptcha } = useGoogleReCaptcha();

	const defaultValues = {
		first_name: '',
		middle_name: '',
		last_name: '',
		age: 18,
		city: '',
		barangay: '',
		zip_code: 123456789,
		home_address_line_1: '',
		home_address_line_2: '',
		email: '',
		mobile_number: '',
		alternate_mobile_number: '',
		alternate_email: '',
		date_of_birth: '',
		sex: '',
		service: '',
		date_of_appointment: new Date(),
	};
	const AppointmentFormFields = [
		{
			name: 'first_name',
			type: 'text',
			label: 'First Name',
			placeholder: 'Juan',
		},
		{
			name: 'middle_name',
			type: 'text',
			label: 'Middle Name',
			placeholder: 'Dela',
		},
		{
			name: 'last_name',
			type: 'text',
			label: 'Last Name',
			placeholder: 'Cruz',
		},
		{
			name: 'age',
			type: 'number',
			label: 'Age',
			placeholder: '18',
		},
		{
			name: 'barangay',
			type: 'text',
			label: 'Barangay',
			placeholder: 'Diliman',
		},
		{
			name: 'zip_code',
			type: 'number',
			label: 'Zip Code',
			placeholder: '1101',
		},
		{
			name: 'home_address_line_1',
			type: 'text',
			label: 'Home Address Line 1',
			placeholder: '123 East Avenue',
		},
		{
			name: 'home_address_line_2',
			type: 'text',
			label: 'Home Address Line 2',
			placeholder: 'Diliman',
		},
		{
			name: 'email',
			type: 'email',
			label: 'Email',
			placeholder: 'Email',
		},
		{
			name: 'mobile_number',
			type: 'text',
			label: 'Mobile Number',
			placeholder: 'Mobile Number',
		},
		{
			name: 'alternate_mobile_number',
			type: 'text',
			label: 'Alternate Mobile Number',
			placeholder: 'Alternate Mobile Number',
		},
		{
			name: 'alternate_email',
			type: 'email',
			label: 'Alternate Email',
			placeholder: 'Alternate Email',
		},
	];

	const resetFormField = () => {
		appointmentForm.reset(defaultValues);
		setAppointmentDate(new Date());
		setConfirm(false);
	};
	const appointmentForm = useForm<z.infer<typeof AppointmentFormSchema>>({
		resolver: zodResolver(AppointmentFormSchema),
		defaultValues,
	});

	const onSubmitAppointment = async (
		values: z.infer<typeof AppointmentFormSchema>,
	) => {
		setSubmitting(true);
		console.log(values);
		console.log('Form Submitted');
		if (!executeRecaptcha) {
			console.log('not available to execute recaptcha');
			return;
		}

		const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

		const response = await axios({
			method: 'post',
			url: '../../api/',
			data: {
				gRecaptchaToken,
			},
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		});

		if (response?.data?.success === true) {
			toast.promise(handleAppointment(values), {
				loading: 'Submitting Appointment...',
				success: () => {
					return 'Appointment Submitted!';
				},
				error: (err) => {
					return err.message;
				},
			});
			setSubmitting(false);
		} else toast.error('Captcha Verification Failed.');
	};

	return (
		<div className='w-full items-center justify-center flex'>
			<FormCard
				title='Book and Appointment'
				description='Please fill out the form below to book an appointment.'>
				<Form {...appointmentForm}>
					<form onSubmit={appointmentForm.handleSubmit(onSubmitAppointment)}>
						<CardContent className='gap-3 md:gap-5 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
							{AppointmentFormFields.map(
								({ name, label, placeholder, type }) => (
									<FormField
										key={name}
										name={name}
										render={({ field, fieldState: { error } }) => (
											<FormItem>
												<FormLabel>{label}</FormLabel>
												<FormControl>
													<Input
														required
														placeholder={placeholder}
														{...field}
														type={type}
														value={
															field.value === 'number'
																? Number(field.value)
																: field.value
														}
														onChange={(e) => {
															if (type === 'number') {
																field.onChange(Number(e.target.value));
															} else {
																field.onChange(e.target.value);
															}
														}}
													/>
												</FormControl>
												{error && <FormDescription></FormDescription>}
												<FormMessage />
											</FormItem>
										)}
									/>
								),
							)}

							<FormField
								name='date_of_birth'
								render={({ field, fieldState: { error } }) => (
									<FormItem>
										<FormLabel>Date of Birth</FormLabel>
										<FormControl>
											<Input
												required
												type='date'
												{...field}
											/>
										</FormControl>
										{error && <FormDescription></FormDescription>}
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={appointmentForm.control}
								name='city'
								render={({ field, fieldState: { error } }) => (
									<FormItem>
										<FormLabel>City</FormLabel>
										<Select
											required
											onValueChange={field.onChange}>
											<FormControl>
												<SelectTrigger>
													<SelectValue placeholder='Select City' />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>City</SelectLabel>
													{Cities.map((city) => (
														<SelectItem
															key={city.id}
															value={city.name}>
															{city.name}
														</SelectItem>
													))}
												</SelectGroup>
											</SelectContent>
										</Select>
										{error && <FormDescription></FormDescription>}
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								name='sex'
								control={appointmentForm.control}
								render={({ field, fieldState: { error } }) => (
									<FormItem>
										<FormLabel>Sex</FormLabel>
										<FormControl>
											<Select
												onValueChange={field.onChange}
												required>
												<SelectTrigger>
													<SelectValue placeholder='Select your sex' />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Sex</SelectLabel>
														<SelectItem value='male'>Male</SelectItem>
														<SelectItem value='female'>Female</SelectItem>
														<SelectItem value='other'>Other</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</FormControl>
										{error && <FormDescription></FormDescription>}
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={appointmentForm.control}
								name='services'
								render={({ field, fieldState: { error } }) => (
									<FormItem>
										<FormLabel>Service</FormLabel>
										<FormControl>
											<Select
												required
												onValueChange={field.onChange}>
												<SelectTrigger>
													<SelectValue placeholder='Select Service' />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Service</SelectLabel>
														<SelectItem value='prenatal'>Prenatal</SelectItem>
														<SelectItem value='vaginal_cleaning'>
															Vaginal Cleaning
														</SelectItem>
														<SelectItem value='dental'>Dental</SelectItem>
														<SelectItem value='vaccination_for_babies'>
															Vaccination for Babies
														</SelectItem>
														<SelectItem value='maintenance_for_those_in_need'>
															Maintenance for those in need
														</SelectItem>
														<SelectItem value='hiv_testing'>
															HIV Testing
														</SelectItem>
														<SelectItem value='tb_dots'>TB Dots</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</FormControl>
										{error && <FormDescription></FormDescription>}
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								name='date_of_appointment'
								render={({ field, fieldState: { error } }) => (
									<FormItem>
										<FormLabel>Date of Appointment</FormLabel>
										<FormControl>
											<Popover>
												<PopoverTrigger asChild>
													<Button
														variant={'outline'}
														className={cn(
															'w-full justify-start text-left font-normal',
															!appointmentDate && 'text-muted-foreground',
														)}>
														<CalendarIcon className='mr-2 h-4 w-4' />
														{appointmentDate ? (
															format(appointmentDate, 'PPP')
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
														selected={appointmentDate}
														mode='single'
														onSelect={(date) => {
															setAppointmentDate(date);
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
						</CardContent>
						<CardFooter className='flex gap-5 md:gap-0 justify-between items-center flex-col md:flex-row w-full'>
							<div className='flex items-center space-x-2'>
								<Checkbox
									required
									onCheckedChange={(e) => {
										setConfirm(e === 'indeterminate' ? false : e);
									}}
									id='confirm'
								/>
								<label
									htmlFor='confirm'
									className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
									Please confirm that the information provided is true and
									correct.
								</label>
							</div>
							<div
								className={`flex gap-5 items-center justify-center md:justify-end w-full md:w-1/6 flex-col md:flex-row space-x-2`}>
								<Button
									type='submit'
									disabled={submitting || !confirm}>
									{submitting && (
										<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
									)}
									Submit
								</Button>
								<Button
									onClick={resetFormField}
									variant={'outline'}
									type='reset'
									disabled={submitting}>
									{submitting && (
										<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
									)}
									Reset
								</Button>
							</div>
						</CardFooter>
					</form>
				</Form>
			</FormCard>
		</div>
	);
};

export default AppointmentForm;
