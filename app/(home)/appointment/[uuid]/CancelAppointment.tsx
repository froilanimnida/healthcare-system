'use client';
import React, { useState } from 'react';
import { AlertDialogAction } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { cancelAppointment } from '@/actions/client/postActions';
import toast from 'react-hot-toast';
import { Icons } from '@/components/ui/icons';

interface CancelAppointmentActionProps {
	appointment_uuid: string;
}

const CancelAppointmentAction = ({
	appointment_uuid,
}: CancelAppointmentActionProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const handleCancelAppointment = async (appointment_uuid: string) => {
		const appointmentPromise = cancelAppointment(appointment_uuid);
		setIsLoading(true);
		toast.promise(appointmentPromise, {
			loading: 'Cancelling appointment...',
			success: () => {
				return 'Appointment cancelled!';
			},
			error: 'Failed to cancel appointment',
		});
	};
	return (
		<>
			<AlertDialogAction asChild>
				<Button
					variant={'destructive'}
					disabled={isLoading}
					onClick={() => {
						handleCancelAppointment(appointment_uuid);
					}}>
					{isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
					Yes, Cancel Appointment
				</Button>
			</AlertDialogAction>
		</>
	);
};

export default CancelAppointmentAction;
