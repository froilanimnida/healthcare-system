import React from 'react';
import Link from 'next/link';
import {
	Card,
	CardDescription,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const AboutUsPage = () => {
	return (
		<div className='w-full justify-center items-center flex'>
			<Card className='w-11/12 max-w-screen-2xl'>
				<CardHeader>
					<CardTitle>About us</CardTitle>
					<CardDescription>Who we are</CardDescription>
					<CardContent className='flex flex-col gap-5'>
						<h1>
							Welcome to Nora Birthing Care Clinic, your trusted partner in
							maternal and child health located in the heart of Bagong Silang,
							Caloocan. At Nora Birthing Care Clinic, we are committed to
							providing comprehensive and compassionate care to ensure a healthy
							and safe journey for both mothers and their newborns.
						</h1>

						<div className='flex flex-col gap-3'>
							<h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>
								Our Mission
							</h2>
							<p>
								At Nora Birthing Care Clinic, our mission is to offer
								exceptional prenatal, postnatal, and preventive health services
								to our community. We strive to create a nurturing and supportive
								environment where every mother and baby receives personalized
								care tailored to their unique needs. Our dedicated team of
								healthcare professionals is here to guide you through every step
								of your maternity journey with expertise and empathy.
							</p>
						</div>

						<div className='flex flex-col gap-3'>
							<h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>
								Our Services
							</h2>
							<ul>
								<li>
									<strong>Prenatal Care:</strong> We believe that a healthy
									pregnancy starts with regular checkups and a balanced
									lifestyle. Our prenatal care services focus on monitoring your
									health and the development of your baby through consistent
									consultations with our experienced doctors and midwives.
								</li>
								<li>
									<strong>Vaginal Cleaning:</strong> Maintaining a healthy
									vaginal environment is crucial for overall well-being. Our
									vaginal cleaning services are designed to ensure cleanliness
									and comfort, providing you with peace of mind during your
									pregnancy.
								</li>
								<li>
									<strong>Dental Care:</strong> Good oral health is an essential
									aspect of overall health. We offer comprehensive dental care,
									including oral hygiene, preventive dentistry, and necessary
									treatments to keep your smile bright and healthy.
								</li>
								<li>
									<strong>Vaccination for Babies:</strong> Protecting your baby
									from preventable diseases is a priority. Our vaccination
									services ensure that your little one receives all the
									essential immunizations needed for a strong and healthy start
									in life.
								</li>
								<li>
									<strong>Maintenance for Those in Need:</strong> We understand
									that health needs can vary. Our maintenance services provide
									ongoing support and care for individuals requiring additional
									attention to maintain their well-being.
								</li>
								<li>
									<strong>HIV Testing:</strong> Early detection is key in
									managing HIV. We offer confidential HIV testing to help you
									understand your health status and take necessary actions.
								</li>
								<li>
									<strong>TB Dots:</strong> Tuberculosis treatment adherence is
									critical for effective recovery. Our TB Dots program ensures
									that individuals with tuberculosis complete their medication
									regimen and achieve optimal health outcomes.
								</li>
							</ul>
						</div>

						<div className='flex flex-col gap-3'>
							<h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>
								Our Commitment
							</h2>
							<p>
								At Nora Birthing Care Clinic, we are dedicated to providing
								high-quality healthcare services that prioritize the well-being
								of our patients. We are committed to fostering a culture of
								excellence, respect, and compassion in everything we do. Our
								team&apos;s unwavering dedication to your health and safety is
								what sets us apart as a trusted healthcare provider in Bagong
								Silang and beyond.
							</p>
						</div>

						<div className='flex flex-col gap-3'>
							<h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>
								Get in Touch
							</h2>
							<p>
								We invite you to connect with us for more information about our
								services or to schedule an appointment. Feel free to reach out
								through any of the following channels:
							</p>
							<ul>
								<li>
									<span className='font-bold'>Facebook:</span>{' '}
									<Link
										href={
											'https://www.facebook.com/phase7bBagongSilangBirthingClinic'
										}>
										Nora Birthing Care Clinic on Facebook
									</Link>
								</li>
								<li>
									<strong>Email:</strong>{' '}
									<Link href={'mailto:nsvelasquez@yahoo.com'}></Link>
								</li>
								<li>
									<span className='font-bold'>Phone:</span> 0949 333 0338
								</li>
							</ul>
						</div>

						<div className='flex flex-col gap-3'>
							<h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>
								Visit Us
							</h2>
							<p>
								Our clinic is conveniently located at:
								<span className='font-bold'>
									Address: Phase 7b, Package 6, Block 35, Lot 28, Bagong Silang,
									Caloocan, Philippines
								</span>
							</p>
							<p>
								You can also find us on Google Maps:{' '}
								<Link
									href={
										'https://www.google.com/maps/place/Nora+Birthing+Care+Clinic/@14.7758418,121.0561972,17z/'
									}>
									Nora Birthing Care Clinic Location
								</Link>
							</p>
						</div>

						<div>
							<p>
								Thank you for choosing Nora Birthing Care Clinic. We look
								forward to being a part of your journey to health and wellness.
							</p>
						</div>
					</CardContent>
				</CardHeader>
			</Card>
		</div>
	);
};

export default AboutUsPage;
