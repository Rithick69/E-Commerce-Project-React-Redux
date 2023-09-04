// import React from 'react';
import { useSelector } from 'react-redux';
import GridView from './GridView';
// import GridView from './GridView';

const ProductList = () => {
	const { isLoading } = useSelector((store) => {
		return store.products;
	});

	const { filter_products, setGridView } = useSelector((store) => {
		return store.filterProd;
	});

	// console.log('filter', filter_products);

	if (isLoading) {
		return <div>Loading .....</div>;
	} else if (setGridView) return <GridView products={filter_products} />;
};

export default ProductList;
