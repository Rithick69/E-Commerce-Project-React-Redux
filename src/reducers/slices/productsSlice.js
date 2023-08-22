import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'https://api.pujakaitem.com/api/products';

export const fetchData = createAsyncThunk('fetchData', async () => {
	try {
		const res = await axios.get(API);
		const data = await res.data;
		return data;
	} catch (error) {
		console.log(error);
	}
});

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		isLoading: false,
		data: [],
		isError: false,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchData.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchData.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			console.log('Error', action.payload);
		});
	},
});

// export const { addUser, removeUser } = userSlice.actions;

export default productsSlice.reducer;
