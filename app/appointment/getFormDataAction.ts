'use server';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

export const getDoctorFormData = async (formData: FormData) => {
	const supabase = createClient();
	const schema = z.object({
		department: z.enum([
			'anaesthesia',
			'dentistry',
			'obstetrics_and_gynecology',
			'pathology',
			'pediatrics',
			'radiology',
			'rehabilitation_medicine',
			'surgery',
			'psychiatry',
		]),
	});
	const data = schema.parse(formData.get('department'));
	const { department } = data;
	let { data: doctors, error } = await supabase
		.from('users')
		.select('*')
		.eq('department', department);
	if (error) throw new Error(error.message);

	return doctors;
};
