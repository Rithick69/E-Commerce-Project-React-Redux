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
		setGridView(state) {
			state.grid_view = true;
		},
	},
});

export const { loadFilterProds, setGridView } = filterSlice.actions;

export default filterSlice.reducer;
