import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		filter_products: [],
		all_products: [],
	},
	reducers: {
		loadFilterProds(state, action) {
			let { products } = action.payload;
			state.filter_products = [...products];
			state.all_products = [...products];
		},
	},
});

export const { loadFilterProds } = filterSlice.actions;

export default filterSlice.reducer;
