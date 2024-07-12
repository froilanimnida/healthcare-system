import React from 'react';
import Link from 'next/link';
import {
	CheckCheck,
	Home,
	LayoutDashboard,
	LineChart,
	LockKeyhole,
	Package,
	Package2,
	PanelLeft,
	Search,
	Settings,
	Users2,
} from 'lucide-react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Stethoscope } from 'lucide-react';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import LogoutButton from '../../../ui/LogoutButton';
import Logo from '../../../components/Logo';

export default function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className='flex min-h-screen w-full flex-col bg-muted/40'>
			<aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
				<nav className='flex flex-col items-center gap-4 px-2 sm:py-4'>
					<Link
						href='#'
						className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'>
						<Logo className='h-9 w-9 transition-all group-hover:scale-110' />
						<span className='sr-only'>Acme Inc</span>
					</Link>

					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={'/admin/dashboard'}
								className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
								<LayoutDashboard className='h-5 w-5' />
								<span className='sr-only'>Dashboard</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>Dashboard</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={'/admin/doctors'}
								className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
								<Stethoscope className='h-5 w-5' />
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>Doctors</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href='#'
								className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
								<LockKeyhole className='h-5 w-5' />
								<span className='sr-only'>Admin Accounts</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>Admin Accounts</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href='#'
								className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
								<Users2 className='h-5 w-5' />
								<span className='sr-only'>Patient & Users</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>Patients & Users</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Link
								href={'/admin/appointments'}
								className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
								<CheckCheck className='h-5 w-5' />
								<span className='sr-only'>Consultations & Appointments</span>
							</Link>
						</TooltipTrigger>
						<TooltipContent side='right'>
							Consultations & Appointments
						</TooltipContent>
					</Tooltip>
				</nav>
				<nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-4'>
					<Link
						href='#'
						className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'>
						<Settings className='h-5 w-5' />
						<span className='sr-only'>Settings</span>
					</Link>
				</nav>
			</aside>
			<div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
				<header className='justify-between sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
					<Sheet>
						<SheetTrigger asChild>
							<Button
								size='icon'
								variant='outline'
								className='sm:hidden'>
								<PanelLeft className='h-5 w-5' />
								<span className='sr-only'>Toggle Menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							side='left'
							className='sm:max-w-xs'>
							<nav className='grid gap-6 text-lg font-medium'>
								<Link
									href='#'
									className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'>
									<Logo className='h-6 w-6 transition-all group-hover:scale-110' />
									<span className='sr-only'>Acme Inc</span>
								</Link>
								<Link
									href='#'
									className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
									<LayoutDashboard className='h-5 w-5' />
									Dashboard
								</Link>
								<Link
									href='#'
									className='flex items-center gap-4 px-2.5 text-foreground'>
									Orders
								</Link>
								<Link
									href='#'
									className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
									<Package className='h-5 w-5' />
									Products
								</Link>
								<Link
									href='#'
									className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
									<Users2 className='h-5 w-5' />
									Customers
								</Link>
								<Link
									href={'/admin/settings'}
									className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'>
									<LineChart className='h-5 w-5' />
									Settings
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
					<Breadcrumb className='hidden md:flex'>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href='#'>Admin Dashboard</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
						</BreadcrumbList>
					</Breadcrumb>
					<DropdownMenu modal={true}>
						<DropdownMenuTrigger asChild>
							<Button
								variant='outline'
								size='icon'
								className='overflow-hidden rounded-full'>
								<span>AD</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Link href={'/admin/settings'}>Settings</Link>
							</DropdownMenuItem>
							<DropdownMenuItem>Support</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogoutButton />
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</header>
				{children}
			</div>
		</div>
	);
}
