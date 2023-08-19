import React from 'react';
import { styled } from 'styled-components';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<MainHeader>
				<NavLink to="/">
					<img src="./images/logo.png" alt="logo" className="logo" />
				</NavLink>
				<Navbar />
			</MainHeader>
		</>
	);
};

const MainHeader = styled.section`
	height: 10rem;
	background-color: ${({ theme }) => theme.colors.bg};
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 0 4rem;

	.logo {
		height: 5rem;
		max-width: 30%;
	}
`;

export default Header;
