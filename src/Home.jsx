import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import { useDispatch } from 'react-redux';
import { homeHero } from './reducers/slices/heroSlice';
import hero from './assets/images/hero.jpg';
import Services from './components/Services';
import Trusted from './components/Trusted';

const Home = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			homeHero({
				name: 'Ecom Home Page',
				image: `${hero}`,
			})
		);
	}, [dispatch]);

	return (
		<>
			<HeroSection />
			<Services />
			<Trusted />
		</>
	);
};

export default Home;
