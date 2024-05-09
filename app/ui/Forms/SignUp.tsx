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
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';

interface SignUpFormProps {
	className?: string;
}

const SignUp = ({ className, ...props }: SignUpFormProps) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div
			className={cn('grid gap-6 w-full', className)}
			{...props}>
			<form
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
						<Select>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Role' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Role</SelectLabel>
									<SelectItem value='admin'>Admin</SelectItem>
									<SelectItem value='patient'>Patient</SelectItem>
									<SelectItem value='doctor'>Doctor</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
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
					<Button
						type='submit'
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
				</div>
			</form>
		</div>
	);
};

export default SignUp;
