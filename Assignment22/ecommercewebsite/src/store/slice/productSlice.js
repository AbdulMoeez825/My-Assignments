import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
		const response = await fetch('https://fakestoreapi.com/products');
		const data = await response.json();
		return data;
	}
);

const productSlice = createSlice({
	name : "product",
	initialState : {
		products : []
	},
	reducers:{
		setProducts: (state, action) => {
			state.products = action.payload
		},

	},
	
});

export const {setProducts} = productSlice.actions

export default productSlice.reducer;