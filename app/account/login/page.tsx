import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LoginImage from '@/public/images/hero/login-image.jpg';
import Login from '@/app/ui/Forms/Login';

const LogIn = async () => {
	return (
		<>
			<div className='w-full flex flex-col min-h-screen justify-center items-center backdrop-blur-lg'>
				<div className='w-full min-h-96 grid place-content-center'>
					<Image
						className='w-64 rounded-xl'
						src={LoginImage}
						alt='Login Image holding a phone'
					/>
				</div>
				<div className='card grid gap-3 place-content-center w-11/12 md:w-3/4 lg:w-2/3 bg-base-100 shadow-xl'>
					<Login />
				</div>
			</div>
		</>
	);
};

export default LogIn;
