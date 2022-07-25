import { Api } from '../../api/Api'
import { CATEGORIES, LOAD_STATUSES } from "../../constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api = new Api();

export const getFetchCategories = createAsyncThunk(`categories/getFetchCategories`, api.getCategories);

export const {reducer} = createSlice ({
    name: CATEGORIES,
    initialState: {
        categories: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: {},
    extraReducers: {
        [getFetchCategories.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [getFetchCategories.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.categories = action.payload.categories;
        },
        [getFetchCategories.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});