import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import productReducer from "../Redux/Productslice"
const store = configureStore({
    reducer:{
        cart:cartReducer,
        product:productReducer,
    }
})

export default store;