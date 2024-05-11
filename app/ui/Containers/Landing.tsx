import React from 'react';
interface LandingContainerProps {
	children: React.ReactNode;
}
const Landing = ({ children }: LandingContainerProps) => {
	return (
		<div className='w-full flex justify-center items-center gap-10'>
			<div className='max-w-screen-2xl w-11/12 gap-10 flex flex-col justify-center items-center min-h-screen'>
				{children}
			</div>
		</div>
	);
};

export default Landing;
