import React from 'react';
import Link from 'next/link';
import ForgotPasswordForm from '@/app/ui/Forms/ForgotPassword';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Forgot password',
	description: 'Forgot password? Reset your password here.',
};

const ForgotPassword = () => {
	return (
		<>
			<div className='lg:p-8'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Forgot Password
						</h1>
						<p className='text-sm text-muted-foreground'>
							Enter your email to reset your password.
						</p>
					</div>
					<ForgotPasswordForm />
					<Link
						href='/account/login'
						className='text-sm text-center mt-2'>
						Back to Login
					</Link>
				</div>
			</div>
		</>
	);
};

export default ForgotPassword;
