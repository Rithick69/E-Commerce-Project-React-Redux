// For store setup we will use configureStore.
// configureStore accepts a single configuration object parameter.

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import heroSlice from './reducers/slices/heroSlice';

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	users: heroSlice,
	// We can add more slices here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	// Here reducer will act as combined reducer where we will switch between
	// slices to access the reducers that we want to work with.
	reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
