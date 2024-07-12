import React from 'react';
import Link from 'next/link';
import SignUp from './account/sign-up/page';

const AccountPage = () => {
	return (
		<>
			<div className='card grid place-content-center w-11/12 md:w-3/4 lg:w-1/3 bg-base-100 shadow-xl'>
				<div className='card-body flex flex-col gap-5 w-full'>
					<div className='flex flex-col justify-start gap-3'>
						<h2 className='card-title'>Where do you want to proceed?</h2>
						<p>
							To get started, create an account. If you have an account then
							login
						</p>
					</div>

					<div className='flex mt-5 flex-col justify-center items-center w-full gap-5'>
						<Link
							className='btn'
							href={'/account/sign-up'}>
							Create an account
						</Link>
						<Link
							className='btn btn-ghost'
							href={'/account/login'}>
							Login to my account
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default AccountPage;
