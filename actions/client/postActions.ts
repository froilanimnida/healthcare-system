'use server';
import { createClient } from '@/utils/supabase/server';
import { notFound, redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const cancelAppointment = async (appointment_uuid: string) => {
	const supabase = createClient();
	let { data: appointment, error } = await supabase
		.from('appointments')
		.update({ status: 'cancelled' })
		.eq('appointment_id', appointment_uuid);

	if (error?.code === 'PGRST116') {
		notFound();
		throw new Error('Appointment not found');
	}

	if (error) {
		notFound();
		throw new Error(`Error fetching appointments: ${error?.message}`);
	}

	redirect('/appointment');
};
