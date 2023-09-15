import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		filter_products: [],
		all_products: [],
		grid_view: true,
		sorting_val: 'lowest',
		filters: {
			searchText: '',
			category: 'all',
			company: 'all',
			color: 'all',
			price: 0,
			maxPrice: 0,
			minPrice: 0,
		},
	},
	reducers: {
		loadFilterProds(state, action) {
			let { products } = action.payload;
			state.filter_products = [...products];
			state.all_products = [...products];
			let prices = products.map((curr) => curr.price);
			let max = Math.max(...prices);
			state.filters.maxPrice = max;
			state.filters.price = max;
		},
		setView(state, action) {
			state.grid_view = action.payload.grid_view;
		},
		getSortVal(state, action) {
			state.sorting_val = action.payload.sortVal;
		},
		sortingProducts(state) {
			let newSortData;
			let tempArray = [...state.filter_products];

			newSortData = tempArray.sort((a, b) => {
				switch (state.sorting_val) {
					case 'a-z':
						return a.name.localeCompare(b.name);

					case 'z-a':
						return b.name.localeCompare(a.name);

					case 'highest':
						return b.price - a.price;

					default:
						return a.price - b.price;
				}
			});
			state.filter_products = newSortData;
		},
		updateFilter(state, action) {
			let { name, value } = action.payload;
			let newFilters = { ...state.filters, [name]: value };
			state.filters = newFilters;
		},
		clearFiltersRed(state) {
			state.filters = {
				...state.filters,
				searchText: '',
				category: 'all',
				company: 'all',
				color: 'all',
				maxprice: 0,
				price: state.filters.maxPrice,
				minPrice: 0,
			};
		},
		renderFilterProducts(state) {
			let { searchText, category, company, color, price } = state.filters;
			let tempArr = [...state.all_products];
			if (searchText) {
				tempArr = tempArr.filter((item) => {
					return item.name.toLowerCase().includes(searchText);
				});
			}
			if (category.toLowerCase() !== 'all') {
				tempArr = tempArr.filter((item) => {
					return item.category === category;
				});
			}

			if (company.toLowerCase() !== 'all') {
				tempArr = tempArr.filter((item) => {
					return item.company.toLowerCase() === company.toLowerCase();
				});
			}

			if (color.toLowerCase() !== 'all') {
				tempArr = tempArr.filter((item) => {
					return item.colors.includes(color);
				});
			}

			if (price) {
				tempArr = tempArr.filter((item) => {
					return item.price <= Number(price);
				});
			}

			state.filter_products = tempArr;
		},
	},
});

export const {
	loadFilterProds,
	setView,
	getSortVal,
	sortingProducts,
	updateFilter,
	renderFilterProducts,
	clearFiltersRed,
} = filterSlice.actions;

export default filterSlice.reducer;
