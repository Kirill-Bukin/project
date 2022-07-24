import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES, GOODS } from "../../constants";
import { Api } from "../../api/Api";

const api = new Api();

export const getFetchGoods = createAsyncThunk(`${GOODS}/getFetchGoods`, api.getGoods);

export const { reducer } = createSlice({
    name: GOODS,
    initialState: {
        goods: [],
        loadStatus: LOAD_STATUSES.UNKNOWN,
    },
    reducers: { },
    extraReducers: {
        [getFetchGoods.pending]: (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING;
        },
        [getFetchGoods.fulfilled]: (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.goods = action.payload.goods;
        },
        [getFetchGoods.rejected]: (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR;
        },
    }
});