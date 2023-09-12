import { styled } from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
	setView,
	getSortVal,
	sortingProducts,
} from '../reducers/slices/filterSlice';
import { useEffect } from 'react';

const Sort = () => {
	const dispatch = useDispatch();
	const { grid_view, filter_products, sorting_val } = useSelector((store) => {
		return store.filterProd;
	});

	const sorting = (e) => {
		let sort_value = e.target.value;
		dispatch(
			getSortVal({
				sortVal: sort_value,
			})
		);
	};

	useEffect(() => {
		dispatch(sortingProducts());
	}, [sorting_val, dispatch]);

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
						onClick={(e) => sorting(e)}
					>
						<option value="#" selected disabled hidden>
							Sort By
						</option>
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
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

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
