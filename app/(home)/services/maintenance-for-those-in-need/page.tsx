import React from 'react';
import ServiceCard from '@/app/(home)/services/components/ServiceCard';

const MaintenanceForThoseInNeed = () => {
	const MaintenanceHelpfulLinks = [
		{
			title: 'Home Maintenance Checklist | State Farm®',
			url: 'https://www.bcbsmt.com/docs/rx-drugs/drug-lists/mt/maintenance-drug-list-mt.pdf',
		},
		{
			title: 'Home Maintenance Schedule | CareFirst BlueCross BlueShield',
			url: 'https://member.carefirst.com/carefirst-resources/pdf/2019-maintenance-drug-list-sum2723.pdf',
		},
		{
			title: 'Home Maintenance Tips | Blue Cross Blue Shield of Michigan',
			url: 'https://csjbunion.org/index.php/health-and-welfare/maintenance-drugs/',
		},
		{
			title: 'Maintenance Drug Dose | sciencedirect',
			url: 'https://www.sciencedirect.com/topics/immunology-and-microbiology/maintenance-drug-dose',
		},
		{
			title: 'Home Maintenance Services | Philippine News Agency',
			url: 'https://www.pna.gov.ph/articles/1171337',
		},
	];

	const MaintenanceContentParagraphs = [
		{
			sub_title: 'The Importance of Regular Maintenance:',
			sub_content:
				'Regular home maintenance is essential for ensuring the safety, functionality, and comfort of a living environment. It helps to prevent minor issues from becoming major problems, saving both time and money in the long run.',
		},
		{
			sub_title: 'Common Home Maintenance Tasks:',
			sub_content:
				'Typical home maintenance tasks include checking and replacing HVAC filters, inspecting and cleaning gutters, testing smoke and carbon monoxide detectors, and ensuring that plumbing and electrical systems are in good working order.',
		},
		{
			sub_title: 'Seasonal Maintenance Routines:',
			sub_content:
				'Each season brings its own set of maintenance needs. Spring may require cleaning gutters and checking the roof for winter damage, while fall is the time to prepare heating systems and insulate pipes to prevent freezing.',
		},
		{
			sub_title: 'Safety Tips for Home Maintenance:',
			sub_content:
				'Safety should always be a priority during home maintenance. Use proper tools and equipment, follow manufacturer instructions, and take necessary precautions such as wearing gloves and safety glasses to prevent injuries.',
		},
		{
			sub_title: 'Resources for Those in Need:',
			sub_content:
				'Various organizations offer assistance with home maintenance for those in need, including seniors and individuals with disabilities. These resources can provide financial aid, volunteer labor, and professional services to help maintain a safe and comfortable home.',
		},
		{
			sub_title: 'Long-term Benefits of Proper Maintenance:',
			sub_content:
				'Investing time and effort into regular home maintenance not only preserves the value of the property but also enhances the quality of life for its occupants. A well-maintained home is a safer and more pleasant place to live.',
		},
	];

	return (
		<div className='w-full flex items-center justify-center'>
			<ServiceCard
				links={MaintenanceHelpfulLinks}
				title='Maintenance for Those in Need'
				description='Ensuring Safety and Comfort Through Regular Home Care'
				first_line='Regular home maintenance is a critical service that ensures safety, comfort, and functionality for those in need. By following a comprehensive maintenance schedule, potential issues can be addressed promptly, enhancing the living environment.'
				content={MaintenanceContentParagraphs}
			/>
		</div>
	);
};

export default MaintenanceForThoseInNeed;
