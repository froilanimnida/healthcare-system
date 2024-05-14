import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request, response: Response) {
	const secretKeu = process.env.RECAPTCHA_SECRET_KEY;
	const postData = await request.json();
	const { recaptchaToken } = postData;
	let res;

	const formData = `secret=${secretKeu}&response=${recaptchaToken}`;

	try {
		res = await axios.post(
			`https://www.google.com/recaptcha/api/siteverify`,
			formData,
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		);
	} catch (error) {
		console.error(error);
		return NextResponse.error();
	}

	if (res.data.success && res.data.score > 0.5 && res) {
		console.log('Recaptcha token verified');
		return NextResponse.json({
			success: true,
			score: res.data.score,
		});
	} else {
		console.error('Recaptcha token verification failed');
		return NextResponse.error();
	}
}
