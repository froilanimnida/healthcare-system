import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const PrivacyPolicy = () => {
	return (
		<div className='w-full justify-center items-center flex'>
			<Card className='w-11/12 max-w-screen-2xl'>
				<CardHeader>
					<CardTitle>Privacy Policy</CardTitle>
					<CardDescription>Last Updated: July 23, 2024</CardDescription>
				</CardHeader>
				<CardContent className='flex flex-col gap-5'>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Introduction</h1>
						<p>
							Nora Birthing Care Clinic (&quot;we,&quot; &quot;us,&quot; or
							&quot;our&quot;) is committed to protecting your privacy. This
							Privacy Policy outlines how we collect, use, disclose, and
							safeguard your information when you visit our website (the
							&quot;Site&quot;). By using the Site, you agree to the terms of
							this Privacy Policy. If you do not agree with the terms of this
							Privacy Policy, please do not use the Site.
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Information We Collect
						</h1>
						<p>
							We collect personal information that you voluntarily provide to us
							when you register on the Site, book an appointment, or otherwise
							interact with our services. The personal information we collect
							includes, but is not limited to:
						</p>
						<ul className='list-disc pl-5'>
							<li>First Name</li>
							<li>Middle Name</li>
							<li>Last Name</li>
							<li>Age</li>
							<li>Barangay</li>
							<li>Zip Code</li>
							<li>Home Address Line 1</li>
							<li>Home Address Line 2</li>
							<li>Email</li>
							<li>Mobile Number</li>
							<li>Alternate Mobile Number</li>
							<li>Alternate Email</li>
							<li>Remarks</li>
							<li>Date of Birth</li>
							<li>City</li>
							<li>Sex</li>
							<li>Service</li>
							<li>Date of Appointment</li>
						</ul>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							How We Use Your Information
						</h1>
						<p>We use the information we collect in the following ways:</p>
						<ul className='list-disc pl-5'>
							<li>
								Appointment Scheduling: To facilitate your appointment booking
								and ensure that we provide the appropriate services.
							</li>
							<li>
								Communication: To communicate with you regarding your
								appointments, inquiries, and other requests.
							</li>
							<li>
								Service Improvement: To improve our services and enhance your
								experience with us.
							</li>
							<li>
								Legal Compliance: To comply with applicable laws, regulations,
								and legal processes.
							</li>
						</ul>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Cookies</h1>
						<p>
							We use cookies to enhance your experience on the Site. Cookies are
							text files placed on your computer to collect standard Internet
							log information and visitor behavior information. You can set your
							browser not to accept cookies, and the above website tells you how
							to remove cookies from your browser. However, in a few cases, some
							of our Site features may not function as a result.
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Security of Your Information
						</h1>
						<p>
							We implement appropriate technical and organizational measures to
							protect the personal information we collect and store. However,
							please be aware that no security measures are perfect or
							impenetrable, and we cannot guarantee the absolute security of
							your information.
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Retention of Your Information
						</h1>
						<p>
							We will retain your personal information for as long as necessary
							to fulfill the purposes for which it was collected, including to
							comply with legal, accounting, or reporting requirements.
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Your Rights</h1>
						<p>
							Depending on your jurisdiction, you may have the following rights
							regarding your personal information:
						</p>
						<ul className='list-disc pl-5'>
							<li>
								Access: You have the right to request access to your personal
								information that we hold.
							</li>
							<li>
								Correction: You have the right to request the correction of
								inaccurate or incomplete information.
							</li>
							<li>
								Deletion: You have the right to request the deletion of your
								personal information, subject to certain conditions.
							</li>
							<li>
								Restriction: You have the right to request the restriction of
								processing your personal information.
							</li>
							<li>
								Objection: You have the right to object to the processing of
								your personal information.
							</li>
							<li>
								Data Portability: You have the right to request the transfer of
								your personal information to another entity.
							</li>
						</ul>
						<p>
							To exercise any of these rights, please contact us using the
							contact information provided below.
						</p>
					</div>
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>
							Changes to This Privacy Policy
						</h1>
						<p>
							We may update this Privacy Policy from time to time. We will
							notify you of any changes by posting the new Privacy Policy on the
							Site. You are advised to review this Privacy Policy periodically
							for any changes.
						</p>
					</div>
					{/* Content: */}
					<div className='flex flex-col gap-2'>
						<h1 className='font-bold text-xl lg:text-2xl'>Contact Us</h1>
						<p>
							If you have any questions or concerns about this Privacy Policy or
							our data practices, please contact us at:
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

export default PrivacyPolicy;
