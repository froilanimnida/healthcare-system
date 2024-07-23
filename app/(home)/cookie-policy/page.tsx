import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const CookiePolicy = () => {
	return (
		<div className='w-full justify-center items-center flex'>
			<Card className='w-11/12 max-w-screen-2xl'>
				<CardHeader>
					<CardTitle>Cookie Policy</CardTitle>
					<CardDescription>Last Updated: July 23, 2024</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-5'>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Introduction</h1>
						<p>
							Nora Birthing Care Clinic (&quot;we,&quot; &quot;us,&quot; or
							&quot;our&quot;) is committed to maintaining the privacy and
							security of your personal information. This Cookie Policy explains
							how we use cookies and similar technologies on our website (the
							&quot;Site&quot;). By using the Site, you agree to the use of
							cookies as described in this policy. If you do not agree, please
							disable cookies in your browser settings or refrain from using the
							Site.
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>What Are Cookies?</h1>
						<p>
							Cookies are small text files that are placed on your device by
							websites that you visit. They are widely used to make websites
							work more efficiently and to provide information to the site
							owners.
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Types of Cookies We Use
						</h1>
						<p>
							Currently, we do not use traditional cookies on our Site. However,
							we do use local storage for specific purposes. Local storage is a
							type of web storage that allows us to store data locally on your
							device without using cookies.
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							How We Use Local Storage
						</h1>
						<p>
							We use local storage for the following purposes:
							<ol className='list-decimal pl-5'>
								<li>
									<strong>Dark Mode Theming</strong>: We store your preference
									for dark mode or light mode in local storage to ensure that
									your selected theme is maintained across your visits to our
									Site.
								</li>
								<li>
									<strong>Admin Login State</strong>: For administrative users,
									we store the state of your login in local storage to manage
									your session and ensure secure access to the admin section of
									the Site.
								</li>
							</ol>
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Managing Local Storage
						</h1>
						<p>
							You can manage local storage settings through your web browser
							settings. Here are some general steps to manage local storage:
						</p>
						<ol className='list-decimal pl-5'>
							<li>
								<strong>Clearing Local Storage</strong>: You can clear local
								storage data by clearing your browser&apos;s cache or data
								storage settings.
							</li>
							<li>
								<strong>Blocking Local Storage</strong>: Most modern browsers
								allow you to block websites from using local storage. You can
								find these settings in your browser&apos;s privacy or security
								settings.
							</li>
						</ol>
					</div>

					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Changes to This Cookie Policy
						</h1>
						<p>
							We may update this Cookie Policy from time to time to reflect
							changes in our practices or for other operational, legal, or
							regulatory reasons. We will notify you of any changes by posting
							the updated policy on our Site. You are advised to review this
							Cookie Policy periodically for any changes.
						</p>
					</div>

					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Contact Us</h1>
						<p>
							If you have any questions or concerns about our use of cookies or
							local storage, please contact us at:
						</p>
						<p>Nora Birthing Care Clinic</p>
						<p>
							Address: Phase 7b, Package 6, Block 35, Lot 28, Bagong Silang,
							Caloocan, Philippine
						</p>
						<p>Phone: 0949 333 0338</p>
						<p>Email: nsvelasquez@yahoo.com</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default CookiePolicy;
