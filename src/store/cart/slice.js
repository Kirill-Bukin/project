import { createSlice } from "@reduxjs/toolkit";
import { CART } from "../../constants";

export const cartSlice = createSlice({
    name: CART,
    initialState:{
        itemsInCart: []
    },
    reducers: {
        addItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload)
        }
    }
});

export const { addItemInCart, deleteItemFromCart } = cartSlice.actions;
export const cartReduser =  cartSlice.reducer;