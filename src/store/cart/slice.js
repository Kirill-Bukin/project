import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'cart',
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
export default cartSlice.reducer;