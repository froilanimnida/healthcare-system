import React from 'react';
import Logo from '@/components/ui/Logo';
import PhilHealth from '@/public/images/philhealth-logo.webp';
import DOH from '@/public/images/doh-logo.webp';
import Image from 'next/image';
import Link from 'next/link';

const FooterHero = () => {
	return (
		<>
			<div className='flex flex-col justify-center items-center w-full'>
				<div className='w-11/12 max-w-screen-2xl'>
					<footer className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 lg:gap-0  w-full p-10 bg-base-200 text-base-content'>
						<nav className='flex flex-col gap-3'>
							<h6 className='font-bold'>Services</h6>
							<Link href={'/services'}>Offered Services</Link>
							<Link href={'/doctors'}>Doctors</Link>
							<Link href={'/appointment'}>Book an Appointment</Link>
							<Link href={'/reviews'}>Reviews</Link>
							<Link href={'/contact'}>Contact</Link>
							<Link href={'/blogs'}>Blogs</Link>
						</nav>
						<nav className='flex flex-col gap-3'>
							<h6 className='font-bold'>Company</h6>
							<Link href={'/about-us'}>About us</Link>
							<Link href={'/history'}>History</Link>
							<Link href={'/mission-vision'}>Mission & Vision</Link>
						</nav>
						<nav className='flex flex-col gap-3'>
							<h6 className='font-bold'>Legal</h6>
							<Link href={'/tos'}>Terms of use</Link>
							<Link href={'/privacy-policy'}>Privacy policy</Link>
							<Link href={'/cookie-policy'}>Cookie policy</Link>
						</nav>
						<div className='flex flex-col gap-3'>
							<h1 className='font-bold'>Accredited by:</h1>
							<Image
								src={PhilHealth}
								alt='PhilHealth'
								width={150}
								height={150}
							/>
							<Image
								src={DOH}
								alt='DOH'
								width={150}
								height={150}
							/>
						</div>
					</footer>
					<footer className='flex flex-row justify-between w-full py-4 border-t bg-base-200 text-base-content border-base-300'>
						<aside className='items-start grid-flow-col flex flex-col gap-3'>
							<Link href='/'>
								<Logo />
							</Link>
							<p>
								Nora Birthing Care Clinic <br />
								<span className='font-bold'>A Maternity Clinic</span>
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
