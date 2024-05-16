import Prenatal from '@/public/images/services-image/prenatal-care.webp';
import VaginalCleaning from '@/public/images/services-image/vaginal-cleaning.webp';
import Dental from '@/public/images/services-image/dental.webp';
import TBDots from '@/public/images/services-image/tb-dots.webp';
import HIVTesting from '@/public/images/services-image/hiv-testing.webp';
import Maintenance from '@/public/images/services-image/maintenance.webp';
import Vaccination from '@/public/images/services-image/vaccine-for-babies.webp';
import type { StaticImageData } from 'next/image';
export interface Services {
	name: string;
	shortDescription: string;
	coverImage: StaticImageData;
}
export const ServicesData: Services[] = [
	{
		name: 'Prenatal',
		shortDescription:
			'Prenatal care is the act of having a healthy lifestyle while you are pregnant and attending regular checkups with a doctor or midwife throughout the duration of your pregnancy.',
		coverImage: Prenatal,
	},
	{
		name: 'Vaginal Cleaning',
		shortDescription:
			'Vaginal cleansing is the process of cleaning the vaginal area to maintain a healthy vaginal environment.',
		coverImage: VaginalCleaning,
	},
	{
		name: 'Dental',
		shortDescription:
			'Dental care involves the maintenance of healthy teeth and may refer to oral hygiene, dentistry, and oral surgery.',
		coverImage: Dental,
	},
	{
		name: 'Vaccination for Babies',
		shortDescription:
			'Vaccination for babies involves giving them vaccines to protect them from various diseases.',
		coverImage: Vaccination,
	},
	{
		name: 'Maintenance for those in need',
		shortDescription:
			'Maintenance for those in need involves providing necessary care and support to those who are in need.',
		coverImage: Maintenance,
	},
	{
		name: 'HIV Testing',
		shortDescription:
			'HIV testing involves testing a person for the presence of HIV, the virus that causes AIDS.',
		coverImage: HIVTesting,
	},
	{
		name: 'TB Dots',
		shortDescription:
			'TB Dots is a strategy used to ensure that people with tuberculosis take their medicine regularly and complete their treatment.',
		coverImage: TBDots,
	},
];
