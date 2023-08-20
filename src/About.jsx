import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import { useDispatch } from 'react-redux';
import { aboutHero } from './reducers/slices/heroSlice';
// import Services from './Services';
// import Contact from './Contact';

const About = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			aboutHero({
				name: 'About Page',
				image: '',
			})
		);
	}, [dispatch]);

	return (
		<>
			<HeroSection />
			{/* <Services />
			<Contact /> */}
		</>
	);
};

export default About;
