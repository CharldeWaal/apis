import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRandomAPI, fetchAPICategories, fetchAllAPIs } from "../utils/utils";

export const fetchRandom = createAsyncThunk('api/fetchRandom', async () => {
    const res = await fetchRandomAPI();
    return res.entries[0];
});

export const fetchCategories = createAsyncThunk('api/fetchCategories', async () => {
    const res = await fetchAPICategories();
    return res.categories;
});

export const fetchAll = createAsyncThunk('api/fetchAll', async () => {
    const res = await fetchAllAPIs();
    return res.entries;
});

const initialState = {
    allApis: [],
    categories: [],
    randomApi: [],
    isLoading: false
};

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategories.pending]: (state) => {
            state.isLoading = false;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
        },
        [fetchRandom.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchRandom.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.randomApi = action.payload;
        }
    }
});

export const selectRandomApi = (state) => state.api.randomApi;
export const selectCategories = (state) => state.api.categories;
export const isLoading = (state) => state.api.isLoading;
export default apiSlice.reducer; 