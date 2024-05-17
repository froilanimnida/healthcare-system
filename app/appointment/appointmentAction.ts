'use server';
import { createClient } from '@/utils/supabase/server';
import { z, ZodType } from 'zod';
import { format } from 'date-fns';

interface FormData {
	first_name: string;
	middle_name: string;
	last_name: string;
	age: number;
	city: string;
	barangay: string;
	zip_code: number;
	home_address_line_1: string;
	home_address_line_2: string;
	email: string;
	mobile_number: string;
	alternate_mobile_number: string;
	alternate_email: string;
	sex: string;
	date_of_birth: string;
	date_of_appointment: Date;
	services: string;
}

const AppointmentSchema = z.object({
	first_name: z
		.string({
			required_error: 'First name is required',
		})
		.min(2, {
			message: 'First name must be at least 2 characters',
		}),
	middle_name: z
		.string({
			required_error: 'Middle name is required',
		})
		.min(2, {
			message: 'Middle name must be at least 2 characters',
		}),
	last_name: z
		.string({
			required_error: 'Last name is required',
		})
		.min(2, {
			message: 'Last name must be at least 2 characters',
		}),
	age: z
		.number({
			required_error: 'Age is required',
		})
		.min(18, { message: 'Age must be at least 18 years old' })
		.max(100, { message: 'Age must be at most 100 years old' }),
	city: z
		.string({
			required_error: 'City is required',
		})
		.min(2, { message: 'City must be at least 2 characters' }),
	barangay: z
		.string({
			required_error: 'Barangay is required',
		})
		.min(2, { message: 'Barangay must be at least 2 characters' }),
	zip_code: z.number({
		required_error: 'Zip code is required',
	}),
	home_address_line_1: z
		.string({
			required_error: 'Home address line 1 is required',
		})
		.min(2, { message: 'Home address line 1 must be at least 2 characters' }),
	home_address_line_2: z
		.string({
			required_error: 'Home address line 2 is required',
		})
		.min(2, { message: 'Home address line 2 must be at least 2 characters' }),
	email: z
		.string({
			required_error: 'Email is required',
		})
		.email({ message: 'Invalid email address' }),
	mobile_number: z
		.string({
			required_error: 'Mobile number is required',
		})
		.length(11, { message: 'Mobile number must be 11 digits' }),
	alternate_mobile_number: z
		.string({
			required_error: 'Alternate mobile number is required',
		})
		.length(11, { message: 'Alternate mobile number must be 11 digits' }),
	alternate_email: z
		.string({
			required_error: 'Alternate email is required',
		})
		.email({ message: 'Invalid alternate email address' }),
	date_of_birth: z.string({
		required_error: 'Birth date is required',
	}),
	sex: z.string({
		required_error: 'Sex is required',
	}),
	services: z.string().refine(
		(service) => {
			const allowedServices = [
				'prenatal',
				'vaginal_cleaning',
				'dental',
				'vaccination_for_babies',
				'maintenance_for_those_in_need',
				'hiv_testing',
				'tb_dots',
			];
			return allowedServices.includes(service);
		},
		{ message: 'Invalid service selected' },
	),
	date_of_appointment: z.date().refine(
		(date_of_appointment) => {
			const currentDate = new Date();
			return date_of_appointment > currentDate;
		},
		{ message: 'Appointment date must be in the future' },
	),
});

export async function handleAppointment(formData: FormData) {
	const supabase = createClient();

	const result = AppointmentSchema.safeParse(formData);

	if (!result.success) {
		console.error(result.error);
		return;
	}

	const resultData = result.data;

	const { date_of_appointment, ...data } = resultData;

	const formattedDate = format(date_of_appointment, 'yyyy-MM-dd');
	console.log(formattedDate);
}
