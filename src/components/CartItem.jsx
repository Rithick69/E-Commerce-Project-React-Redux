/* eslint-disable react/prop-types */
import { FormatPrice } from '../helpers/FormatPrice';

const CartItem = ({ id, name, image, color, price, quantity }) => {
	return (
		<>
			<div className="cart_heading grid grid-five-column">
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
				{/* price   */}
				<div className="cart-hide">
					<p>
						<FormatPrice price={price} />
					</p>
				</div>
			</div>
		</>
	);
};

export default CartItem;
