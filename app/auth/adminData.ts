'use server';
import { createClient } from '@/utils/supabase/server';

export async function getAnonymousAppointments() {
	const supabase = createClient();

	let { data: appointments_anon, error } = await supabase
		.from('appointments_anon')
		.select('*');

	if (error) throw new Error(error.message);
	console.log(appointments_anon);
	return appointments_anon;
}
