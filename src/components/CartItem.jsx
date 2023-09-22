/* eslint-disable react/prop-types */
import FormatPrice from '../helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import {
	removeCartItem,
	decreaseQuantity,
	increaseQuantity,
} from '../reducers/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, name, image, color, price, quantity }) => {
	const dispatch = useDispatch();

	const setDecrease = () => {
		dispatch(decreaseQuantity({ id }));
	};
	const setIncrease = () => {
		dispatch(increaseQuantity({ id }));
	};

	const removeItem = (id) => {
		dispatch(
			removeCartItem({
				id: id,
			})
		);
	};
	return (
		<>
			<div className="cart_heading grid grid-five-column">
				<div className="cart-image--name">
					<div>
						<figure>
							<img src={image} alt={id} />
						</figure>
					</div>
					<div>
						<p>{name}</p>
						<div className="color-div">
							<p>Color: </p>
							<div
								className="color-style"
								style={{ backgroundColor: color, color: color }}
							></div>
						</div>
					</div>
				</div>
				{/* price   */}
				<div className="cart-hide">
					<p>
						<FormatPrice price={price} />
					</p>
				</div>
				{/* Quantity */}

				<CartAmountToggle
					quantity={quantity}
					setDecrease={setDecrease}
					setIncrease={setIncrease}
				/>

				{/* Subtotal */}
				<div className="cart-hide">
					<p>
						<FormatPrice price={price * quantity} />
					</p>
				</div>

				<div>
					<FaTrash className="remove_icon" onClick={() => removeItem(id)} />
				</div>
			</div>
		</>
	);
};

export default CartItem;
