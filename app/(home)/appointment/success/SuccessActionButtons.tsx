'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { getDateOfSpecificAppointment } from '@/actions/client/getActions';
import toast from 'react-hot-toast';
import Link from 'next/link';

interface RSVPButtonProps {
	appointment_uuid: string;
}
const SuccessActionButtons = ({ appointment_uuid }: RSVPButtonProps) => {
	const handleRSVPClick = () => {
		const appointmentPromise = getDateOfSpecificAppointment(appointment_uuid);

		toast.promise(appointmentPromise, {
			loading: 'Loading appointment...',
			success: (appointment) => {
				const title = encodeURIComponent(
					'Your appointment with Nora Birthing Clinic',
				);
				const location = encodeURIComponent(
					'https://maps.app.goo.gl/SNnYsMjjiuBgCAtd9',
				);
				const startTime = encodeURIComponent(
					`${appointment!.date_of_appointment.replace(/-/g, '')}T000000`,
				);
				const endTime = encodeURIComponent(
					`${appointment!.date_of_appointment.replace(/-/g, '')}T235959`,
				);
				const googleCalendarURL = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&location=${location}`;
				window.open(googleCalendarURL, '_blank');
				return 'Appointment loaded!';
			},
			error: 'Failed to load appointment',
		});
	};

	return (
		<div className='flex md:flex-row flex-col gap-4'>
			<Button onClick={handleRSVPClick}>RSVP on Google Calendar</Button>
			<Button variant={'secondary'}>
				<Link href={`/appointment/${appointment_uuid}`}>View Appointment</Link>
			</Button>
		</div>
	);
};
export default SuccessActionButtons;
