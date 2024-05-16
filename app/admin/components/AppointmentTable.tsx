import React, { Suspense } from 'react';
import Skeleton from '@/components/Skeletons/Skeleton';
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
import {
	getAllAppointments,
	getSomeAppointments,
} from '@/actions/Admin/getActions';

type Appointment = {
	appointment_id: string;
	first_name: string;
	middle_name: string;
	last_name: string;
	service: string;
	date_of_appointment: string;
	email: string;
	mobile_number: number;
};

export const revalidate = 1;
interface AppointmentTableProps {
	all: boolean;
}

const AppointmentTable: React.FC<AppointmentTableProps> = async ({ all }) => {
	var someAppointments = all
		? (await getAllAppointments()) ?? []
		: (await getSomeAppointments()) ?? [];
	const headers = [
		{ id: 1, name: 'Appointment ID' },
		{ id: 2, name: 'First Name' },
		{ id: 3, name: 'Middle Name' },
		{ id: 4, name: 'Last Name' },
		{ id: 5, name: 'Service' },
		{ id: 6, name: 'Date of Appointment' },
		{ id: 7, name: 'Email' },
		{ id: 8, name: 'Mobile Number' },
	];

	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle>
					{!all ? 'Overview list of Appointments' : 'All appointments'}
				</CardTitle>
				<CardDescription>These are the appointments</CardDescription>
			</CardHeader>
			<div className='w-full'>
				<div className='flex items-center py-4'></div>
				<div>
					<Table>
						<TableHeader>
							<TableRow>
								{headers.map((header) => (
									<TableHead key={header.id}>{header.name}</TableHead>
								))}
							</TableRow>
						</TableHeader>
						<TableBody>
							<Suspense fallback={<Skeleton />}>
								{someAppointments.map((appointment: Appointment) => {
									return (
										<TableRow key={appointment.appointment_id}>
											<TableCell>{appointment.appointment_id}</TableCell>
											<TableCell>{appointment.first_name}</TableCell>
											<TableCell>{appointment.middle_name}</TableCell>
											<TableCell>{appointment.last_name}</TableCell>
											<TableCell>{appointment.service}</TableCell>
											<TableCell>{appointment.date_of_appointment}</TableCell>
											<TableCell>{appointment.email}</TableCell>
											<TableCell>+639 {appointment.mobile_number}</TableCell>
										</TableRow>
									);
								})}
							</Suspense>
						</TableBody>
					</Table>
				</div>
			</div>
		</Card>
	);
};
export default AppointmentTable;
