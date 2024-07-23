import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

const MissionVisionPage = () => {
	return (
		<div className='w-full flex flex-col gap-5 items-center justify-center'>
			<Card className='w-11/12 max-w-screen-2xl'>
				<CardHeader>
					<CardTitle>Mission and Vision</CardTitle>
					<CardDescription>
						Discover our mission and vision for the Nora Birthing
					</CardDescription>
				</CardHeader>
				<CardContent className='mt-5 flex flex-col gap-10'>
					<div className='flex flex-col gap-5'>
						<h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>
							Mission
						</h1>
						<p>
							The Nora Birthing Care Clinic shall endeavor to become a
							community-based birthing facility of choice of Men and Women of
							reproductive (MWRA) specially in the provision of Normal
							Spontaneous Vaginal Delivery (NSVD).
						</p>
					</div>

					<div className='flex flex-col gap-5'>
						<h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>
							Vision
						</h1>
						<p>
							The Nora Birthing Care Clinic envisions to provide safe and
							effective community-based health care services to mothers and
							their newborn by adhering to DOH prescribed healthcare standard.
						</p>
					</div>

					<div className='flex flex-col gap-5'>
						<h1 className='font-bold text-xl md:text-2xl lg:text-3xl'>
							Objectives
						</h1>
						<p>
							Guided by the above mission and vision the following are the
							objectives of the birthing facility
						</p>

						<ul className='list-disc pl-5'>
							<li>
								Provide and educate every woman, the family and the community
								with correct information regarding good health practices.
							</li>
							<li>
								Educate pregnant women with proper self-care, pre-natal care and
								post-partum care.
							</li>
							<li>
								Make available to the newbord babies the necessary vaccines
								includeing the implementation of newboarn screening.
							</li>
						</ul>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default MissionVisionPage;
