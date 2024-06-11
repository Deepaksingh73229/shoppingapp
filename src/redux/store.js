import { configureStore } from "@reduxjs/toolkit";
import ShoppingSlice from "./ShoppingSlice";

const store = configureStore({
    reducer : {
        ShoppingApp : ShoppingSlice
    }
})

export default store