'use client';
import React from 'react';
import { login } from '@/app/auth/actions';
import Link from 'next/link';
import toast from 'react-hot-toast';
const Login = () => {
	return (
		<form
			action={async (formData: FormData) => {
				try {
					const email = formData.get('email') as string;
					const password = formData.get('password') as string;
					toast.promise(login({ email, password }), {
						loading: 'Logging In...',
						success: 'Logged In!',
						error: 'Failed to Log In',
					});
				} catch (error: any) {
					toast.error('Something went wrong.');
					console.error(error);
				}
			}}
			className='card-body flex flex-col justify-center md:flex-row items-center gap-5 w-full'>
			<div className='w-full flex flex-col md:flex-row gap-3'>
				<div className='flex flex-col justify-start md:justify-center md:items-center gap-3 md:w-1/2'>
					<h2 className='card-title'>Log In to Your Account</h2>
					<p className='h-fit'>Please enter your credentials</p>
				</div>
				<div className='card-actions md:w-1/2'>
					<label className='form-control w-full'>
						<div className='label'>
							<span className='label-text'>Email</span>
						</div>
						<input
							type='email'
							name='email'
							placeholder='Your E-Mail'
							className='input input-bordered w-full'
						/>
					</label>

					<label className='form-control w-full'>
						<div className='label'>
							<span className='label-text'>Password</span>
						</div>
						<input
							name='password'
							type='password'
							placeholder='Type here'
							className='input input-bordered w-full'
						/>
					</label>
					<div className='flex mt-5 flex-col justify-center items-center w-full gap-5'>
						<button
							type='submit'
							className='btn btn-primary w-3/4 lg:w-1/2'>
							Log In
						</button>
						<Link
							className='btn btn-ghost w-3/4 lg:w-1/2'
							href={'/account/sign-up'}>
							Sign Up Instead
						</Link>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Login;
