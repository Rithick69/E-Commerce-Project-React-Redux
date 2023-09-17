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
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
