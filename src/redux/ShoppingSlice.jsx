import { createSlice } from "@reduxjs/toolkit";

export const ShoppingSlice = createSlice({
    name: "ShoppingApp",
    initialState: [],
    
    reducers : {
        clickAdd : (state, action) => {
            state.push(action.payload)
        },
        
        clickRemove : (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const {clickAdd, clickRemove} = ShoppingSlice.actions
export default ShoppingSlice.reducer