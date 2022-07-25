import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES, CATEGORY_PAGE } from "../../constants";
import { Api } from "../../api/Api";

const api = new Api();

export const fetchCategoryPage = createAsyncThunk(`${CATEGORY_PAGE}/fetchCategoryPage`, api.getGoodsByCategoryId)

export const { reducer } = createSlice({
    name: CATEGORY_PAGE,
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: {},
    extraReducers: {
        [fetchCategoryPage.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [fetchCategoryPage.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload.items;
        },
        [fetchCategoryPage.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});