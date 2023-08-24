import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProd = createAsyncThunk('fetchProd', async (url) => {
	const res = await axios.get(url);
	const data = await res.data;
	return data;
});

const singleProdSlice = createSlice({
	name: 'singleProd',
	initialState: {
		isLoading: false,
		data: {},
		isError: false,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchProd.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchProd.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;
			state.data = action.payload;
		});
		builder.addCase(fetchProd.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.data = {};
			console.log('Error', action.payload);
		});
	},
});

export default singleProdSlice.reducer;
