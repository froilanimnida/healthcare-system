import React, { Suspense } from 'react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import {
	Card,
	CardDescription,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CancelAppointmentAction from './CancelAppointment';
import RescheduleAppointment from './RescheduleAppointment';
import { getAppointmentDetails } from '@/actions/client/getActions';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';
import Skeleton from '@/components/Skeletons/Skeleton';

const ViewAppointmentForm = async ({
	params,
}: {
	params: { uuid: string };
}) => {
	const fields = {
		first_name: 'First Name',
		middle_name: 'Middle Name',
		last_name: 'Last Name',
		alternate_mobile_number: 'Alternate Mobile Number',
		mobile_number: 'Mobile Number',
		alternate_email: 'Alternate Email',
		sex: 'Sex',
		date_of_appointment: 'Date of Appointment',
		email: 'Email',
		remarks: 'Remarks',
		age: 'Age',
		barangay: 'Barangay',
	};

	var {
		first_name,
		middle_name,
		last_name,
		alternate_mobile_number,
		mobile_number,
		alternate_email,
		sex,
		date_of_appointment,
		email,
		remarks,
		age,
		barangay,
	} = (await getAppointmentDetails(params.uuid)) ?? {};

	// null checking
	first_name = first_name ?? 'N/A';
	middle_name = middle_name ?? 'N/A';
	last_name = last_name ?? 'N/A';
	alternate_mobile_number = alternate_mobile_number ?? 'N/A';
	mobile_number = mobile_number ?? 'N/A';
	alternate_email = alternate_email ?? 'N/A';
	sex = sex ?? 'N/A';
	date_of_appointment = date_of_appointment ?? 'N/A';
	email = email ?? 'N/A';
	remarks = remarks ?? 'N/A';
	age = age ?? 'N/A';
	barangay = barangay ?? 'N/A';

	return (
		<div className='w-full flex justify-center items-center'>
			<Card className='w-11/12 max-w-screen-2xl'>
				<CardHeader>
					<CardTitle>Appointment Details</CardTitle>
					<CardDescription>
						Details of the appointment with {first_name} {last_name}
					</CardDescription>
				</CardHeader>
				<Suspense fallback={<Skeleton />}>
					<CardContent>
						<div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
							{Object.entries(fields).map(([key, value]) => (
								<div
									key={key}
									className='grid gap-1'>
									<Label htmlFor={key}>{value}</Label>
									<Input
										name={key}
										type='text'
										value={eval(key)}
										readOnly
									/>
								</div>
							))}
						</div>
					</CardContent>
					<CardFooter className='flex flex-col justify-between md:flex-row gap-3'>
						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button variant={'destructive'}>Cancel Appointment</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
									<AlertDialogDescription>
										This action cannot be undone. This will permanently cancel
										the appointment.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<CancelAppointmentAction appointment_uuid={params.uuid} />
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
						<Dialog>
							<DialogTrigger asChild>
								<Button>Reschedule Appointment</Button>
							</DialogTrigger>
							<RescheduleAppointment appointment_uuid={params.uuid} />
						</Dialog>
					</CardFooter>
				</Suspense>
			</Card>
		</div>
	);
};

export default ViewAppointmentForm;
