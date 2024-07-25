'use client';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Check, X } from 'lucide-react';

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

	return (
		<AlertDialog>
			<AlertDialogTrigger>Open</AlertDialogTrigger>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Necessary Permission Checker</AlertDialogTitle>
					<AlertDialogDescription>
						Manage your camera and microphone permissions.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Close</AlertDialogCancel>
					<AlertDialogAction>Allow</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
};

export default PermissionDialog;
