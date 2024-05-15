import React from 'react';
import Role from '@/app/account/role/RoleForm';

const RolePage = () => {
	return (
		<div className='lg:p-8'>
			<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
				<div className='flex flex-col space-y-2 text-center'>
					<h1 className='text-2xl font-semibold tracking-tight'>
						Select a role
					</h1>
				</div>
				<Role />
			</div>
		</div>
	);
};

export default RolePage;
