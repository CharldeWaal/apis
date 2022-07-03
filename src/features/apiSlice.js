import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRandomAPI } from "../utils/utils";

export const fetchRandom = createAsyncThunk('api/fetchRandom', async () => {
    const res = await fetchRandomAPI();
    return res.entries[0];
});

const initialState = {
    randomApi: [],
    isLoading: false
};

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: {
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
export const isLoading = (state) => state.api.isLoading;
export default apiSlice.reducer; 