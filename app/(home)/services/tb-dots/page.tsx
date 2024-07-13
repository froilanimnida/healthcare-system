import React from 'react';
import ServiceCard from '@/app/(home)/services/components/ServiceCard';

const TBDOTS = () => {
	const TBDOTSHelpfulLinks = [
		{
			title: 'Directly Observed Therapy (DOT) | CDC',
			url: 'https://www.cdc.gov/tb/webcourses/TB101/page16489.html#:~:text=Directly%20observed%20therapy%20(DOT)%3A,dose%20of%20the%20prescribed%20drugs.',
		},
		{
			title: 'Directly Observed Therapy (DOT) | Minnesota Department of Health',
			url: 'https://www.health.state.mn.us/diseases/tb/lph/dot.html',
		},
		{
			title:
				'National Tuberculosis Control Program (NTP) | Department of Health',
			url: 'https://ntp.doh.gov.ph/about-ntp/',
		},
		{
			title: 'Directly Observed Treatment, Short-course (DOTS) | Wikipedia',
			url: 'https://en.wikipedia.org/wiki/Directly_observed_treatment,_short-course',
		},
		{
			title: 'TB Disease | CDC',
			url: 'https://www.cdc.gov/tb/topic/treatment/tbdisease.htm',
		},
	];

	const TBDOTSContentParagraphs = [
		{
			sub_title: 'Overview of TB and DOTS:',
			sub_content:
				'Tuberculosis (TB) is a serious infectious disease that primarily affects the lungs. The Directly Observed Treatment, Short-course (DOTS) strategy is a comprehensive approach to TB control, ensuring patients adhere to their treatment regimen through supervised administration of medication.',
		},
		{
			sub_title: 'Importance of DOTS:',
			sub_content:
				'DOTS is vital for the effective treatment of TB. It helps to ensure that patients complete their full course of medication, which is crucial for curing TB and preventing the development of drug-resistant strains. This supervised approach increases treatment success rates and reduces TB transmission.',
		},
		{
			sub_title: 'Components of the DOTS Strategy:',
			sub_content:
				'The DOTS strategy includes five key components: political commitment with increased and sustained financing, case detection through quality-assured bacteriology, standardized treatment with supervision and patient support, an effective drug supply and management system, and monitoring and evaluation systems for program assessment.',
		},
		{
			sub_title: 'Role of Healthcare Providers:',
			sub_content:
				'Healthcare providers play a critical role in the DOTS strategy. They ensure that patients take their medication regularly under supervision, provide education about TB and its treatment, and support patients throughout their treatment journey, addressing any challenges that arise.',
		},
		{
			sub_title: 'Patient Support and Education:',
			sub_content:
				'Patient support and education are fundamental to the success of DOTS. Educating patients about the importance of adhering to their treatment plan, understanding potential side effects, and providing psychological and social support helps in maintaining treatment adherence and improving outcomes.',
		},
		{
			sub_title: 'Impact and Success of DOTS:',
			sub_content:
				'The DOTS strategy has been highly successful in controlling TB globally. It has significantly increased cure rates, reduced TB incidence, and prevented the emergence of multidrug-resistant TB. Ongoing commitment and support for DOTS are essential for continuing this success and moving towards the eradication of TB.',
		},
	];

	return (
		<div className='w-full flex items-center justify-center'>
			<ServiceCard
				links={TBDOTSHelpfulLinks}
				title='TB DOTS (Directly Observed Treatment, Short-course)'
				description='Comprehensive Approach to TB Control and Treatment'
				first_line='The DOTS strategy is a pivotal service for the treatment and control of tuberculosis (TB). By ensuring patients adhere to their treatment regimen under direct observation, DOTS helps to cure TB, prevent drug resistance, and reduce transmission.'
				content={TBDOTSContentParagraphs}
			/>
		</div>
	);
};

export default TBDOTS;
