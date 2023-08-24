// import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProd } from '../reducers/slices/singleProdSlice';

const URL = 'https://api.pujakaitem.com/api/products';

const Product = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProd(`${URL}?id=${id}`));
	}, [id, dispatch]);

	const { data } = useSelector((store) => {
		return store.singleProd;
	});

	const {
		id: alias,
		name,
		company,
		price,
		description,
		category,
		stock,
		stars,
		reviews,
	} = data;

	return (
		<Wrapper>
			<h1>Product name: {name}</h1>
		</Wrapper>
	);
};

const Wrapper = styled.section``;

export default Product;
