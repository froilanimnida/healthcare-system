import { z, ZodType } from 'zod';

enum ReasonForCall {
	GeneralConsultation = 'General Consultation',
	FollowUp = 'Follow-up',
	PrescriptionRefill = 'Prescription Refill',
}

interface TeleMedicineFormData {
	date_of_telemedicine: Date;
	call_id: string;
	first_name: string;
	last_name: string;
	phone_number: string | null;
	email: string | null;
	remarks: string | null;
	age: string; // Update the type to number
	reason_for_call: ReasonForCall;
}

export const TeleMedicineFormSchema: ZodType<TeleMedicineFormData> = z.object({
	date_of_telemedicine: z.date().refine((val) => val !== null, {
		message: 'Date of Telemedicine is required',
	}),
	call_id: z
		.string()
		.refine((val) => val !== '', { message: 'Call ID is required' }),
	first_name: z
		.string()
		.refine((val) => val !== '', { message: 'First name is required' }),
	last_name: z
		.string()
		.refine((val) => val !== '', { message: 'Last name is required' }),
	phone_number: z.string().nullable(),
	email: z.string().nullable(),
	remarks: z.string().nullable(),
	age: z.string().refine((val) => val !== '', { message: 'Age is required' }),
	reason_for_call: z.nativeEnum(ReasonForCall),
});
