'use client';
import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import AppointmentForm from '../ui/Forms/AppointmentForm';
import { Metadata } from 'next';

const Appointment = () => {
	return (
		<>
			<GoogleReCaptchaProvider
				reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
				<AppointmentForm />
			</GoogleReCaptchaProvider>
		</>
	);
};

export default Appointment;
