'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { AppointmentFormSchema } from '@/app/schema/FormsSchema';
import { provinces } from '@/app/schema/ProvinceData';
import { zodResolver } from '@hookform/resolvers/zod';
import type { z } from 'zod';
const AppointmentForm = () => {
	const [date, setDate] = useState<Date>();
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
	const fields = [
		{
			name: 'first_name',
			label: 'First Name',
			placeholder: 'Juan',
		},
		{
			name: 'middle_name',
			label: 'Middle Name',
			placeholder: 'Dela',
		},
		{
			name: 'last_name',
			label: 'Last Name',
			placeholder: 'Cruz',
		},
		{
			name: 'house_number',
			label: 'House Number',
			placeholder: '123',
		},
		{
			name: 'street',
			label: 'Street',
			placeholder: 'East Avenue',
		},
		{
			name: 'barangay',
			label: 'Barangay',
			placeholder: 'Diliman',
		},
		{
			name: 'zip_code',
			label: 'Zip Code',
			placeholder: '1101',
		},
		{
			name: 'date_of_birth',
			label: 'Date of Birth',
			placeholder: 'MM/DD/YYYY',
		},
		{
			name: 'email',
			label: 'Email',
			placeholder: 'someone@example.com',
		},
		{
			name: 'mobile_number',
			label: 'Mobile Number',
			placeholder: '+639123456789',
		},
		{
			name: 'doctor',
			label: 'Doctor',
			placeholder: 'Dr. Juan Dela Cruz',
		},
	];
	return (
		<Card className='w-full'>
			<CardHeader className='font-bold text-xl md:text-2xl lg:text-4xl'>
				<CardTitle>Book an Appointment</CardTitle>
				<CardDescription>
					Please fill out the form below to book an appointment.
				</CardDescription>
			</CardHeader>
			<Form {...form}>
				<form action={''}>
					<CardContent className='gap-3 md:gap-5 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
						{fields.map(({ name, label, placeholder }) => (
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

						<FormItem>
							<FormLabel>Province</FormLabel>
							<FormControl>
								<Select required>
									<SelectTrigger>
										<SelectValue placeholder='Select Province' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Province</SelectLabel>
											{provinces.map((province) => (
												<SelectItem
													key={province.id}
													value={province.name}>
													{province.name}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
						</FormItem>

						<FormItem>
							<FormLabel>City</FormLabel>
							<FormControl>
								<Select required>
									<SelectTrigger>
										<SelectValue placeholder='Select City' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Cities</SelectLabel>
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
						</FormItem>

						<FormItem>
							<FormLabel>Sex</FormLabel>
							<FormControl>
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
							</FormControl>
							<FormDescription>Select sex.</FormDescription>
						</FormItem>

						<FormItem>
							<FormLabel>Date of Appointment</FormLabel>
							<FormControl>
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
							</FormControl>

							<FormDescription>
								Select the date of your appointment.
							</FormDescription>
						</FormItem>

						<FormItem>
							<FormLabel>Department</FormLabel>
							<FormControl>
								<Select required>
									<SelectTrigger>
										<SelectValue placeholder='Select Department' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Departments</SelectLabel>
											<SelectItem value='anaesthesia'>
												Department of Anaesthesia
											</SelectItem>
											<SelectItem value='dentistry'>
												Department of Dentistry
											</SelectItem>
											<SelectItem value='obstetrics_and_gynecology'>
												Department of Obstetrics & Gynecology
											</SelectItem>
											<SelectItem value='pathology'>
												Department of Pathology
											</SelectItem>
											<SelectItem value='pediatrics'>
												Department of Pediatrics
											</SelectItem>
											<SelectItem value='radiology'>
												Department of Radiology
											</SelectItem>
											<SelectItem value='rehabilitation_medicine'>
												Department of Rehabilitation Medicine
											</SelectItem>
											<SelectItem value='surgery'>
												Department of Surgery
											</SelectItem>
											<SelectItem value='psychiatry'>
												Department of Psychiatry
											</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</FormControl>
							<FormDescription>
								Which department do you want to book an appointment?
							</FormDescription>
						</FormItem>
					</CardContent>
					<CardFooter className='flex justify-between items-center w-full'>
						<Button
							variant={'outline'}
							type='reset'>
							Reset
						</Button>
						<Button type='submit'>Submit</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	);
};

export default AppointmentForm;
