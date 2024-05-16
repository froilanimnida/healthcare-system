import React from 'react';
import LogoIcon from '@/public/images/logo.webp';
import Image from 'next/image';

interface LogoProps {
	className?: string;
}

const Logo = ({ className }: LogoProps) => {
	return (
		<Image
			src={LogoIcon}
			alt='Logo'
			width={50}
			height={50}
			className={className}
		/>
	);
};

export default Logo;
