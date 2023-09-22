import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'singleProd',
	initialState: {
		cart: [],
		total_item: '',
		total_quantity: '',
		shipping_fee: 500,
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
		},
	},
});

export const {
	addToCart,
	removeCartItem,
	clearCart,
	decreaseQuantity,
	increaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
