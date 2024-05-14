'use client';
import React from 'react';
import { login, getUserRole } from '@/app/auth/actions';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/icons';
import { useState } from 'react';
import {
	Card,
	CardContent,
	CardFooter,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

interface LoginFormProps {
	className?: string;
}
const Login = ({ className, ...props }: LoginFormProps) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div
			className={cn('grid gap-6 w-full', className)}
			{...props}>
			<Card>
				<CardHeader>
					<CardTitle>Login</CardTitle>
					<CardDescription>Log in to continue</CardDescription>
				</CardHeader>
				<form
					action={async (formData: FormData) => {
						setIsLoading(true);
						try {
							const email = formData.get('email') as string;
							const password = formData.get('password') as string;
							toast.promise(login({ email, password }), {
								loading: 'Logging In...',
								success: () => {
									toast.promise(getUserRole(), {
										loading: 'Fetching User Role...',
										success: () => {
											return 'User Role Fetched!';
										},
										error: (err) => {
											return err.message;
										},
									});
									return 'Running additional checks...';
								},
								error: (err) => {
									return err.message;
								},
							});
						} catch (error: any) {
							setIsLoading(false);
							toast.error('Something went wrong.');
							console.error(error);
						} finally {
							setIsLoading(false);
						}
					}}>
					<CardContent className='flex flex-col gap-5 justify-center items-center w-full'>
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
						</div>
					</CardContent>
					<CardFooter className='flex flex-col justify-center items-center gap-2'>
						<Button
							type='submit'
							className='w-full'
							disabled={isLoading}>
							{isLoading && (
								<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
							)}
							Login
						</Button>
						<Link
							href='/account/sign-up'
							className='text-sm text-center mt-2'>
							Don&apos;t have an account, Sign Up
						</Link>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
};

export default Login;
