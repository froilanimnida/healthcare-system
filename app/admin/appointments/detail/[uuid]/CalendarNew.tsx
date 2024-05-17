'use client';
import React, { useState } from 'react';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

const CalendarNew = () => {
	const [newAppointmentDate, setNewAppointmentDate] = useState<Date>();
	return (
		<FormField
			name='date_of_appointment'
			render={({ field, fieldState: { error } }) => (
				<FormItem>
					<FormLabel>Date of Appointment</FormLabel>
					<FormControl>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={'outline'}
									className={cn(
										'w-full justify-start text-left font-normal',
										!newAppointmentDate && 'text-muted-foreground',
									)}>
									<CalendarIcon className='mr-2 h-4 w-4' />
									{newAppointmentDate ? (
										format(newAppointmentDate, 'PPP')
									) : (
										<span>Pick a date</span>
									)}
								</Button>
							</PopoverTrigger>
							<PopoverContent className='w-auto p-0'>
								<Calendar
									disabled={(date) => {
										const isPastDate =
											date <= new Date() || date <= new Date('1900-01-01');
										const isWeekend =
											date.getDay() === 0 || date.getDay() === 6;
										return isPastDate || isWeekend;
									}}
									selected={newAppointmentDate}
									mode='single'
									onSelect={(date) => {
										setNewAppointmentDate(date);
										const event = {
											target: {
												name: field.name,
												value: date,
											},
										};
										field.onChange(event);
									}}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</FormControl>
					{error && <FormDescription></FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CalendarNew;
