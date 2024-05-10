'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { createClient } from '@/utils/supabase/server';
import { supabase } from '../lib/config/supabaseClient';

const updateAndResetPasswordSchema = z
	.object({
		newPassword: z.string().min(8),
		confirmPassword: z.string().min(8),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

const signUpSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(8),
		confirmPassword: z.string().min(8),
		terms: z.boolean(),
		role: z.enum(['user', 'admin', 'doctor']),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	})
	.refine((data) => data.terms, {
		message: 'You must agree to the terms and conditions',
		path: ['terms'],
	})
	.refine((data) => data.email && data.password, {
		message: 'Email and password are required',
		path: ['email', 'password'],
	});

const forgotPasswordSchema = z
	.object({
		email: z.string().email(),
	})
	.refine((data) => data.email, {
		message: 'Email is required',
		path: ['email'],
	});

const loginSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(8),
	})
	.refine((data) => data.email && data.password, {
		message: 'Email and password are required',
		path: ['email', 'password'],
	});

const deleteSchema = z
	.object({
		user_id: z.string(),
	})
	.refine((data) => data.user_id, {
		message: 'User ID is required',
		path: ['user_id'],
	});

export async function getUserRole(user_id: string) {
	const supabase = createClient();
	const { data, error } = await supabase
		.from('users')
		.select('role')
		.eq('user_id', user_id);
	if (error) throw new Error(error.message);
	return data;
}

export async function login(formData: { email: string; password: string }) {
	const supabase = createClient();
	const data = loginSchema.safeParse(formData);
	if (!data.success) throw new Error('Invalid email or password');
	const { error } = await supabase.auth.signInWithPassword({
		email: data.data.email,
		password: data.data.password,
	});

	if (error) throw new Error(error.message);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	const user_role = await getUserRole(user?.id as string);
	if (user_role[0].role === 'admin') redirect('/admin/dashboard');
	else if (user_role[0].role === 'doctor') redirect('/doctor/dashboard');
	else if (user_role[0].role === 'user') redirect('/user/dashboard');

	revalidatePath('/', 'layout');
	return null;
}

export async function signup(formData: FormData) {
	const supabase = createClient();
	const data = signUpSchema.parse({
		email: formData.get('email') as string,
		password: formData.get('password') as string,
		confirmPassword: formData.get('confirmPassword') as string,
		terms: formData.get('terms') === 'on',
		role: formData.get('role') as 'user' | 'admin' | 'doctor',
	});
	const result = signUpSchema.safeParse(data);

	if (!result.success) throw new Error(result.error.errors[0].message);
	if (!result.data.terms)
		throw new Error('You must agree to the terms and conditions');
	if (result.data.password !== result.data.confirmPassword)
		throw new Error('Passwords do not match');

	if (
		result.data.role !== 'user' &&
		result.data.role !== 'admin' &&
		result.data.role !== 'doctor'
	) {
		throw new Error('Invalid role selected');
	}

	const { error } = await supabase.auth.signUp({
		email: result.data.email,
		password: result.data.password,
	});

	if (error) {
		console.error(error.message);
		redirect('/account/error');
		return;
	}

	revalidatePath('/', 'layout');
	redirect('/account/login');
}

export async function insertUserDataToPublic(formData: FormData) {
	const {
		data: { user },
	} = await supabase.auth.getUser();
}

export async function logoutSession() {
	const { error } = await supabase.auth.signOut();
	if (error) throw new Error(error.message);
	redirect('/');
}

export async function forgotPassword(formData: FormData) {
	const supabase = createClient();
	const result = forgotPasswordSchema.parse({
		email: formData.get('email') as string,
	});
	if (!result.email) {
		throw new Error('Email is required');
	}
	const { email } = result;

	const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: 'http://localhost:3000/account/reset-password',
	});
}

export async function resetAndUpdatePassword(formData: FormData) {
	const supabase = createClient();
	const data = updateAndResetPasswordSchema.parse({
		newPassword: formData.get('newPassword') as string,
		confirmPassword: formData.get('confirmPassword') as string,
	});

	if (data.newPassword !== data.confirmPassword)
		throw new Error('Passwords do not match');
	supabase.auth.updateUser({
		password: data.newPassword,
	});

	revalidatePath('/', 'layout');
	redirect('/account/login');
}

export async function deleteUserAccount(formData: FormData) {
	const data = deleteSchema.parse({
		user_id: formData.get('user_id') as string,
	});
	if (!data.user_id) throw new Error('User ID is required');
	const { error } = await supabase.auth.admin.deleteUser(data.user_id);
	if (error) throw new Error(error.message);
}

export async function getAllUsers() {
	const supabase = createClient();
	const {
		data: { users },
		error,
	} = await supabase.auth.admin.listUsers({
		page: 1,
		perPage: 1000,
	});
	if (error) throw new Error(error.message);
	return users;
}
