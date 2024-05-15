'use client';
import React from 'react';
import { useState } from 'react';
import { signup } from '@/app/auth/actions';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/ui/icons';
import {
	Card,
	CardContent,
	CardFooter,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

interface SignUpFormProps {
	className?: string;
}

const SignUp = ({ className, ...props }: SignUpFormProps) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div
			className={cn('grid gap-6', className)}
			{...props}>
			<Card>
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
					<CardDescription>Sign up to continue</CardDescription>
				</CardHeader>
				<form
					className='gap-3 flex flex-col items-center justify-center'
					action={async (formData: FormData) => {
						setIsLoading(true);
						try {
							await toast.promise(signup(formData), {
								loading: 'Signing Up...',
								success: 'Signed Up!',
								error:
									'Failed to Sign Up, Please check your details and try again.',
							});
						} catch (error: any) {
							setIsLoading(false);
							console.error(error);
						} finally {
							setIsLoading(false);
						}
					}}>
					<CardContent className='flex flex-col gap-5 justify-center items-center w-full'>
						<div className='grid gap-3 w-full'>
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
							<div className='grid gap-1'>
								<Label
									className='sr-only'
									htmlFor='confirmPassword'>
									Confirm Password
								</Label>
								<Input
									name='confirmPassword'
									placeholder='Confirm Password'
									type='password'
									autoComplete='new-password'
									disabled={isLoading}
								/>
							</div>
							<div className='flex flex-row w-full gap-3'>
								<Checkbox
									name='terms'
									id='terms'
								/>
								<label
									htmlFor='terms'
									className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
									Accept terms and conditions
								</label>
							</div>
						</div>
					</CardContent>
					<CardFooter className='flex flex-col gap-2 items-center justify-center'>
						<Button
							type='submit'
							className='w-full'
							disabled={isLoading}>
							{isLoading && (
								<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
							)}
							Sign Up
						</Button>
						<Link
							href='/account/login'
							className='text-sm text-center mt-2'>
							Already have an account? Login
						</Link>
					</CardFooter>
				</form>
			</Card>
		</div>
	);
};

export default SignUp;
