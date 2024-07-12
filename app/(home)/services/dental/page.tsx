import React from 'react';
import ServiceCard from '@/app/(home)/services/components/ServiceCard';

const Dental = () => {
	const DentalHepfulLinks = [
		{
			title: 'Slideshow: 15 Tooth Problems | WebMD',
			url: 'https://www.webmd.com/oral-health/ss/slideshow-tooth-problems',
		},
		{
			title: 'Dental Health and Overall Health | Mayo Clinic',
			url: 'https://medlineplus.gov/ency/article/001957.htm',
		},
		{
			title:
				'10 Most Common Dental Procedures and How They Work | Crescent Dental',
			url: 'https://www.crescentdental.ca/10-most-common-dental-procedures-and-how-they-work/',
		},
		{
			title: 'Dental Health: Brush Up on Dental Care Basics | Mayo Clinic',
			url: 'https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/dental/art-20047475',
		},
		{
			title:
				'Everything You Need to Know About Dental and Oral Health | Healthline',
			url: 'https://www.healthline.com/health/dental-and-oral-health',
		},
	];

	const DentalContent = [
		{
			sub_title: 'Daily Oral Hygiene:',
			sub_content:
				'A cornerstone of dental care is maintaining a consistent daily oral hygiene routine. This includes brushing your teeth at least twice a day with fluoride toothpaste, flossing daily to remove plaque and food particles between teeth, and using mouthwash to kill bacteria and freshen breath. It is important to replace your toothbrush every three to four months or sooner if the bristles are frayed.',
		},
		{
			sub_title: 'Regular Dental Checkups:',
			sub_content:
				'Visiting the dentist regularly, typically every six months, is crucial for early detection and treatment of dental issues. During these visits, your dentist will conduct a thorough examination of your teeth and gums, perform a professional cleaning to remove plaque and tartar buildup, and provide education on maintaining oral health.',
		},
		{
			sub_title: 'Preventive Measures:',
			sub_content:
				'Preventive dental care includes the application of dental sealants to protect the chewing surfaces of the back teeth from decay and the use of fluoride treatments to strengthen tooth enamel and prevent cavities. Your dentist may also recommend specific products or techniques tailored to your individual needs.',
		},
		{
			sub_title: 'Diet and Lifestyle:',
			sub_content:
				'A balanced diet plays a significant role in maintaining oral health. Consuming foods rich in vitamins and minerals, such as calcium and vitamin D, helps keep teeth and gums strong. Limiting sugary and acidic foods and beverages can prevent tooth decay and erosion. Additionally, avoiding tobacco products and excessive alcohol consumption is beneficial for both oral and overall health.',
		},
		{
			sub_title: 'Addressing Dental Issues:',
			sub_content:
				'Promptly addressing dental problems such as toothaches, sensitivity, or bleeding gums is important to prevent further complications. Common dental treatments include fillings for cavities, root canals for infected teeth, and scaling and root planing for gum disease. In some cases, orthodontic treatment may be necessary to correct misaligned teeth and improve bite function.',
		},
		{
			sub_title: 'Specialized Care:',
			sub_content:
				'Certain populations may require specialized dental care. For example, children benefit from early dental visits to monitor their developing teeth and establish good oral hygiene habits. Pregnant women need to maintain good dental health to prevent pregnancy-related gum disease. Older adults may need special care for dentures or management of dry mouth caused by medications.',
		},
	];

	return (
		<div className='w-full flex items-center justify-center'>
			<ServiceCard
				title='Dental Care'
				links={DentalHepfulLinks}
				description='Ensuring Optimal Oral Health'
				first_line='Dental care is an integral aspect of maintaining overall health and
						well-being. Good oral hygiene practices help prevent a myriad of
						problems, including tooth decay, gum disease, and bad breath. Proper
						dental care involves regular visits to the dentist, daily oral
						hygiene practices, and making informed choices about diet and
						lifestyle.'
				content={DentalContent}
			/>
		</div>
	);
};

export default Dental;
