import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'singleProd',
	initialState: {
		cart: [],
		total_item: '',
		total_quantity: '',
		shipping_fee: 500,
	},
	reducers: {
		addToCart(state, action) {
			let { id, color, quantity, product } = action.payload;
			let cartProduct = {
				id: id + color,
				name: product.name,
				color,
				quantity,
				image: product.image[0].url,
				price: product.price,
				max: product.stock,
			};
			state.cart = [...state.cart, cartProduct];
			// state.cart = state.cart.concat(cartProduct);
		},
		removeCartItem(state, action) {
			let { id } = action.payload;
			let updatedCart = state.cart.filter((curr) => curr.id !== id);
			state.cart = updatedCart;
		},
	},
});

export const { addToCart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
