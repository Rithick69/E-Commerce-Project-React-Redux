import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:5000/auth/login';

export const signinFunc = createAsyncThunk('signinFunc', async (body) => {
	console.log('Hi', JSON.stringify(body));
	const res = await axios.post(API, JSON.stringify(body), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await res.data;

	return data;
});

const authSlice = createSlice({
	name: 'signIn',
	initialState: {
		isLoading: false,
		username: '',
		msg: '',
		isError: false,
		token: '',
		refreshToken: '',
		error: '',
		userId: '',
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(signinFunc.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(signinFunc.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;

			const { username, accessToken, refreshToken, msg, userId } =
				action.payload;
			state.username = username;
			state.userId = userId;
			state.token = accessToken;
			state.refreshToken = refreshToken;
			state.msg = msg;
		});
		builder.addCase(signinFunc.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.error = action.payload.error;
			state.msg = 'Failed to log in.';
			console.log('Error', action.payload);
		});
	},
});

export default authSlice.reducer;
