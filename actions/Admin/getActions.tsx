'use server';
import { createClient } from '@/utils/supabase/server';

export async function getAllAppointments() {
	const supabase = createClient();

	let { data: appointments, error } = await supabase
		.from('appointments')
		.select('*');

	if (error) {
		console.error('Error fetching appointments: ', error);
		return null;
	}

	console.log(appointments);
	return appointments;
}
