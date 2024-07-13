import React from 'react';
import ServiceCard from '@/app/(home)/services/components/ServiceCard';

const HIVTesting = () => {
	const HIVTestingHelpfulLinks = [
		{
			title: 'HIV Testing | CDC',
			url: 'https://www.cdc.gov/hiv/testing/index.html',
		},
		{
			title: 'Who Should Get Tested for HIV? | HIV.gov',
			url: 'https://www.hiv.gov/hiv-basics/hiv-testing/learn-about-hiv-testing/who-should-get-tested',
		},
		{
			title: 'HIV/AIDS Diagnosis and Treatment | Mayo Clinic',
			url: 'https://www.mayoclinic.org/diseases-conditions/hiv-aids/diagnosis-treatment/drc-20373531',
		},
		{
			title: 'HIV Testing Information | WHO',
			url: 'https://www.who.int/news-room/fact-sheets/detail/hiv-aids',
		},
		{
			title: 'HIV Testing and Diagnosis | WebMD',
			url: 'https://www.webmd.com/hiv-aids/hiv-aids-screening',
		},
	];

	const HIVTestingContentParagraphs = [
		{
			sub_title: 'Importance of HIV Testing:',
			sub_content:
				'HIV testing is essential for early detection and treatment. Knowing your HIV status helps in taking necessary steps to protect your health and the health of others. Early detection can significantly improve health outcomes and reduce the spread of HIV.',
		},
		{
			sub_title: 'Types of HIV Tests:',
			sub_content:
				'There are several types of HIV tests available, including rapid tests, home testing kits, and laboratory tests. Each type has its own benefits, and healthcare providers can recommend the most suitable option based on individual needs and circumstances.',
		},
		{
			sub_title: 'Understanding the Testing Process:',
			sub_content:
				'HIV testing involves a simple procedure, typically using a blood or saliva sample. Results from rapid tests can be available within minutes, while laboratory tests may take a few days. It is important to follow up with a healthcare provider to understand the results and next steps.',
		},
		{
			sub_title: 'Confidentiality and Support:',
			sub_content:
				'Confidentiality is a key aspect of HIV testing. Healthcare providers are committed to ensuring the privacy of individuals getting tested. Additionally, there are numerous support services available to help individuals cope with their results, whether positive or negative.',
		},
		{
			sub_title: 'Preventive Measures and Education:',
			sub_content:
				'HIV testing is part of a broader strategy to prevent the spread of HIV. Alongside regular testing, education on safe practices, such as using condoms and pre-exposure prophylaxis (PrEP), is vital for reducing the risk of transmission.',
		},
		{
			sub_title: 'Living with HIV:',
			sub_content:
				'For those who test positive, there are effective treatments available that enable individuals to live long and healthy lives. Antiretroviral therapy (ART) helps to control the virus, improving quality of life and reducing the risk of transmitting HIV to others.',
		},
	];

	return (
		<div className='w-full flex items-center justify-center'>
			<ServiceCard
				links={HIVTestingHelpfulLinks}
				title='HIV Testing'
				description='Essential Service for Early Detection and Prevention'
				first_line='HIV testing is a critical service for early detection, allowing for timely treatment and prevention efforts. Understanding the testing process, maintaining confidentiality, and accessing support are key components in managing and preventing HIV.'
				content={HIVTestingContentParagraphs}
			/>
		</div>
	);
};

export default HIVTesting;
