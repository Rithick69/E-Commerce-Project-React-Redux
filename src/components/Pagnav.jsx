import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

// eslint-disable-next-line react/prop-types
const Pagnav = ({ title }) => {
	return (
		<Wrapper>
			<NavLink to="/">Home</NavLink>/{title}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	height: 10rem;
	background-color: ${({ theme }) => theme.colors.bg};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	font-size: 3.2rem;
	padding-left: 1.2rem;

	a {
		font-size: 3.2rem;
	}
`;

export default Pagnav;
