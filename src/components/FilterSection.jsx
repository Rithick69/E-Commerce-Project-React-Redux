import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
	updateFilter,
	renderFilterProducts,
} from '../reducers/slices/filterSlice';
import { useEffect } from 'react';

const FilterSection = () => {
	const {
		filters: { searchText, category },
		all_products,
	} = useSelector((store) => {
		return store.filterProd;
	});

	const dispatch = useDispatch();

	const updateFilterValue = (e) => {
		let { name, value } = e.target;
		console.log(name);
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

		newVal = ['All', ...new Set(newVal)];
		return newVal;
	};

	const categoryData = getUniqueData(all_products, 'category');
	const companyData = getUniqueData(all_products, 'company');

	// useEffect(() => {
	// 	dispatch(renderFilterProducts());
	// }, [category, dispatch]);

	useEffect(() => {
		dispatch(renderFilterProducts());
	}, [searchText, category, dispatch]);

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

				<form action="#">
					<select
						name="company"
						id="company"
						className="filter-company--select"
						onClick={updateFilterValue}
					>
						{companyData.map((curElem, index) => {
							return (
								<option key={index} value={curElem} name="company">
									{curElem}
								</option>
							);
						})}
					</select>
				</form>
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
