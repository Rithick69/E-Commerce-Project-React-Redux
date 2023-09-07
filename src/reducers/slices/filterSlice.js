import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		filter_products: [],
		all_products: [],
		grid_view: true,
	},
	reducers: {
		loadFilterProds(state, action) {
			let { products } = action.payload;
			state.filter_products = [...products];
			state.all_products = [...products];
		},
		setView(state, action) {
			state.grid_view = action.payload.grid_view;
		},
	},
});

export const { loadFilterProds, setView } = filterSlice.actions;

export default filterSlice.reducer;
