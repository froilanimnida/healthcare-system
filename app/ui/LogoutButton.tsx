'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { logoutSession } from '../auth/actions';
import { Icons } from '@/components/ui/icons';
import { useState } from 'react';

const LogoutButton = () => {
	const [isLoading, setIsLoading] = useState(false);
	return (
		<Button
			onClick={async () => {
				setIsLoading(true);
				try {
					await logoutSession();
				} catch (error: any) {
					console.error(error);
				} finally {
					setIsLoading(false);
				}
			}}>
			{isLoading && <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />}
			Logout
		</Button>
	);
};

export default LogoutButton;
