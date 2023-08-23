import { useSelector } from 'react-redux';

const Products = () => {
	const { products, isLoading } = useSelector((store) => {
		return store.products;
	});

	if (!isLoading) {
		return (
			<div>
				<p>Data: {isLoading}</p>
				{products.map((curr, idx) => {
					return <p key={idx}>{curr.name}</p>;
				})}
			</div>
		);
	}
};

export default Products;
