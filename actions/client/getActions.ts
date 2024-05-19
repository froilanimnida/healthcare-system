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

	if (appointment.status === 'cancelled') {
		redirect('/');
	}

	if (appointment?.length === 0) {
		try {
			notFound();
		} catch (e) {
			console.error('Error redirecting: ', e);
		}
		return null;
	}

	return appointment;
}

export const checkIfAppointmentExists = async (appointment_uuid: string) => {
	const supabase = createClient();
	let { data: appointment, error } = await supabase
		.from('appointments')
		.select('appointment_id, status')
		.eq('appointment_id', appointment_uuid)
		.single();

	if (error?.code === 'PGRST116') {
		return false;
	}

	if (error) {
		throw new Error(`Error fetching appointments: ${error.message}`);
		return null;
	}
	if (appointment?.status === 'cancelled') {
		throw new Error('The Appointment associated with that id is cancelled');
	}
	redirect(`/appointment/${appointment_uuid}`);
	return true;
};
