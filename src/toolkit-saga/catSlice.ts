import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: 'catSlice',
    initialState: {
        loading: false,
        cats: []
    },
    reducers: {
        getCatsfetch: (state) => {
            console.log('called');
            state.loading = true;
        },
        getCatsSuccess: (state, action) => {
            state.cats = action.payload
            state.loading = false
        },
        getCatsFailure: (state) => {
            state.loading = false;
        }
    }
});

export const { getCatsFailure, getCatsfetch, getCatsSuccess } = catSlice.actions;

const reducer = catSlice.reducer;

export default reducer;
