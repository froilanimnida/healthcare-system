'use client';
import React from 'react';
import { signup } from '@/app/auth/actions';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { logoutSession } from '@/app/auth/actions';

const SignUp = () => {
	return (
		<form
			action={async (formData: FormData) => {
				try {
					await toast.promise(signup(formData), {
						loading: 'Signing Up...',
						success: 'Signed Up!',
						error:
							'Failed to Sign Up, Please check your details and try again.',
					});
				} catch (error: any) {
					console.error(error);
				}
			}}
			className='card-body flex flex-col justify-center md:flex-row items-center gap-5 w-full'>
			<div className='w-full flex flex-col md:flex-row gap-3'>
				<div className='flex flex-col justify-start md:justify-center md:items-center gap-3 md:w-1/2'>
					<h2 className='card-title'>Create an account</h2>
					<p className='h-fit'>To get started, create an account</p>
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
					<label className='form-control w-full '>
						<div className='label'>
							<span className='label-text'>Confirm Password</span>
						</div>
						<input
							name='confirmPassword'
							type='password'
							placeholder='Type here'
							className='input input-bordered w-full'
						/>
					</label>
					<div className='flex mt-5 flex-col justify-center items-center w-full gap-5'>
						<div className='form-control'>
							<label className='label cursor-pointer gap-3'>
								<span className='label-text'>
									By signing up, you agree on our terms and agreement and on our
									privacy policy.
								</span>
								<input
									name='terms'
									type='checkbox'
									className='checkbox'
								/>
							</label>
						</div>
						<button
							type='submit'
							className='btn btn-primary w-3/4 lg:w-1/2'>
							Proceed
						</button>
						<Link
							className='btn btn-ghost w-3/4 lg:w-1/2'
							href={'/account/login'}>
							Login Instead
						</Link>
						<button
							onClick={async () => {
								try {
									await toast.promise(logoutSession(), {
										loading: 'Logging out...',
										success: 'Logged out!',
										error: 'Failed to logout',
									});
								} catch (error: any) {
									console.error(error);
								}
							}}
							className='btn btn-error w-3/4 lg:w-1/2'>
							Logout
						</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default SignUp;
