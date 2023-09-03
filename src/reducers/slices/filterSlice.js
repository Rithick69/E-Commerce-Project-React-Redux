import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: '',
		image: '',
		filter_products: [],
		all_products: [],
	},
	reducers: {
		homeHero(state, action) {
			let { name, image } = action.payload;
			state.name = name;
			state.image = image;
		},
		aboutHero(state, action) {
			let { name, image } = action.payload;
			state.name = name;
			state.image = image;
		},
	},
});

export const { homeHero, aboutHero } = userSlice.actions;

export default userSlice.reducer;
