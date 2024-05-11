import { date, z } from 'zod';
import AppointmentForm from '../ui/Forms/AppointmentForm';

export const AppointmentFormSchema = z.object({
	first_name: z.string(),
	middle_name: z.string(),
	last_name: z.string(),
	province: z.string(),
	city: z.string(),
	house_number: z.string(),
	street: z.string(),
	barangay: z.string(),
	zip_code: z.string(),
	date_of_birth: z.string(),
	email: z.string(),
	mobile_number: z.string(),
	sex: z.string(),
	senior_or_pwd: z.boolean(),
	department: z.string(),
	doctor: z.string(),
});
