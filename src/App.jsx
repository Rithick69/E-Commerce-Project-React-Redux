import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Products from './views/Products';
import Product from './views/Product';
import Cart from './views/Cart';
import Error from './views/Error';
import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './reducers/slices/productsSlice';
import Login from './views/Login';
import Registration from './views/Register';

const App = () => {
	const theme = {
		colors: {
			heading: 'rgb(24 24 29)',
			text: 'rgba(29 ,29, 29, .8)',
			white: '#fff',
			black: ' #212529',
			helper: '#8490ff',

			bg: '#F6F8FA',
			footer_bg: '#0a1435',
			btn: 'rgb(98 84 243)',
			border: 'rgba(98, 84, 243, 0.5)',
			hr: '#ffffff',
			gradient:
				'linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)',
			shadow:
				'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
			shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
		},
		media: {
			mobile: '768px',
			tab: '998px',
		},
	};

	const { token, refreshToken } = useSelector((store) => {
		return store.signIn;
	});

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	useEffect(() => {
		if (token && refreshToken) {
			sessionStorage.setItem('token', token);
			sessionStorage.setItem('refreshToken', refreshToken);
		}
	}, [token, refreshToken]);

	return (
		<>
			<ThemeProvider theme={theme}>
				<Router>
					<GlobalStyle />
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/about" element={<About />} />
						<Route path="/products" element={<Products />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/login" element={<Login />} />
						<Route path="/registration" element={<Registration />} />
						<Route path="*" element={<Error />} />
					</Routes>
					<Footer />
				</Router>
			</ThemeProvider>
		</>
	);
};

export default App;
