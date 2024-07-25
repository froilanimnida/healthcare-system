import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import PermissionDialog from './PermissionDialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
	return (
		<div className='w-11/12 max-w-screen-2xl flex justify-center items-center'>
			<Card>
				<CardHeader>
					<CardTitle>Telemedicine</CardTitle>
					<CardDescription>
						Telemedicine is the remote diagnosis and treatment of patients by
						means of telecommunications technology.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button>
						<Link href='/telemedicine/schedule'>Schedule a call</Link>
					</Button>
				</CardContent>
				<CardFooter>
					<p className='text-sm'>
						* To get started you need to allow necessary permission.
					</p>
				</CardFooter>
			</Card>
		</div>
	);
};

export default page;
