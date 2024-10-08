import React from 'react';
import SignUp from '@/app/(account)/account/sign-up/components/SignUpForm';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Create an account',
	description: 'Sign up for an account to get started.',
};

const SignUpPage = () => {
	return (
		<>
			<div className='lg:p-8'>
				<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
					<div className='flex flex-col space-y-2 text-center'>
						<h1 className='text-2xl font-semibold tracking-tight'>
							Create an account
						</h1>
					</div>
					<SignUp />
					<p className='px-8 text-center text-sm text-muted-foreground'>
						By clicking continue, you agree to our{' '}
						<Link
							href='/terms'
							className='underline underline-offset-4 hover:text-primary'>
							Terms of Service
						</Link>{' '}
						and{' '}
						<Link
							href='/privacy'
							className='underline underline-offset-4 hover:text-primary'>
							Privacy Policy
						</Link>
					</p>
				</div>
			</div>
		</>
	);
};

export default SignUpPage;
