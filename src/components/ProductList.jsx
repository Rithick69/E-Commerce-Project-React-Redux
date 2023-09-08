// import React from 'react';
import { useSelector } from 'react-redux';
import GridView from './GridView';
import ListView from './ListView';
// import GridView from './GridView';

const ProductList = () => {
	const { isLoading } = useSelector((store) => {
		return store.products;
	});

	const { filter_products, grid_view } = useSelector((store) => {
		return store.filterProd;
	});

	if (isLoading) {
		return <div>Loading .....</div>;
	}
	return (
		<>
			{grid_view ? (
				<GridView products={filter_products} />
			) : (
				<ListView products={filter_products} />
			)}
		</>
	);
	// else if (setGridView) return <GridView products={filter_products} />;
};

export default ProductList;
