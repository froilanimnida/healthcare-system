import Image from 'next/image';
import NavigationBarLandingPage from './components/NavigationBarLandingPage';
import Hero from './ui/Hero';

export default function Home() {
	return (
		<div className='w-full flex flex-col justify-center items-center gap-10 max-w-7xl'>
			<NavigationBarLandingPage />
			<Hero />
		</div>
	);
}
