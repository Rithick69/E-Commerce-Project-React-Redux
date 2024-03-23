// For store setup we will use configureStore.
// configureStore accepts a single configuration object parameter.

import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import heroSlice from './reducers/slices/heroSlice';
import productsSlice from './reducers/slices/productsSlice';
import singleProdSlice from './reducers/slices/singleProdSlice';
import filterSlice from './reducers/slices/filterSlice';
import cartSlice from './reducers/slices/cartSlice';
import authSlice from './reducers/slices/authSlice';

const persistConfig = {
	key: 'root',
	storage,
};

const rootReducer = combineReducers({
	hero: heroSlice,
	products: productsSlice,
	singleProd: singleProdSlice,
	filterProd: filterSlice,
	cartProd: cartSlice,
	authUser: authSlice,
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
