'use client';
import React from 'react';
import { login } from '@/app/auth/actions';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { logoutSession } from '@/app/auth/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/icons';
import { useState } from 'react';

interface LoginFormProps {
	className?: string;
}
const Login = ({ className, ...props }: LoginFormProps) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div
			className={cn('grid gap-6 w-full', className)}
			{...props}>
			<form
				action={async (formData: FormData) => {
					try {
						setIsLoading(true);
						const email = formData.get('email') as string;
						const password = formData.get('password') as string;
						toast.promise(login({ email, password }), {
							loading: 'Logging In...',
							success: 'Logged In!',
							error: 'Failed to Log In',
						});
					} catch (error: any) {
						setIsLoading(false);
						toast.error('Something went wrong.');
						console.error(error);
					} finally {
						setIsLoading(false);
					}
				}}>
				<div className='grid gap-2'>
					<div className='grid gap-1'>
						<Label
							className='sr-only'
							htmlFor='email'>
							Email
						</Label>
						<Input
							name='email'
							placeholder='name@example.com'
							type='email'
							autoCapitalize='none'
							autoComplete='email'
							autoCorrect='off'
							disabled={isLoading}
						/>
					</div>
					<div className='grid gap-1'>
						<Label
							className='sr-only'
							htmlFor='password'>
							Password
						</Label>
						<Input
							name='password'
							placeholder='Password'
							type='password'
							autoComplete='new-password'
							disabled={isLoading}
						/>
					</div>

					<Button
						type='submit'
						disabled={isLoading}>
						{isLoading && (
							<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
						)}
						Login
					</Button>
					<Button
						type='button'
						onClick={() => {
							logoutSession();
						}}>
						Logout
					</Button>
					<Link
						href='/account/sign-up'
						className='text-sm text-center mt-2'>
						Don&apos;t have an account, Sign Up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
