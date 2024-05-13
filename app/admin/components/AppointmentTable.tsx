import React from 'react';
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { getAnonymousAppointments } from '@/app/auth/adminData';
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

export type Appointment = {
	appointment_id: number;
	barangay: string;
	city: string;
	date_of_birth: string;
	department: string;
	doctor_uuid: string;
	email: string;
	first_name: string;
	house_number: number;
	last_name: string;
	middle_name: string;
	mobile_number: string;
	province: string;
	sex: string;
	street: string;
	zip_code: number;
};

const AppointmentTable = async () => {
	const headers = [
		{ id: 1, name: 'Appointment ID' },
		{ id: 2, name: 'First Name' },
		{ id: 3, name: 'Middle Name' },
		{ id: 4, name: 'Last Name' },
		{ id: 5, name: 'Date of Appointment' },
		{ id: 6, name: 'Department' },
		{ id: 7, name: 'Doctor' },
		{ id: 8, name: 'Email' },
		{ id: 9, name: 'Mobile Number' },
	];

	return (
		<Card className='w-1/2'>
			<CardHeader>
				<CardTitle>Appointments</CardTitle>
				<CardDescription>These are the appointments</CardDescription>
			</CardHeader>
			<div className='w-full'>
				<div className='flex items-center py-4'></div>
				<div>
					<Table>
						<TableHeader>
							{headers.map((header) => (
								<TableCell key={header.id}>{header.name}</TableCell>
							))}
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell>1</TableCell>
								<TableCell>John</TableCell>
								<TableCell>Smith</TableCell>
								<TableCell>Doe</TableCell>
								<TableCell>2022-02-02</TableCell>
								<TableCell>Cardiology</TableCell>
								<TableCell>Dr. Jane Doe</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		</Card>
	);
};
export default AppointmentTable;
