'use client';
import React from 'react';
import SuccessActionButtons from './SuccessActionButtons';
import { useSearchParams } from 'next/navigation';

const ButtonsSuccessActionsWrapper = () => {
	const idParams = useSearchParams();
	const appointmentId = idParams.get('appointment_id');
	return (
		<>
			<SuccessActionButtons appointment_uuid={appointmentId!} />
		</>
	);
};

export default ButtonsSuccessActionsWrapper;
