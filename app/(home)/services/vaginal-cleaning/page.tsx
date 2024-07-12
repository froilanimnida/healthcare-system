import React from 'react';
import ServiceCard from '@/app/(home)/services/components/ServiceCard';

const VaginalCleaning = () => {
	const VarginalCleaningHepfulLink = [
		{
			title:
				'Vaginal Hygiene: How to Clean Your Vagina Safely | Medical News Today',
			url: 'https://www.medicalnewstoday.com/articles/how-to-clean-your-vagina',
		},
		{
			title: 'How to Clean Your Vagina and Vulva | HealthLine',
			url: 'https://www.healthline.com/health/how-to-clean-your-vagina',
		},
		{
			title: 'How to Clean Your Vagina and Vulva: The Ultimate Guide | Flo',
			url: 'https://flo.health/menstrual-cycle/lifestyle/hygiene-and-beauty/how-to-clean-your-vagina',
		},
		{
			title: 'Douching | Womens Health',
			url: 'https://www.womenshealth.gov/a-z-topics/douching',
		},
		{
			title: 'Here’s How to Actually Clean Your Vagina | self.com',
			url: 'https://www.self.com/story/best-way-to-clean-vagina',
		},
	];
	const VaginalContentParagraphs = [
		{
			sub_title: 'The Self-Cleaning Nature of the Vagina:',
			sub_content:
				'The vagina has a natural ability to cleanse itself through the production of discharge. This discharge helps to remove dead cells and bacteria, maintaining an acidic pH balance that protects against infections. It is important not to disrupt this natural process with harsh cleaning practices.',
		},
		{
			sub_title: 'External Hygiene Practices:',
			sub_content:
				'While the vagina itself does not require cleaning, the vulva, or the external genital area, should be kept clean. Gentle washing with warm water and mild, fragrance-free soap is sufficient. It is important to avoid douching, as this can disrupt the natural balance of bacteria and lead to infections.',
		},
		{
			sub_title: 'Avoiding Irritants:',
			sub_content:
				'Products such as scented soaps, lotions, and feminine sprays can irritate the delicate skin of the vulva and disrupt the natural bacterial balance. Wearing breathable cotton underwear and avoiding tight-fitting clothing can also help prevent irritation and maintain hygiene.',
		},
		{
			sub_title: 'Signs of Imbalance:',
			sub_content:
				'It is important to be aware of signs that may indicate a bacterial imbalance or infection. Symptoms such as unusual discharge, a strong odor, itching, or irritation should be addressed by a healthcare professional. These symptoms could be indicative of conditions such as bacterial vaginosis, yeast infections, or sexually transmitted infections (STIs)',
		},
		{
			sub_title: 'Menstrual Hygiene:',
			sub_content:
				'Proper menstrual hygiene is crucial for vaginal health. Changing sanitary products regularly, whether they are pads, tampons, or menstrual cups, helps to prevent infections. Practicing good hygiene during menstruation is important for overall health and comfort.',
		},
		{
			sub_title: 'Healthy Lifestyle Choices:',
			sub_content:
				'Maintaining a healthy lifestyle can positively impact vaginal health. This includes a balanced diet rich in probiotics, staying hydrated, practicing safe sex, and managing stress. Regular gynecological checkups are also important for monitoring and maintaining reproductive health.',
		},
	];
	return (
		<div className='w-full flex items-center justify-center'>
			<ServiceCard
				links={VarginalCleaningHepfulLink}
				title='Vaginal Cleaning'
				description='Maintaining Feminine Hygiene'
				first_line='Vaginal cleaning is an aspect of personal hygiene that focuses on
						maintaining the health and cleanliness of the vaginal area. It is
						important to understand that the vagina is self-cleaning, with its
						own balanced ecosystem of bacteria and natural secretions that keep
						it healthy.'
				content={VaginalContentParagraphs}
			/>
		</div>
	);
};

export default VaginalCleaning;
