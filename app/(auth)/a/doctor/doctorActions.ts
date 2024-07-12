'use server';
import { createClient } from '@/utils/supabase/server';
import { z } from 'zod';

export const getDoctorData = async () => {
	const supabase = createClient();
	try {
    const { data: doctor, error } = await supabase.auth.getUser();

    
	} catch (error) {
		console.error('Error fetching doctor data: ', error);
	}
};
