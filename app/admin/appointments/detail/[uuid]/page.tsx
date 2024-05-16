import React, { Suspense } from 'react';
import { SkeletonCard } from '@/components/Skeletons/SkeletonCard';
import { getAppointmentDetails } from '@/actions/Admin/getActions';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
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
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Tables } from '@/app/lib/config/supabaseTypes';

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

	return (
		<>
			<div className='w-full p-5'>
				<Card className='w-full'>
					<CardHeader>
						<CardTitle>Create project</CardTitle>
						<CardDescription>
							Deploy your new project in one-click.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form>
							<Suspense fallback={<SkeletonCard />}>
								<div className='grid w-full items-center gap-4'>
									<div className='flex flex-col space-y-1.5'>
										<Input
											disabled
											defaultValue={appointmentDetails.first_name}
										/>
										<Input
											disabled
											defaultValue={appointmentDetails.middle_name}
										/>
										<Input
											disabled
											defaultValue={appointmentDetails.last_name}
										/>
										<Input
											disabled
											defaultValue={appointmentDetails.service}
										/>
										<Input
											defaultValue={appointmentDetails.date_of_appointment}
										/>
										<Input defaultValue={appointmentDetails.email} />
										<Input defaultValue={appointmentDetails.mobile_number} />
									</div>
								</div>
							</Suspense>
						</form>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<Button variant='outline'>Cancel</Button>
						<Button>Deploy</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default DetailedAppointmentOverviewPage;
