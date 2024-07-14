import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const BlogsPage = () => {
	return (
		<div className='w-full  flex flex-col justify-center gap-5 items-center'>
			<h1 className='text-xl text-left md:text-2xl lg:text-4xl font-bold'>
				Blogs
			</h1>
			<div className='w-full gap-5 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<Card>
					<CardHeader>
						<CardTitle>Dental Care Essentials</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Maintaining Oral Hygiene and Health
						</CardDescription>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>HIV Testing: What You Need to Know</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Ensuring Early Detection and Management
						</CardDescription>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Support for Those in Need</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Comprehensive Maintenance Services
						</CardDescription>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Prenatal Care Guide</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Ensuring Health for Expectant Mothers
						</CardDescription>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Understanding TB Dots</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Effective Tuberculosis Treatment Strategies
						</CardDescription>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Vaginal Cleaning Myths and Facts</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Proper Hygiene Practices for Women
						</CardDescription>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Vaccination for Babies</CardTitle>
					</CardHeader>
					<CardContent>
						<CardDescription>
							Essential Immunizations for Infants
						</CardDescription>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default BlogsPage;
