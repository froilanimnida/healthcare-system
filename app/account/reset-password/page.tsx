import React from 'react';
import ResetPasswordForm from '@/app/ui/Forms/ResetPassword';
import Link from 'next/link';

const page = () => {
	return (
		<>
			<div className='lg:p-8'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Forgot Password
						</h1>
						<p className='text-sm text-muted-foreground'>
							Create a new password for your account.
						</p>
					</div>
					<ResetPasswordForm />
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

export default page;
