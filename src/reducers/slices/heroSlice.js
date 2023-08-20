import { createSlice } from '@reduxjs/toolkit';
// import { clearAll } from '../actions';
// import { mockData } from '../../api';

// const mock = true;

// export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
// 	const res = await fetch('https://jsonplaceholder.typicode.com/todos');
// 	const data = await res.json();
// 	return data;
// });

const userSlice = createSlice({
	name: 'user',
	initialState: {
		name: '',
		image: '',
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
	// extraReducers(builder) {
	// 	// First param is action type and 2nd param is the reducer.
	// 	builder.addCase(clearAll, (state) => {
	// 		state.data = [];
	// 	});
	// },
});

export const { homeHero, aboutHero } = userSlice.actions;

export default userSlice.reducer;
