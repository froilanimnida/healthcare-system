import React, { Suspense } from 'react';
import { SkeletonCard } from '@/components/Skeletons/SkeletonCard';
import { getAppointmentDetails } from '@/actions/Admin/getActions';
import CalendarNew from './CalendarNew';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Appointment = {
	appointment_uuid: string;
	alternate_email: string | null;
	alternate_mobile_number?: number | null;
	appointment_id: string;
	city: string;
	date_of_appointment: string;
	date_of_birth: string;
	email: string;
	first_name: string;
	home_address_line_1: string;
	home_address_line_2: string;
	house_number: string;
	last_name: string;
	middle_name: string;
	mobile_number: number;
	province: string;
	service: string;
	sex: string;
	zip_code: number;
};
const DetailedAppointmentOverviewPage = async ({
	params,
}: {
	params: { uuid: string };
}) => {
	var appointmentDetails = (await getAppointmentDetails(params.uuid)) ?? {};
	const keys = Object.keys(appointmentDetails);

	return (
		<>
			<div className='w-full p-5'>
				<Card className='w-full'>
					<CardHeader>
						<CardTitle>
							Detailed view of appointment: {appointmentDetails.appointment_id}
						</CardTitle>
						<CardDescription>
							Here you can view the details of the appointment and make changes
							on the date of appointment.
						</CardDescription>
					</CardHeader>
					<CardContent>
						{/* TODO: EXtract other parts of the ui here that doesnt need any browser APIs */}
						<Suspense fallback={<SkeletonCard />}>
							<div className='w-full'>
								<div className='grid w-full items-center grids-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-1.5'>
									{keys.map((key) => (
										<div key={key}>
											<Label htmlFor={key}>
												{key
													.replace(/_/g, ' ')
													.replace(/([A-Z])/g, ' $1')
													.replace(/^./, (char) => char.toUpperCase())
													.toUpperCase()}
											</Label>
											<Input
												key={key}
												id={key}
												disabled
												defaultValue={
													appointmentDetails[key as keyof Appointment]
												}
											/>
										</div>
									))}
								</div>
							</div>
						</Suspense>

						<CalendarNew uuid={params.uuid.toString()} />
					</CardContent>
				</Card>
			</div>
		</>
	);
};

export default DetailedAppointmentOverviewPage;
