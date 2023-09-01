// import React from 'react';
import Prod from './Prod';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const ProductList = () => {
	const { products, isLoading } = useSelector((store) => {
		return store.products;
	});
	console.log(products);
	return (
		<Wrapper>
			<div className="container">
				<div className="grid grid-three-column">
					{products.map((curr) => {
						return <Prod key={curr.id} {...curr} />;
					})}
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 9rem 0;
	background-color: ${({ theme }) => theme.colors.bg};

	.container {
		max-width: 120rem;
	}
`;

export default ProductList;
