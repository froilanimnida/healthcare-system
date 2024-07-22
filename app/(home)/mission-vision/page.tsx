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
				</CardContent>
			</Card>
		</div>
	);
};

export default MissionVisionPage;
