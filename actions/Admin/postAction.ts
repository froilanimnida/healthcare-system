'use server';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';
import { notFound, redirect } from 'next/navigation';
import { format } from 'date-fns';
import { revalidatePath } from 'next/cache';

interface FormData {
	date_of_appointment: string;
	appointment_id: string;
	appointment_id_verification_input: string;
}

const AppointmentSchema = z.object({
	date_of_appointment: z.string({
		required_error: 'Date of appointment is required',
	}),
	appointment_id: z.string({
		required_error: 'Appointment ID is required',
	}),
	appointment_id_verification_input: z.string({
		required_error: 'Appointment ID verification is required',
	}),
});

export async function setNewAppointmentDate(formData: FormData) {
	const supabase = createClient();
	const result = AppointmentSchema.safeParse(formData);
	if (!result.success) {
		console.error('Invalid form data: ', result.error);
		return null;
	}
	const { date_of_appointment, appointment_id } = result.data;
	const formattedDate = format(date_of_appointment, 'yyyy-MM-dd');
	try {
		const { data, error } = await supabase
			.from('appointments')
			.select('*')
			.eq('date_of_appointment', formattedDate);
		if (error) {
			console.error('Error getting appointments: ', error);
			return null;
		}
		if (data.length >= 100) {
			return 'Appointment date is full. Please select another date.';
		} else {
			const { data, error } = await supabase
				.from('appointments')
				.update({ date_of_appointment })
				.eq('appointment_id', appointment_id)
				.single();
			if (error) {
				console.error('Error updating appointment: ', error);
				return null;
			}
		}

		revalidatePath(`/admin/appointments/${appointment_id}`);
		return data;
	} catch (error) {
		console.error('Error updating appointment: ', error);
		return null;
	}
	revalidatePath(`/admin/appointments/${appointment_id}`);
	redirect('/admin/appointments');
}
