import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'singleProd',
	initialState: {
		cart: [],
		total_items: 0,
		total_price: 0,
		shipping_fee: 50000,
	},
	reducers: {
		addToCart(state, action) {
			let { id, color, quantity, product } = action.payload;
			let cartProduct = {
				id: id + color,
				name: product.name,
				color,
				quantity,
				image: product.image[0].url,
				price: product.price,
				max: product.stock,
			};

			let isInCart = state.cart.find((curr) => curr.id === cartProduct.id);

			if (!isInCart) {
				state.cart = [...state.cart, cartProduct];
				// state.cart = state.cart.concat(cartProduct);
			} else {
				let updatedCart = state.cart.map((curr) => {
					if (curr.id === cartProduct.id) {
						let newQuant = curr.quantity + cartProduct.quantity;
						if (newQuant >= curr.max) {
							newQuant = curr.quantity;
						}
						return {
							...curr,
							quantity: newQuant,
						};
					}
					return curr;
				});
				state.cart = updatedCart;
			}
		},
		removeCartItem(state, action) {
			let { id } = action.payload;
			let updatedCart = state.cart.filter((curr) => curr.id !== id);
			state.cart = updatedCart;
		},
		decreaseQuantity(state, action) {
			let { id } = action.payload;
			let updatedCart = state.cart.map((curr) => {
				if (curr.id === id) {
					let newQuant;
					if (curr.quantity > 1) {
						newQuant = curr.quantity - 1;
					} else {
						newQuant = 1;
					}
					return {
						...curr,
						quantity: newQuant,
					};
				}
				return curr;
			});
			state.cart = updatedCart;
		},
		increaseQuantity(state, action) {
			let { id } = action.payload;
			let updatedCart = state.cart.map((curr) => {
				if (curr.id === id) {
					let newQuant;
					if (curr.quantity < curr.max) {
						newQuant = curr.quantity + 1;
					} else {
						newQuant = curr.max;
					}
					return {
						...curr,
						quantity: newQuant,
					};
				}
				return curr;
			});
			state.cart = updatedCart;
		},
		clearCart(state) {
			state.cart = [];
			state.total_items = 0;
			state.total_price = 0;
		},
		cartTotalItems(state){
			let {totalPrice, totalItems} = state.cart.reduce((accum, curr) => {

				let { quantity, price } = curr;

				accum.totalItems += quantity;
				accum.totalPrice += price * quantity;

				return accum;
			}, {
				totalPrice: 0,
				totalItems: 0
			});

			state.total_price = totalPrice;
			state.total_items = totalItems;
		}
	},
});

export const {
	addToCart,
	removeCartItem,
	clearCart,
	decreaseQuantity,
	increaseQuantity,
	cartTotalItems
} = cartSlice.actions;

export default cartSlice.reducer;
