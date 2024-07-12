import Hero from '@/app/(home)/components/Hero';
import OurMedicalServices from '@/app/(home)/components/HeroSection/OurMedicalServices';
import TrustYourHealthToUsCard from '@/app/(home)/components/HeroSection/TrustYourHealthToUsCard';
import OurBlogs from '@/app/(home)/components/HeroSection/OurBlogs';
import EmergencyHotlines from '@/app/(home)/components/HeroSection/EmergencyHotlines';

export default function Home() {
	return (
		<div className='w-full flex justify-center items-center gap-10'>
			<div className='max-w-screen-2xl w-11/12 gap-10 flex flex-col justify-center items-center min-h-screen'>
				<Hero />
				<OurMedicalServices />
				<TrustYourHealthToUsCard />
				<OurBlogs />
				<EmergencyHotlines />
			</div>
		</div>
	);
}
