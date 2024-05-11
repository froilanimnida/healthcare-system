import { updateSession } from '@/utils/supabase/middleware';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	const response = await updateSession(request);

	const user = response.headers.get('x-supabase-user');
	console.log(user);
	const restrictedPaths = ['/admin/*', '/user/*', '/nurse/*'];
	const isRestrictedPath = restrictedPaths.some((path) =>
		new RegExp(`^${path.replace('*', '.*')}$`).test(request.nextUrl.pathname),
	);

	if (isRestrictedPath && !user) {
		return NextResponse.redirect('/login');
	}

	return response;
}

export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
};
