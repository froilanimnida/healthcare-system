import React from 'react';
import AppointmentTable from '../components/AppointmentTable';
import type { Metadata } from 'next';
import Admin from '@/app/ui/NavigationBar/Admin';

export const metadata: Metadata = {
	title: 'Administrator Dashboard',
	description: 'Administrator Page',
};

const AdminDashboardPage = () => {
	return (
		<div className='p-5'>
			{/* <Admin /> */}
			<AppointmentTable all={false} />
		</div>
	);
};

export default AdminDashboardPage;
