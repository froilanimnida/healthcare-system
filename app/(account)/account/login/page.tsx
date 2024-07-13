import React from 'react';
import Login from '@/app/(account)/account/login/components/LoginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Log In to Your Account',
	description: 'Log in to your account',
};
// TODO: Remove REdundancy component refer to the login form directly
const LogIn = async () => {
	return (
		<>
			<div className='lg:p-8'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Welcome Back!
						</h1>
					</div>
					<Login />
				</div>
			</div>
		</>
	);
};

export default LogIn;
