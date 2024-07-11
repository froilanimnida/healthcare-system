'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

const PermissionDialog = () => {
	const localStorage =
		typeof window !== 'undefined' ? window.localStorage : null;
	const [permission, setPermission] = useState(
		(localStorage && localStorage.getItem('permission')) || 'prompt',
	);

	const updatePermission = () => {
		Promise.all([
			navigator.permissions.query({ name: 'camera' as any }),
			navigator.permissions.query({ name: 'microphone' as any }),
		]).then(([{ state: cameraState }, { state: micState }]) => {
			if (cameraState === 'denied' || micState === 'denied') {
				setPermission('denied');
			} else if (cameraState === 'granted' && micState === 'granted') {
				setPermission('granted');
			} else {
				setPermission('prompt');
			}
		});
	};

	useEffect(() => {
		updatePermission();
	}, []);

	useEffect(() => {
		localStorage!.setItem('permission', permission);
	}, [permission]);

	const handleAllow = () => {
		navigator.mediaDevices
			.getUserMedia({ video: true, audio: true })
			.then(() => setPermission('granted'))
			.catch(() => setPermission('denied'));
	};

	return permission !== 'granted' ? (
		<Dialog defaultOpen={true}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Permission is not granted</DialogTitle>
					<DialogDescription>
						Telemedicine needs some necessary permissions to work properly.
					</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Button
							variant={'default'}
							onClick={handleAllow}>
							Allow
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	) : null;
};

export default PermissionDialog;
