'use client';
import React from 'react';
import { Conference } from '@/components/component/conference';

const CallingPage = ({ params }: { params: { callID: string } }) => {
	return (
		<div>
			<Conference />
		</div>
	);
};

export default CallingPage;
