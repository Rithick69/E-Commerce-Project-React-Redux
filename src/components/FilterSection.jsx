import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
	updateFilter,
	renderFilterProducts,
	clearFiltersRed,
} from '../reducers/slices/filterSlice';
import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from '../helpers/FormatPrice';
import { Button } from '../styles/Button';

const FilterSection = () => {
	const {
		filters: {
			searchText,
			category,
			company,
			color,
			price,
			maxPrice,
			minPrice,
		},
		all_products,
	} = useSelector((store) => {
		return store.filterProd;
	});

	const dispatch = useDispatch();

	const updateFilterValue = (e) => {
		let { name, value } = e.target;
		dispatch(
			updateFilter({
				name: name,
				value: value,
			})
		);
	};

	const getUniqueData = (data, prop) => {
		let newVal = data.map((curr) => {
			return curr[prop];
		});

		if (prop === 'colors') {
			// Union
			// return (newVal = ['All', ...new Set([].concat(...newVal))]);
			// We can also use Flat method().
			newVal = newVal.flat();
		}

		newVal = ['All', ...new Set(newVal)];
		return newVal;
	};

	const categoryData = getUniqueData(all_products, 'category');
	const companyData = getUniqueData(all_products, 'company');
	const colorsData = getUniqueData(all_products, 'colors');

	const clearFilters = () => {
		dispatch(clearFiltersRed());
	};

	useEffect(() => {
		dispatch(renderFilterProducts());
	}, [searchText, category, company, color, price, dispatch]);

	return (
		<Wrapper>
			<div className="filter-search">
				<form onSubmit={(e) => e.preventDefault()}>
					<input
						type="text"
						name="searchText"
						value={searchText}
						placeholder="Search"
						onChange={updateFilterValue}
					/>
				</form>
			</div>
			<div className="filter-category">
				<h3>Category</h3>
				<div>
					{categoryData.map((curr, idx) => {
						return (
							<button
								type="button"
								name="category"
								key={idx}
								value={curr}
								className={curr === category ? 'active' : ''}
								onClick={updateFilterValue}
							>
								{curr}
							</button>
						);
					})}
				</div>
			</div>
			<div className="filter-company">
				<h3>Company</h3>
				<div className="filter-company--selection">
					<form action="#">
						<select
							name="company"
							id="company"
							className="filter-company--selection--style"
							onChange={updateFilterValue}
						>
							{companyData.map((curElem, index) => {
								return (
									<option key={index} value={curElem}>
										{curElem.toUpperCase()}
									</option>
								);
							})}
						</select>
					</form>
				</div>
			</div>
			<div className="filter-colors colors">
				<h3>Colors</h3>
				<div className="filter-color-style">
					{colorsData.map((curr, idx) => {
						if (curr.toLowerCase() === 'all') {
							return (
								<button
									key={idx}
									type="button"
									name="color"
									className="color-all--style"
									value={curr}
									onClick={updateFilterValue}
								>
									All
								</button>
							);
						}
						return (
							<button
								key={idx}
								type="button"
								name="color"
								className={color === curr ? 'btnStyle active' : 'btnStyle'}
								style={{ backgroundColor: curr }}
								value={curr}
								onClick={updateFilterValue}
							>
								{color === curr && <FaCheck className="checkStyle" />}
							</button>
						);
					})}
				</div>
			</div>
			<div className="filter_price">
				<h3>Price</h3>
				<p>
					<FormatPrice price={price} />
				</p>
				<input
					type="range"
					name="price"
					min={minPrice}
					max={maxPrice}
					value={price}
					onChange={updateFilterValue}
				/>
			</div>
			<div className="filter-clear">
				<Button className="btn" onClick={clearFilters}>
					clear filters
				</Button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	padding: 5rem 0;
	display: flex;
	flex-direction: column;
	gap: 3rem;

	h3 {
		padding: 2rem 0;
		font-size: bold;
	}

	.filter-search {
		input {
			padding: 0.6rem 1rem;
			width: 80%;
		}

		input,
		textarea {
			border: 1px solid black;
		}
	}

	.filter-category {
		div {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 1.4rem;

			button {
				border: none;
				background-color: ${({ theme }) => theme.colors.white};
				text-transform: capitalize;
				cursor: pointer;

				&:hover {
					color: ${({ theme }) => theme.colors.btn};
				}
			}

			.active {
				border-bottom: 1px solid #000;
			}
		}
	}

	.filter-company--selection .filter-company--selection--style {
		padding: 0.5rem;
		cursor: pointer;
		background-color: #fff;
		border: 1px solid black;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

		&:focus {
			border: 2px solid black;
		}

		.filter-company--select {
			padding: 0.3rem 1.2rem;
			font-size: 1.6rem;
			color: ${({ theme }) => theme.colors.text};
			text-transform: capitalize;
		}
	}

	.filter-color-style {
		display: flex;
		justify-content: center;
	}

	.color-all--style {
		background-color: transparent;
		text-transform: capitalize;
		border: none;
		cursor: pointer;
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
		font-size: 1rem;
		color: #fff;
	}

	.filter_price {
		input {
			margin: 0.5rem 0 1rem 0;
			padding: 0;
			box-shadow: none;
			cursor: pointer;
		}
	}

	.filter-shipping {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.filter-clear .btn {
		background-color: #ec7063;
		color: #000;
	}
`;

export default FilterSection;
