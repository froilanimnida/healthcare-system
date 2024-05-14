'use client';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import ReCAPTCHA from 'react-google-recaptcha';
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
import type { z } from 'zod';
import FormItemChunk from '@/components/FormItemChunk';
const AppointmentForm = () => {
	const [date, setDate] = useState<Date>();
	const [confirm, setConfirm] = useState(false);
	const [captcha, setCaptcha] = useState<string | null>();
	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const { executeRecaptcha } = useGoogleReCaptcha();
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!executeRecaptcha) {
			console.log('Not Available');
			return;
		}

		const recaptchaToken = await executeRecaptcha('submit');

		const response = await axios({
			method: 'post',
			url: '../../api/',
			data: {
				recaptchaToken,
			},
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
		});

		console.log(response.data);
		if (response?.data?.success === true) {
			console.log('Recaptcha token verified');
		} else {
			console.error('Recaptcha token verification failed');
		}
	};
	const form = useForm<z.infer<typeof AppointmentFormSchema>>({
		resolver: zodResolver(AppointmentFormSchema),
		defaultValues: {
			first_name: '',
			middle_name: '',
			last_name: '',
			province: '',
			city: '',
			house_number: '',
			street: '',
			barangay: '',
			zip_code: '',
			date_of_birth: '',
			email: '',
			mobile_number: '',
			sex: '',
			senior_or_pwd: false,
			department: '',
			doctor: '',
		},
	});

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
			name: 'city',
			type: 'text',
			label: 'City',
			placeholder: 'Quezon City',
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
			name: 'Home Address Line 1',
			type: 'text',
			label: 'Home Address Line 1',
			placeholder: '123 East Avenue',
		},
		{
			name: 'Home Address Line 2',
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
	const onReCAPTCHAChange = (captchaCode: string) => {
		console.log('Captcha verified');

		if (!captchaCode) {
			return;
		}

		console.log('Captcha code:', captchaCode);
	};
	const asyncScriptOnLoad = () => {
		console.log('Google recaptcha loaded just fine');
	};
	return (
		<div className='w-full items-center justify-center flex'>
			<FormCard
				title='Book and Appointment'
				description='Please fill out the form below to book an appointment.'>
				<Form {...form}>
					<form action={''}>
						<CardContent className='gap-3 md:gap-5 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
							{AppointmentFormFields.map(({ name, label, placeholder }) => (
								<FormField
									key={name}
									name={name}
									render={({ field }) => (
										<FormItem>
											<FormLabel>{label}</FormLabel>
											<FormControl>
												<Input
													required
													placeholder={placeholder}
													{...field}
												/>
											</FormControl>
											<FormDescription>
												Enter your {label.toLowerCase()}.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}

							<FormItemChunk
								label='Date of Birth'
								description='Select your Date of Birth'>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={'outline'}
											className={cn(
												'w-full justify-start text-left font-normal',
												!date && 'text-muted-foreground',
											)}>
											<CalendarIcon className='mr-2 h-4 w-4' />
											{date ? format(date, 'PPP') : <span>Pick a date</span>}
										</Button>
									</PopoverTrigger>
									<PopoverContent className='w-auto p-0'>
										<Calendar
											mode='single'
											selected={date}
											onSelect={setDate}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
							</FormItemChunk>

							<FormItemChunk
								label='City'
								description='Select City'>
								<Select
									name='city'
									required>
									<SelectTrigger>
										<SelectValue placeholder='Select City' />
									</SelectTrigger>
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
							</FormItemChunk>

							<FormItemChunk
								label='Sex'
								description='Select sex.'>
								<Select required>
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
							</FormItemChunk>

							<FormItemChunk
								label='Date of Appointment'
								description='Select your appointment date.'>
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={'outline'}
											className={cn(
												'w-full justify-start text-left font-normal',
												!date && 'text-muted-foreground',
											)}>
											<CalendarIcon className='mr-2 h-4 w-4' />
											{date ? format(date, 'PPP') : <span>Pick a date</span>}
										</Button>
									</PopoverTrigger>
									<PopoverContent className='w-auto p-0'>
										<Calendar
											mode='single'
											selected={date}
											onSelect={setDate}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
							</FormItemChunk>

							<FormItemChunk
								label='Services'
								description='Which service you want to have an appointment to?'>
								<Select
									required
									onValueChange={(value) => console.log(value)}>
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
											<SelectItem value='hiv_testing'>HIV Testing</SelectItem>
											<SelectItem value='tb_dots'>TB Dots</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormItemChunk>
						</CardContent>
						<CardFooter className='flex justify-between items-center w-full'>
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
							<Button
								variant={'outline'}
								type='reset'>
								Reset
							</Button>
							<Button
								onClick={handleSubmit}
								disabled={!confirm}
								type='submit'>
								Submit
							</Button>
						</CardFooter>
					</form>
				</Form>
			</FormCard>
		</div>
	);
};

export default AppointmentForm;
