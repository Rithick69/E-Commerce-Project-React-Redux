import { styled } from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setView, getSortVal } from '../reducers/slices/filterSlice';

const Sort = () => {
	const dispatch = useDispatch();
	const { grid_view, filter_products } = useSelector((store) => {
		return store.filterProd;
	});

	const sorting = () => {
		let el = document.getElementById('sort');

		let sort_value = el.options[el.selectedIndex].value;
		console.log('hi', sort_value);
		dispatch(
			getSortVal({
				sortVal: 'lowest',
			})
		);
	};
	return (
		<Wrapper>
			<div className="sorting-list--grid">
				<button
					className={grid_view ? 'sort-btn active' : 'sort-btn'}
					onClick={() => dispatch(setView({ grid_view: true }))}
				>
					<BsFillGridFill className="icon" />
				</button>
				<button
					className={grid_view ? 'sort-btn' : 'sort-btn active'}
					onClick={() => dispatch(setView({ grid_view: false }))}
				>
					<BsList className="icon" />
				</button>
			</div>
			<div className="product-data">
				<p>{`${filter_products.length} total products`}</p>
			</div>

			<div className="sort-selection">
				<form action="#">
					<label htmlFor="sort"></label>
					<select
						className="sort-selection--style"
						name="sort"
						id="sort"
						onClick={() => sorting}
					>
						<option className="sort-select--option" value="lowest">
							Price(lowest)
						</option>
						<option value="#" disabled></option>
						<option className="sort-select--option" value="highest">
							Price(highest)
						</option>
						<option value="#" disabled></option>
						<option className="sort-select--option" value="a-z">
							Price(a-z)
						</option>
						<option value="#" disabled></option>
						<option className="sort-select--option" value="z-a">
							Price(z-a)
						</option>
					</select>
				</form>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-top: 5rem;

	.sorting-list--grid {
		display: flex;
		gap: 2rem;

		.sort-btn {
			padding: 0.8rem 1rem;
			border: none;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}

		.icon {
			font-size: 1.6rem;
		}
		.active {
			background-color: ${({ theme }) => theme.colors.black};
			color: #fff;
		}
	}

	.sort-selection .sort-selection--style {
		padding: 0.5rem;
		cursor: pointer;
		background-color: #fff;
		border: 1px solid black;

		&:focus {
			border: 2px solid black;
		}

		.sort-select--option {
			padding: 0.5rem 0;
			cursor: pointer;
			height: 2rem;
			padding: 10px;
		}
	}
`;

export default Sort;
