import React from 'react';
import ScheduleAppointmentForm from './ScheduleTelemedicineForm';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const page = () => {
	return (
		<div className='w-full flex justify-center items-center'>
			<Card className='w-11/12 max-w-screen-2xl'>
				<CardHeader>
					<CardTitle>Schedule Telemedicine</CardTitle>
					<CardDescription>Schedule a telemedicine appointment</CardDescription>
				</CardHeader>
				<CardContent>
					<ScheduleAppointmentForm />
				</CardContent>
			</Card>
		</div>
	);
};

export default page;
