/* eslint-disable react/prop-types */
import { styled } from 'styled-components';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';

const AddToCart = ({ prods }) => {
	const { id, stock, colors } = prods;

	const [color, setColor] = useState(colors[0]);
	const [quantity, setQuantity] = useState(1);

	const setDecrease = () => {
		quantity > 1 ? setQuantity((q) => q - 1) : setQuantity(1);
	};
	const setIncrease = () => {
		quantity < stock ? setQuantity((q) => q + 1) : setQuantity(stock);
	};

	return (
		<Wrapper>
			<div className="colors">
				<p>
					Colors:
					{colors.map((curr, idx) => {
						return (
							<button
								key={idx}
								style={{ backgroundColor: curr }}
								className={color === curr ? 'btnStyle active' : 'btnStyle'}
								onClick={() => setColor(curr)}
							>
								{color === curr && <FaCheck className="checkStyle" />}
							</button>
						);
					})}
				</p>
			</div>

			{/* add to cart */}

			<CartAmountToggle
				quantity={quantity}
				setDecrease={setDecrease}
				setIncrease={setIncrease}
			/>
			<NavLink>Add to Cart</NavLink>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.colors p {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.btnStyle {
		width: 2rem;
		height: 2rem;
		background-color: #000;
		border-radius: 50%;
		margin-left: 1rem;
		border: none;
		outline: none;
		opacity: 0.5;
		cursor: pointer;

		&:hover {
			opacity: 1;
		}
	}

	.active {
		opacity: 1;
	}

	.checkStyle {
		/* font-size: 1rem; */
		color: #fff;
	}

	/* we can use it as a global one too  */
	.amount-toggle {
		margin-top: 3rem;
		margin-bottom: 1rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 1.4rem;

		button {
			border: none;
			background-color: #fff;
			cursor: pointer;
		}

		.amount-style {
			font-size: 2.4rem;
			color: ${({ theme }) => theme.colors.btn};
		}
	}
`;

export default AddToCart;