// import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import Sort from '../components/Sort';
import FilterSection from '../components/FilterSection';
import ProductList from '../components/ProductList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFilterProds } from '../reducers/slices/filterSlice';

const Products = () => {
	// const { products, isLoading } = useSelector((store) => {
	// 	return store.products;
	// });

	// if (!isLoading) {

	const { products } = useSelector((store) => {
		return store.products;
	});

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			loadFilterProds({
				products,
			})
		);
	}, [products, dispatch]);
	return (
		<Wrapper>
			<div className="container grid grid-filter-column">
				<div>
					<FilterSection />
				</div>
				<section className="product-view--sort">
					<div className="sort-filter">
						<Sort />
					</div>
					<div className="main-product">
						<ProductList />
					</div>
				</section>
			</div>
		</Wrapper>
	);
	// }
};

const Wrapper = styled.section`
	.grid-filter-column {
		grid-template-columns: 0.2fr 1fr;
	}

	@media (max-width: ${({ theme }) => theme.media.mobile}) {
		.grid-filter-column {
			grid-template-columns: 1fr;
		}
	}
`;

export default Products;
