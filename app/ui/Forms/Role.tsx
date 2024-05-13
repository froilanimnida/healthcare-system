'use client';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { logoutSession, setRole } from '@/app/auth/actions';
import {
	Card,
	CardContent,
	CardFooter,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface RoleFormProps {
	className?: string;
}

const Role = ({ className, ...props }: RoleFormProps) => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<div
			className={cn(
				'flex flex-col justify-center items-center w-full',
				className,
			)}
			{...props}>
			<Card>
				<CardHeader>
					<CardTitle>Set Role</CardTitle>
					<CardDescription>Select a role to continue</CardDescription>
				</CardHeader>
				<form
					className='gap-3 flex flex-col items-center justify-center'
					action={async (formData: FormData) => {
						const role = formData.get('role') as string;
						setIsLoading(true);
						try {
							await toast.promise(setRole(role), {
								loading: 'Setting Role...',
								success: 'Role Set!',
								error: 'Failed to Set Role, try again.',
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
								<Select name='role'>
									<SelectTrigger>
										<SelectValue placeholder='Role' />
									</SelectTrigger>
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Role</SelectLabel>
											<SelectItem value='admin'>Admin</SelectItem>
											<SelectItem value='patient'>Patient</SelectItem>
											<SelectItem value='doctor'>Doctor</SelectItem>
											<SelectItem value='nurse'>Nurse</SelectItem>
										</SelectGroup>
									</SelectContent>
								</Select>
							</div>
						</div>
						<CardFooter className='flex flex-col gap-2 items-center justify-center'>
							<Button
								className='w-full'
								type='submit'
								disabled={isLoading}>
								{isLoading && (
									<Icons.spinner className='mr-2 h-4 w-10 animate-spin' />
								)}
								Continue
							</Button>
							<Button
								className='w-full'
								variant={'destructive'}
								type='button'
								disabled={isLoading}
								onClick={async () => {
									await logoutSession();
								}}>
								{isLoading && (
									<Icons.spinner className='mr-2 h-4 w-10 animate-spin' />
								)}
								Logout
							</Button>
						</CardFooter>
					</CardContent>
				</form>
			</Card>
		</div>
	);
};

export default Role;
