'use client';
import React from 'react';
import LogoIcon from '@/public/images/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const FooterHero = () => {
	// get the path don't show if the path is in the list: ['/account/*', '/user/*', '/admin/*', '/nurse/*', '/doctor/*']
	const path = usePathname();
	const pathList = ['/account', '/user', '/admin', '/nurse', '/doctor'];
	const isPath = pathList.some((p) => path.includes(p));

	return (
		<>
			<div
				className={`${
					isPath ? 'hidden' : 'flex'
				} flex flex-col justify-center items-center w-full`}>
				<div className='w-11/12'>
					<footer className='grid grid-cols-3 w-full p-10 bg-base-200 text-base-content'>
						<nav className='flex flex-col gap-3'>
							<h6 className='footer-title'>Services</h6>
							<Link
								href={'/services'}
								className='link link-hover'>
								Offered Services
							</Link>
							<Link
								href={'/find-doctor'}
								className='link link-hover'>
								Find a Doctor
							</Link>
							<Link
								href={'/call-hotlines'}
								className='link link-hover'>
								Call and Hotlines
							</Link>
							<Link
								href={'/appointment'}
								className='link link-hover'>
								Book an Appointment
							</Link>
						</nav>
						<nav className='flex flex-col gap-3'>
							<h6 className='footer-title'>Company</h6>
							<Link
								href={'/about-us'}
								className='link link-hover'>
								About us
							</Link>
							<Link
								href={'/history'}
								className='link link-hover'>
								History
							</Link>
							<Link
								href={'/mission-vision'}
								className='link link-hover'>
								Mission & Vision
							</Link>
						</nav>
						<nav className='flex flex-col gap-3'>
							<h6 className='footer-title'>Legal</h6>
							<a className='link link-hover'>Terms of use</a>
							<a className='link link-hover'>Privacy policy</a>
							<a className='link link-hover'>Cookie policy</a>
						</nav>
					</footer>
					<footer className='flex flex-row justify-between w-full py-4 border-t bg-base-200 text-base-content border-base-300'>
						<aside className='items-center grid-flow-col'>
							<Image
								src={LogoIcon}
								alt='Logo'
								width={75}
								height={75}
							/>
							<p>
								Nora Birthing Care Clinic <br />A Maternity Clinic
							</p>
						</aside>
						<nav className='md:place-self-center md:justify-self-end'>
							<div className='grid grid-flow-col gap-4'>
								<Link
									type='button'
									target='_blank'
									href={
										'https://www.facebook.com/phase7bBagongSilangBirthingClinic'
									}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										className='fill-current w-6 h-6'>
										<path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
									</svg>
								</Link>
								<Link
									target='_blank'
									role='button'
									href={'mailto:nsvelasquez@yahoo.com'}>
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
											d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
										/>
									</svg>
								</Link>
								<Link
									href={'https://maps.app.goo.gl/mN7Hv7LBe5tMos288'}
									role='button'
									target='_blank'>
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
											d='M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z'
										/>
									</svg>
								</Link>
							</div>
						</nav>
					</footer>
				</div>
			</div>
		</>
	);
};

export default FooterHero;
