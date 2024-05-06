import Link from 'next/link';
import React from 'react';

interface MenuLink {
	name: string;
	href: string;
	icon: React.ReactElement;
}

interface MenuProps {
	links: MenuLink[];
}

const Menu = ({ links }: MenuProps) => {
	return (
		<div className='dropdown md:hidden'>
			<div
				tabIndex={0}
				role='button'
				className='btn btn-ghost btn-circle'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 6h16M4 12h16M4 18h7'
					/>
				</svg>
			</div>
			<ul
				tabIndex={0}
				className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
				{links.map((link) => {
					return (
						<li key={link.href}>
							<Link href={link.href}>
								{link.icon}
								{link.name}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Menu;
