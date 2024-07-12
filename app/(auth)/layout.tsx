import React from 'react';

const layout = () => {
	return <div>layout</div>;
};

export default function AuthenticatedLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <div>{children}</div>;
}
