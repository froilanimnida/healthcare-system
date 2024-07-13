import React from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';

const layout = () => {
	return <div>layout</div>;
};

export default function AuthenticatedLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
			<body>
				<TooltipProvider>{children} </TooltipProvider>
			</body>
		</html>
	);
}
