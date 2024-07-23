import { updateSession } from '@/utils/supabase/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from './utils/supabase/server';

export async function middleware(request: NextRequest) {
	const response = await updateSession(request);
	const supabase = createClient();

	const user = JSON.parse(response.headers.get('x-supabase-user') || '{}').data
		?.user;
	const authPaths = ['/admin/', '/user/', '/nurse/', '/doctor/'];
	const isAuthPaths = authPaths.some((path) =>
		request.nextUrl.pathname.startsWith(path),
	);

	if (isAuthPaths && user === null) {
		const url = request.nextUrl.clone();
		url.pathname = '/account/login';
		return NextResponse.rewrite(url);
	}

	if (user?.role === '' || user?.role === null) {
		const url = request.nextUrl.clone();
		url.pathname = '/account/role';
		return NextResponse.rewrite(url);
	}

	return response;
}

export const config = {
	matcher: [
		'/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
	],
};
