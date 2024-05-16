import React from 'react';
import AppointmentTable from '../components/AppointmentTable';

const AppointmentsPage = () => {
	return (
		<div className='p-3'>
			<AppointmentTable all={true} />
		</div>
	);
};

export default AppointmentsPage;
