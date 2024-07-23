import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const TermsOfService = () => {
	return (
		<div className='w-full justify-center items-center flex'>
			<Card className='w-11/12 max-w-screen-2xl'>
				<CardHeader>
					<CardTitle>Terms of Service</CardTitle>
					<CardDescription>Last Updated: July 23, 2024</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-5'>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Introduction</h1>
						<p>
							Welcome to the Nora Birthing Care Clinic website (the
							&quot;Site&quot;). These terms and conditions (&quot;Terms&quot;)
							govern your use of the Site and the services provided by Nora
							Birthing Care Clinic (&quot;we,&quot; &quot;us,&quot; or
							&quot;our&quot;). By accessing or using the Site, you agree to
							comply with and be bound by these Terms. If you do not agree to
							these Terms, please do not use the Site.{' '}
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Use of the Site</h1>
						<ol className='list-decimal pl-5'>
							<li>
								<span className='font-bold'>Eligibility</span>: By using the
								Site, you represent and warrant that you are at least 18 years
								of age and have the legal capacity to enter into these Terms.
							</li>
							<li>
								<span className='font-bold'>Account Registration</span>: Certain
								features of the Site may require you to register for an account.
								You agree to provide accurate and complete information during
								the registration process and to keep your account information
								up-to-date. You are responsible for maintaining the
								confidentiality of your account credentials and for all
								activities that occur under your account.
							</li>
							<li>
								<span className='font-bold'>User Content</span>: You are solely
								responsible for any content you post on the Site, including but
								not limited to text, images, and other materials. You agree not
								to post any content that is inappropriate, offensive, or
								infringes on the rights of others.
							</li>
						</ol>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Services</h1>
						<ol className='list-decimal pl-5'>
							<li>
								<span className='font-bold'>Appointment Booking</span>: The Site
								allows you to book appointments at Nora Birthing Care Clinic.
								Appointment availability is subject to change, and we do not
								guarantee that a specific date and time will be available.
							</li>
							<li>
								<span className='font-bold'>Consultation Services</span>: Our
								qualified medical professionals provide consultation services.
								The information provided during consultations is for general
								informational purposes and is not a substitute for professional
								medical advice, diagnosis, or treatment.
							</li>
						</ol>
					</div>
					<div>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Payment and Cancellation
						</h1>
						<ol className='list-decimal pl-5'>
							<li>
								<span className='font-bold'>Fees</span>: Fees for services
								provided by Nora Birthing Care Clinic are specified on the Site.
								We reserve the right to change our fees at any time. Payments
								must be made at the time of booking or as otherwise specified on
								the Site.
							</li>
							<li>
								<span className='font-bold'>Cancellation and Refunds</span>:
								Cancellation policies are outlined on the Site. Please review
								these policies before booking an appointment. Refunds, if
								applicable, will be processed in accordance with our refund
								policy.
							</li>
						</ol>
					</div>
					<div>
						<h1 className='font-bold text-xl lg:text-2xl'>Privacy</h1>
						<p>
							Your use of the Site is subject to our Privacy Policy, which can
							be found{' '}
							<Link
								className='font-bold hover:underline'
								href={'/privacy-policy'}>
								here
							</Link>
							. By using the Site, you consent to the collection, use, and
							disclosure of your information as described in the Privacy Policy.
						</p>
					</div>

					<div>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Intellectual Property
						</h1>

						<ol className='list-decimal pl-5'>
							<li>
								<span className='font-bold'>Ownership</span>: The Site and its
								content, including but not limited to text, graphics, images,
								and software, are the property of Nora Birthing Care Clinic or
								its licensors and are protected by intellectual property laws.
							</li>
							<li>
								<span className='font-bold'>Limited License</span>: We grant you
								a limited, non-exclusive, non-transferable license to access and
								use the Site for personal, non-commercial purposes. You may not
								reproduce, distribute, modify, or create derivative works from
								the Site without our express written permission.
							</li>
						</ol>
					</div>

					<div>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Limitation of Liability
						</h1>
						<p>
							To the fullest extent permitted by law, Nora Birthing Care Clinic
							shall not be liable for any indirect, incidental, special,
							consequential, or punitive damages, or any loss of profits or
							revenues, whether incurred directly or indirectly, or any loss of
							data, use, goodwill, or other intangible losses, resulting from
							(i) your use or inability to use the Site; (ii) any unauthorized
							access to or use of our servers and/or any personal information
							stored therein; and (iii) any bugs, viruses, trojan horses, or the
							like that may be transmitted to or through the Site by any third
							party.
						</p>
					</div>

					<div>
						<h1 className='font-bold text-xl lg:text-2xl'>Indemnification</h1>
						<p>
							You agree to indemnify, defend, and hold harmless Nora Birthing
							Care Clinic, its affiliates, officers, directors, employees, and
							agents from and against any claims, liabilities, damages, losses,
							and expenses, including without limitation, reasonable legal and
							accounting fees, arising out of or in any way connected with your
							access to or use of the Site or your violation of these Terms.
						</p>
					</div>

					<div>
						<h1 className='font-bold text-xl lg:text-2xl'>Governing Law</h1>
						<p>
							These Terms and any disputes related to these Terms or the Site
							will be governed by and construed in accordance with the laws of
							the jurisdiction in which Nora Birthing Care Clinic operates,
							without regard to its conflict of law principles.
						</p>
					</div>

					<div>
						<h1 className='font-bold text-xl lg:text-2xl'>Changes to terms</h1>
						<p>
							We reserve the right to modify these Terms at any time. Any
							changes will be effective immediately upon posting on the Site.
							Your continued use of the Site after the posting of changes
							constitutes your acceptance of such changes.
						</p>
					</div>

					<div>
						<h1 className='font-bold text-xl lg:text-2xl'>Contact Us</h1>
						<p>
							If you have any questions or concerns about these Terms, please
							contact us at:
						</p>
						<p className='font-bold'>Nora Birthing Care Clinic</p>
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

export default TermsOfService;
