import NextAuth from 'next-auth/next';
import { NextAuthOptions } from 'next-auth';
import { SupabaseAdapter } from '@auth/supabase-adapter';
import Auth0 from 'next-auth/providers/auth0';
import Google from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
	adapter: SupabaseAdapter({
		url: process.env.SUPABASE_URL || '',
		secret: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
	}),
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
	],
};
