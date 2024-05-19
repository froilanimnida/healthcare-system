import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SearchAppointmentForm from '@/app/appointment/search/SearchAppointmentForm';
import {
	Card,
	CardDescription,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const SearchAppointment = () => {
	return (
		<div className='w-full flex justify-center items-center'>
			<Card className='w-11/12 md:w-3/4 lg:w-1/2'>
				<CardHeader>
					<CardTitle>Search Appointment</CardTitle>
					<CardDescription>
						Search for an appointment by appointment uuid
					</CardDescription>
				</CardHeader>
				<CardContent>
					<SearchAppointmentForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default SearchAppointment;
