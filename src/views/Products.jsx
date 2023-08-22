import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../reducers/slices/productsSlice';
const Products = () => {
	const dispatch = useDispatch();

	const { data, isLoading } = useSelector((store) => {
		return store.products;
	});

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	if (!isLoading) {
		return (
			<div>
				<p>Data: {isLoading}</p>
				{data.map((curr, idx) => {
					return <p key={idx}>{curr.name}</p>;
				})}
			</div>
		);
	}
};

export default Products;
