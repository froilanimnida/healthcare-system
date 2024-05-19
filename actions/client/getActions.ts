'use server';
import { createClient } from '@/utils/supabase/server';
import { notFound, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function getDateOfSpecificAppointment(appointment_uuid: string) {
	const supabase = createClient();
	let { data: appointment, error } = await supabase
		.from('appointments')
		.select('date_of_appointment')
		.eq('appointment_id', appointment_uuid)
		.single();

	if (error?.code === 'PGRST116') {
		notFound();
		throw new Error('Appointment not found');
		return null;
	}

	if (error) {
		throw new Error(`Error fetching appointments: ${error.message}`);
		return null;
	}
	return appointment;
}
