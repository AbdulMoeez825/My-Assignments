import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slice/productSlice'

export const store = configureStore({
	reducer: {
    // Define your slices here
    // Example: counter: counterReducer
	product:productReducer,
  },
  
})