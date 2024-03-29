import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as categoriesReducers } from './categories/slice';
import { reducer as popularCategoriesReducer } from './popularCategories/slice';
import { reducer as goodReducer } from "./good/slice";
import { reducer as productPageReducer } from "./productPage/slice";
import { reducer as categoryPageReducer } from "./categoryPage/slice";
import { cartSlice } from "./cart/slice";

const rootReducer = combineReducers({
    categories: categoriesReducers,
    category: popularCategoriesReducer,
    good: goodReducer,
    productPage: productPageReducer,
    categoryPage: categoryPageReducer,
    cart: cartSlice,
});
export const store = configureStore({
    reducer: rootReducer,
    
});