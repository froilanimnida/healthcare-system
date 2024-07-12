import React from 'react';
import { Suspense } from 'react';
import AppointmentTable from '../components/AppointmentTable';
import SkeletonRectangleWithContent from '@/components/Skeletons/SkeletonRectangleWithContent';

const AppointmentsPage = () => {
	return (
		<div className='p-3'>
			<Suspense fallback={<SkeletonRectangleWithContent />}>
				<AppointmentTable all={true} />
			</Suspense>
		</div>
	);
};

export default AppointmentsPage;
