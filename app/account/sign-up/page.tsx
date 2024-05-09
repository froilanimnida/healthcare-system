import React from 'react';
import Image from 'next/image';
import SignUpImage from '@/public/images/hero/sign-up-image.jpg';
import SignUp from '@/app/ui/Forms/SignUp';

const SignUpPage = () => {
	return (
		<>
			<div className='w-full flex flex-col min-h-screen justify-center items-center backdrop-blur-lg'>
				<div className='w-full min-h-96 grid place-content-center'>
					<Image
						className='w-64 h-64 rounded-xl'
						src={SignUpImage}
						alt='Sign Up Image holding a phone'
					/>
				</div>

				<div className='card grid gap-3 place-content-center w-11/12 md:w-3/4 lg:w-2/3 bg-base-100 shadow-xl'>
					<SignUp />
				</div>
			</div>
		</>
	);
};

export default SignUpPage;
