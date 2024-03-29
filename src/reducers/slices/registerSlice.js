import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:5000/auth/register';

export const signUp = createAsyncThunk('signUp', async (body) => {
	console.log('Hi', JSON.stringify(body));
	const res = await axios.post(API, JSON.stringify(body), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const data = await res.data;

	return data;
});

const registerSlice = createSlice({
	name: 'signUp',
	initialState: {
		isLoading: false,
		fName: '',
		lName: '',
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
		builder.addCase(signUp.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(signUp.fulfilled, (state, action) => {
			state.isLoading = false;
			state.isError = false;

			const { username, accessToken, refreshToken, msg, userId, fName, lName } =
				action.payload;
			state.username = username;
			state.fName = fName;
			state.lName = lName;
			state.userId = userId;
			state.token = accessToken;
			state.refreshToken = refreshToken;
			state.msg = msg;
		});
		builder.addCase(signUp.rejected, (state, action) => {
			state.isLoading = false;
			state.isError = true;
			state.error = action.payload.error;
			state.msg = 'Failed to log in.';
			console.log('Error', action.payload);
		});
	},
});

export default registerSlice.reducer;
