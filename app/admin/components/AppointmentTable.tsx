'use client';
import React, { useEffect } from 'react';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	CaretSortIcon,
	ChevronDownIcon,
	DotsHorizontalIcon,
} from '@radix-ui/react-icons';
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { getAllAppointments } from '@/actions/Admin/getActions';
import toast from 'react-hot-toast';

type Appointment = {
	appointment_id: number;
	first_name: string;
	middle_name: string;
	last_name: string;
	province: string;
	city: string;
	house_number: string;
	home_address_line_1: string;
	home_address_line_2: string;
	zip_code: number;
	date_of_birth: string;
	alternate_mobile_number: number;
	mobile_number: number;
	alternate_email: string;
	department: string;
	sex: string;
	service: string;
	date_of_appointment: string;
};

const AppointmentTable = () => {
	useEffect(() => {
		getAppointments();
	}, []);
	var getAppointments = async () => {
		toast.promise(getAllAppointments(), {
			loading: 'Loading appointments',
			success: (data) => {
				console.log(data);
				return 'Appointments loaded';
			},
			error: (error) => {
				console.error('Error fetching appointments: ', error);
				return 'Error fetching appointments';
			},
		});
	};

	return (
		<Card className='w-1/2'>
			<CardHeader>
				<CardTitle>Appointments</CardTitle>
				<CardDescription>These are the appointments</CardDescription>
			</CardHeader>
			{/* <div className='w-full'>
				<div className='flex items-center py-4'></div>
				<div>
					<Table>
						<TableHead>
							{headers.map((header) => (
								<TableCell key={header.id}>{header.name}</TableCell>
							))}
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>1</TableCell>
								<TableCell>John</TableCell>
								<TableCell>Smith</TableCell>
								<TableCell>Doe</TableCell>
								<TableCell>2022-02-02</TableCell>
								<TableCell>Cardiology</TableCell>
								<TableCell>Dr. Jane Doe</TableCell>
								<TableCell>someone@gmail.com</TableCell>
								<TableCell>09060162213</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div> */}
		</Card>
	);
};
export default AppointmentTable;
