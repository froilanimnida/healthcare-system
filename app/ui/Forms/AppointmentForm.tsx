'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
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
			name: 'province',
			label: 'Province',
			placeholder: 'Metro Manila',
		},
		{
			name: 'city',
			label: 'City',
			placeholder: 'Quezon City',
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
			name: 'sex',
			label: 'Sex',
			placeholder: '',
		},
		{
			name: 'department',
			label: 'Department',
			placeholder: 'Cardiology',
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
					Please fill up the form below to book an appointment.
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
								<Select>
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
								<Select>
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
							<FormLabel>Gender</FormLabel>
							<FormControl>
								<RadioGroup className='flex flex-col md:flex-row'>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='male'
											id='r1'
										/>
										<Label htmlFor='r1'>Male</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='female'
											id='r2'
										/>
										<Label htmlFor='r2'>Female</Label>
									</div>
									<div className='flex items-center space-x-2'>
										<RadioGroupItem
											value='other'
											id='r3'
										/>
										<Label htmlFor='r3'>Other</Label>
									</div>
								</RadioGroup>
							</FormControl>
							<FormDescription>Select gender.</FormDescription>
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
