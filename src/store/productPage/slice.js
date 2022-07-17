import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES, PRODUCT_PAGE } from "../../constants";
import { Api } from '../../api/Api'
const api = new Api();

export const fetchProductPage = createAsyncThunk(`${PRODUCT_PAGE}/fetchProductPage`, async (id) => {
    const productPage = await api.getGoodById(id);
    return productPage
})


export const { reducer } = createSlice({
    name: PRODUCT_PAGE,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: {},
    extraReducers: {
        [fetchProductPage.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [fetchProductPage.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload.items;
        },
        [fetchProductPage.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});