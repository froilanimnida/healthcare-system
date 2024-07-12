import React from 'react';
import ServiceCard from '@/app/(home)/services/components/ServiceCard';

const PrenatalPage = () => {
	const PrenataHelpfulLinks = [
		{
			title: 'Prenatal Care | Planned Parenthood',
			url: 'https://www.plannedparenthood.org/learn/pregnancy/prenatal-care',
		},
		{
			title: 'What is prenatal care and why is it important?',
			url: 'https://www.nichd.nih.gov/health/topics/pregnancy/conditioninfo/prenatal-care',
		},
		{
			title: 'Prenatal Care | womenshealth.gov',
			url: 'https://www.womenshealth.gov/a-z-topics/prenatal-care',
		},
		{
			title: 'Prenatal Care | MedlinePlus',
			url: 'https://medlineplus.gov/prenatalcare.html',
		},
	];

	const PrenatalContent = [
		{
			sub_title: 'Initial Visits and Assessments:',
			sub_content:
				'During the first prenatal visit, a thorough health assessment is conducted. This includes a detailed medical history, a physical exam, and often ultrasound imaging to confirm the pregnancy and estimate the due date. Routine blood tests and screenings are also performed to check for conditions such as gestational diabetes, anemia, and infectious diseases.',
		},
		{
			sub_title: 'Ongoing Monitoring:',
			sub_content:
				'Regular prenatal checkups are scheduled throughout the pregnancy, typically on a monthly basis during the first two trimesters, increasing in frequency during the third trimester. These visits include monitoring the baby&apos;s growth, heart rate, and position, as well as the mother’s blood pressure, weight gain, and overall health.',
		},
		{
			sub_title: 'Nutrition and Lifestyle Guidance:',
			sub_content:
				'Prenatal care providers offer crucial advice on maintaining a balanced diet rich in essential nutrients like folic acid, iron, calcium, and omega-3 fatty acids. They also guide expectant mothers on safe physical activities and lifestyle choices, such as avoiding alcohol, tobacco, and certain medications.',
		},
		{
			sub_title: 'Education and Support:',
			sub_content:
				'Prenatal visits often include education on what to expect during each stage of pregnancy, labor, and delivery. Support is provided for common pregnancy symptoms such as morning sickness, back pain, and fatigue. Mental health support is also a vital component, addressing any anxiety or depression that may arise during pregnancy.',
		},
		{
			sub_title: 'Preparing for Birth:',
			sub_content:
				'As the due date approaches, prenatal care involves creating a birth plan and discussing pain management options for labor. It may also include information on breastfeeding and newborn care, ensuring that expectant mothers feel prepared and confident for the arrival of their baby.',
		},
		{
			sub_title: 'Specialized Care:',
			sub_content:
				' For high-risk pregnancies, which may involve preexisting medical conditions, multiple pregnancies (twins, triplets, etc.), or pregnancy complications, specialized prenatal care is provided. This may include more frequent monitoring, additional testing, and consultations with specialists.',
		},
		{
			sub_title: '',
			sub_content: '',
		},
	];
	return (
		<div className='w-full flex items-center justify-center'>
			<ServiceCard
				title='Prenatal Services'
				description='Comprehensive Care for Expectant Mothers'
				first_line='Prenatal care is an essential aspect of ensuring a healthy pregnancy
						and a safe delivery for both mother and baby. It encompasses a
						variety of health services that are provided by healthcare
						professionals throughout the pregnancy journey. This care aims to
						monitor and support the health of the pregnant individual, as well
						as the developing fetus.'
				content={PrenatalContent}
				links={PrenataHelpfulLinks}
			/>
		</div>
	);
};

export default PrenatalPage;
