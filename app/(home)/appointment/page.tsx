'use client';
import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import AppointmentForm from '@/app/(home)/appointment/components/AppointmentForm';
import { Metadata } from 'next';

const Appointment = () => {
	return (
		<div className='flex flex-row justify-center items-center'>
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
				<AppointmentForm />
			</GoogleReCaptchaProvider>
		</div>
	);
};

export default Appointment;
