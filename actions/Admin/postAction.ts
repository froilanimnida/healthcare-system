'use server';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';
import { format } from 'date-fns';
import { revalidatePath } from 'next/cache';

interface FormData {
	date_of_appointment: Date;
	appointment_id: string;
	appointment_id_verification_input: string;
}

const AppointmentSchema = z.object({
	date_of_appointment: z.date({
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
	try {
		const supabase = createClient();
		const result = AppointmentSchema.safeParse(formData);
		if (!result.success) {
			console.error('Invalid form data: ', result.error);
			return null;
		}
		const { date_of_appointment, appointment_id } = result.data;
		const formattedDate = format(date_of_appointment, 'yyyy-MM-dd');
		if (date_of_appointment < new Date()) {
			return 'Appointment date should be in the future.';
		}

		if (!appointment_id) {
			throw new Error('Appointment ID verification is required.');
		}

		if (!appointment_id) {
			throw new Error('Appointment ID is required.');
		}

		if (appointment_id !== formData.appointment_id_verification_input) {
			throw new Error('Appointment ID does not match.');
		}

		const { data, error } = await supabase
			.from('appointments')
			.select('*')
			.eq('date_of_appointment', formattedDate);
		if (error) {
			console.error('Error getting appointments: ', error.message);
			throw new Error('Error getting appointments');
		}
		if (data.length >= 100) {
			throw new Error('Appointment date is full. Please select another date.');
		} else {
			const { data, error } = await supabase
				.from('appointments')
				.update({ date_of_appointment: formattedDate })
				.eq('appointment_id', appointment_id)
				.single();
			if (error) {
				console.error('Error updating appointment: ', error.message);
				throw new Error('Error updating appointment');
			}
		}

		revalidatePath(`/admin/appointments/${appointment_id}`);
		return data;
	} catch (error) {
		console.error('Error in setNewAppointmentDate:', error);
		throw error;
		return null;
	}
}
