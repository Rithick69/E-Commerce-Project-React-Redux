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
		},
	},
	reducers: {
		loadFilterProds(state, action) {
			let { products } = action.payload;
			state.filter_products = [...products];
			state.all_products = [...products];
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
		renderFilterProducts(state) {
			let { searchText, category, company, color } = state.filters;
			let tempArr = [...state.all_products];
			tempArr = tempArr.filter((item) => {
				if (searchText) {
					return item.name.toLowerCase().includes(searchText);
				}
				if (category.toLowerCase() !== 'all') {
					return item.category === category;
				}

				if (company.toLowerCase() !== 'all') {
					return item.company.toLowerCase() === company.toLowerCase();
				}

				if (color.toLowerCase() !== 'all') {
					return item.colors.includes(color);
				}
				return item;
			});

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
} = filterSlice.actions;

export default filterSlice.reducer;
