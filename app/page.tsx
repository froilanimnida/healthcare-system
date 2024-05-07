import Image from 'next/image';
import NavigationBarLandingPage from './components/NavigationBarLandingPage';
import Hero from './ui/Hero';
import FooterHero from './ui/FooterHero';
import OurMedicalServices from './ui/HeroSection/OurMedicalServices';
import TrustYourHealthToUsCard from './ui/HeroSection/TrustYourHealthToUsCard';
import OurBlogs from './ui/HeroSection/OurBlogs';

export default function Home() {
	return (
		<div className='w-full flex flex-col justify-center items-center gap-10 max-w-7xl'>
			<NavigationBarLandingPage />
			<Hero />
			<OurMedicalServices />
			<TrustYourHealthToUsCard />
			<OurBlogs />
			<FooterHero />
		</div>
	);
}
