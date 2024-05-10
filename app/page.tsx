import Hero from './ui/Hero';
import FooterHero from './ui/FooterHero';
import OurMedicalServices from './ui/HeroSection/OurMedicalServices';
import TrustYourHealthToUsCard from './ui/HeroSection/TrustYourHealthToUsCard';
import OurBlogs from './ui/HeroSection/OurBlogs';
import EmergencyHotlines from './ui/HeroSection/EmergencyHotlines';
import Landing from './ui/Containers/Landing';

export default function Home() {
	return (
		<Landing>
			<Hero />
			<OurMedicalServices />
			<TrustYourHealthToUsCard />
			<OurBlogs />
			<EmergencyHotlines />
		</Landing>
	);
}
