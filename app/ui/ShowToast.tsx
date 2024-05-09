import React from 'react';
import toast from 'react-hot-toast';

interface ShowToastProps {
	type: 'success' | 'error';
	message: string;
}

const ShowToast: React.FC<ShowToastProps> = ({ type, message }) => {
	if (type === 'success') {
		toast.success(message);
	} else if (type === 'error') {
		toast.error(message);
	}

	return null;
};

export default ShowToast;
