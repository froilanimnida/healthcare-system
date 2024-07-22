'use client';
import {
	HoveredLink,
	Menu,
	MenuItem,
	ProductItem,
} from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import Logo from '../../../components/ui/Logo';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export function NavigationBarLandingPage() {
	return (
		<div className='relative w-full flex items-center justify-center'>
			<Navbar className='top-0' />
		</div>
	);
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div className={cn('fixed inset-x-0 w-full mx-auto z-50', className)}>
			<Menu
				className='justify-between md:justify-around'
				setActive={setActive}>
				<Link href='/'>
					<Logo />
				</Link>
				<div className='hidden flex-row items-center md:flex justify-center gap-5'>
					<MenuItem
						setActive={setActive}
						active={active}
						item='Services'>
						<div className='flex flex-col space-y-4 text-sm'>
							<HoveredLink href='/services/dental'>Dental</HoveredLink>
							<HoveredLink href='/services/hiv-testing'>
								HIV Testing
							</HoveredLink>
							<HoveredLink href='/services/maintenance-for-those-in-need'>
								Maintence for those in need
							</HoveredLink>
							<HoveredLink href='/services/prenatal'>Prenatal</HoveredLink>
							<HoveredLink href='/services/tb-dots'>TB Dots</HoveredLink>
							<HoveredLink href='/services/vaginal-cleaning'>
								Vaginal Cleaning
							</HoveredLink>
							<HoveredLink href='/services/vaccination-for-babies'>
								Vaccination for babies
							</HoveredLink>
						</div>
					</MenuItem>
					<HoveredLink href={'/appointment'}>Appointment</HoveredLink>
					<HoveredLink href={'/list-of-doctors'}>Doctors</HoveredLink>
					<MenuItem
						setActive={setActive}
						active={active}
						item='Pricing'>
						<div className='flex flex-col space-y-4 text-sm'>
							<HoveredLink href='/hobby'>Hobby</HoveredLink>
							<HoveredLink href='/individual'>Individual</HoveredLink>
							<HoveredLink href='/team'>Team</HoveredLink>
							<HoveredLink href='/enterprise'>Enterprise</HoveredLink>
						</div>
					</MenuItem>
				</div>
				<div className='flex flex-row items-center gap-4'>
					<Button
						asChild
						variant='default'>
						<Link href={'/appointment/search'}>Search an appointment</Link>
					</Button>
				</div>
			</Menu>
		</div>
	);
}
