'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { forgotPassword } from '@/app/auth/actions';

interface ForgotPasswordFormProps {
	className?: string;
}

const ForgotPasswordForm = ({
	className,
	...props
}: ForgotPasswordFormProps) => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div
			className={cn('grid gap-6 w-full', className)}
			{...props}>
			<form
				action={async (formData: FormData) => {
					setIsLoading(true);
					try {
						await toast.promise(forgotPassword(formData), {
							loading: 'Resetting Password...',
							success: 'Password Reset Email Sent!',
							error:
								'Failed to Reset Password, Please check your email and try again.',
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
					<Button
						type='submit'
						disabled={isLoading}>
						{isLoading && (
							<Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
						)}
						Reset Password
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ForgotPasswordForm;
