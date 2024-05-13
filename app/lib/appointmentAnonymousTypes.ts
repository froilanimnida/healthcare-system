export type anonymousAppointmentTypes = {
	appointments_anon: {
		Row: {
			appointment_id: number;
			barangay: string;
			city: string;
			date_of_birth: string;
			department: string;
			doctor_uuid: string;
			email: string;
			first_name: string;
			house_number: number;
			last_name: string;
			middle_name: string;
			mobile_number: string;
			province: string;
			sex: string;
			street: string;
			zip_code: number;
		};
		Insert: {
			appointment_id?: number;
			barangay: string;
			city: string;
			date_of_birth: string;
			department: string;
			doctor_uuid?: string;
			email: string;
			first_name: string;
			house_number: number;
			last_name: string;
			middle_name: string;
			mobile_number: string;
			province: string;
			sex: string;
			street: string;
			zip_code: number;
		};
		Update: {
			appointment_id?: number;
			barangay?: string;
			city?: string;
			date_of_birth?: string;
			department?: string;
			doctor_uuid?: string;
			email?: string;
			first_name?: string;
			house_number?: number;
			last_name?: string;
			middle_name?: string;
			mobile_number?: string;
			province?: string;
			sex?: string;
			street?: string;
			zip_code?: number;
		};
		Relationships: [
			{
				foreignKeyName: 'appointments_anon_doctor_uuid_fkey';
				columns: ['doctor_uuid'];
				isOneToOne: false;
				referencedRelation: 'doctors';
				referencedColumns: ['id'];
			},
		];
	};
};
