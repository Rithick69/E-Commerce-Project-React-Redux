import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const API = 'https://api.pujakaitem.com/api/products';
const API = 'http://localhost:5000/api/products';

export const fetchData = createAsyncThunk('fetchData', async () => {
	const res = await axios.get(API);
	const data = await res.data;
	return data;
});

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		isLoading: false,
		products: [],
		featured: [],
		isError: false,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchData.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.products = action.payload;

			const featureData = action.payload.filter((curr) => {
				return curr.featured === true;
			});

			state.featured = featureData;
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.products = [];
			state.featured = [];
			console.log('Error', action.payload);
		});
	},
});

// export const { addUser, removeUser } = userSlice.actions;

export default productsSlice.reducer;
