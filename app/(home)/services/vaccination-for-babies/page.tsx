import React from 'react';
import ServiceCard from '@/app/(home)/services/components/ServiceCard';

const BabyVaccination = () => {
	const BabyVaccinationHelpfulLinks = [
		{
			title: 'Vaccines for Your Children | CDC',
			url: 'https://www.cdc.gov/vaccines/parents/why-vaccinate/vaccine-decision.html',
		},
		{
			title: 'Immunization Schedule for Babies | KidsHealth',
			url: 'https://kidshealth.org/en/parents/immunization-chart.html',
		},
		{
			title: 'Immunization Schedule for Infants and Children | WHO',
			url: 'https://www.who.int/news-room/fact-sheets/detail/immunization-coverage',
		},
		{
			title: 'Infant Immunization FAQs | HealthyChildren.org',
			url: 'https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Why-Immunize-Your-Child.aspx',
		},
		{
			title: 'Vaccination Schedule: What to Expect | WebMD',
			url: 'https://www.webmd.com/parenting/baby/vaccination-schedule-what-to-expect',
		},
	];

	const BabyVaccinationContentParagraphs = [
		{
			sub_title: 'Importance of Early Vaccination:',
			sub_content:
				'Vaccinating babies at an early age is crucial for protecting them against serious and potentially life-threatening diseases. Early immunization helps to build up immunity before children are exposed to dangerous illnesses.',
		},
		{
			sub_title: 'Recommended Immunization Schedule:',
			sub_content:
				'Following a recommended immunization schedule ensures that babies receive vaccinations at the optimal times for maximum protection. Healthcare providers can guide parents through the schedule, which typically includes vaccines for diseases such as hepatitis B, polio, and measles.',
		},
		{
			sub_title: 'Vaccine Safety and Monitoring:',
			sub_content:
				'Vaccines undergo rigorous testing and continuous monitoring to ensure their safety and efficacy. Parents can be assured that vaccines are safe for their babies, with side effects typically being mild and temporary.',
		},
		{
			sub_title: 'Common Vaccines for Infants:',
			sub_content:
				'Some common vaccines administered to infants include the DTaP vaccine (for diphtheria, tetanus, and pertussis), the MMR vaccine (for measles, mumps, and rubella), and the Hib vaccine (for Haemophilus influenzae type b). Each vaccine plays a vital role in preventing serious illnesses.',
		},
		{
			sub_title: 'Managing Vaccine Discomfort:',
			sub_content:
				'While vaccinations can cause discomfort, there are ways to manage it. Applying a cool, damp cloth to the injection site and providing extra cuddles can soothe a fussy baby. Most side effects, such as mild fever or soreness, resolve quickly.',
		},
		{
			sub_title: 'Long-term Benefits of Vaccination:',
			sub_content:
				'The long-term benefits of vaccination far outweigh the short-term discomfort. Vaccines not only protect the individual child but also contribute to herd immunity, protecting those who cannot be vaccinated due to medical reasons.',
		},
	];

	return (
		<div className='w-full flex items-center justify-center'>
			<ServiceCard
				links={BabyVaccinationHelpfulLinks}
				title='Baby Vaccination'
				description='Ensuring Early Immunization for Lifelong Health'
				first_line='Vaccination for babies is an essential service that ensures early
						immunization, protecting them from various serious diseases. Following
						a recommended schedule, these vaccines are crucial for building a
						strong immune system in the early stages of life.'
				content={BabyVaccinationContentParagraphs}
			/>
		</div>
	);
};

export default BabyVaccination;
