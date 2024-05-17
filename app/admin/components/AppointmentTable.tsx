import React, { Suspense } from 'react';
import Skeleton from '@/components/Skeletons/Skeleton';
import Link from 'next/link';
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
		{ id: 9, name: 'Settings' },
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
											<TableCell>
												<Link
													href={`/admin/appointments/detail/${appointment.appointment_id}`}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														fill='none'
														viewBox='0 0 24 24'
														strokeWidth={1.5}
														stroke='currentColor'
														className='w-6 h-6'>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z'
														/>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
														/>
													</svg>
												</Link>
											</TableCell>
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
