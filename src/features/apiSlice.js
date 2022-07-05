import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRandomAPI, fetchAPICategories, fetchAllAPIs, fetchCategory } from "../utils/utils";

export const fetchRandom = createAsyncThunk('api/fetchRandom', async () => {
    const res = await fetchRandomAPI();
    return res.entries[0];
});

export const fetchDaily = createAsyncThunk('api/fetchDaily', async () => {
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

export const fetchAPICategory = createAsyncThunk('api/fetchAPICategory', async (category) => {
    const res = await fetchCategory(category);
    return res.entries;
});

const initialState = {
    allApis: [],
    sortedAPIs: [],
    categories: [],
    randomApi: [],
    dailyApi: [],
    isLoading: false,
    dailyfetched: false,
};

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchAll.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchAll.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.allApis = action.payload;
        },
        [fetchAPICategory.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchAPICategory.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.sortedAPIs = action.payload;
        },
        [fetchCategories.pending]: (state) => {
            state.isLoading = true;
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
        },
        [fetchDaily.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchDaily.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.dailyfetched = true;
            state.dailyApi = action.payload;
        }
    }
});

export const selectAllAPIs = (state) => state.api.allApis;
export const selectSortedAPIs = (state) => state.api.sortedAPIs;
export const selectRandomApi = (state) => state.api.randomApi;
export const selectDailyApi = (state) => state.api.dailyApi;
export const selectCategories = (state) => state.api.categories;
export const isDailyFetched = (state) => state.api.dailyfetched;
export const isLoading = (state) => state.api.isLoading;
export default apiSlice.reducer; 