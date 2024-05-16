'use server';
import { createClient } from '@/utils/supabase/server';
import { notFound, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function getAllAppointments() {
	const supabase = createClient();

	let { data: appointments, error } = await supabase
		.from('appointments')
		.select('*')
		.order('date_of_appointment', { ascending: true });

	if (error) {
		console.error('Error fetching appointments: ', error);
		return null;
	}

	Promise.resolve(setTimeout(() => {}, 10000));
	console.log(appointments);
	return appointments;
}

export async function getSomeAppointments() {
	const supabase = createClient();
	let { data: appointments, error } = await supabase
		.from('appointments')
		.select(
			'appointment_id, first_name, middle_name, last_name, service, date_of_appointment, email, mobile_number',
		)
		.order('date_of_appointment', { ascending: true })
		.limit(5);

	if (error) {
		console.error('Error fetching appointments: ', error);
		return null;
	}
	// TODO: Remove these later on production
	Promise.resolve(setTimeout(() => {}, 10000));
	console.log(appointments);
	return appointments;
}
export async function getAppointmentDetails(uuid: string) {
	const supabase = createClient();

	let { data: appointment, error } = await supabase
		.from('appointments')
		.select('*')
		.eq('appointment_id', uuid)
		.single();

	if (error) {
		console.error('Error fetching appointments: ', error);
		return null;
	}

	if (appointment?.length === 0) {
		try {
			notFound();
		} catch (e) {
			console.error('Error redirecting: ', e);
		}
		// revalidatePath('admin/dashboard');
		return null;
	}

	Promise.resolve(setTimeout(() => {}, 10000));
	console.log(appointment);
	return appointment; // return the first object in the array
}
