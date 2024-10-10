import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        items: [],
        loading: false,
        error: null as any
    },
    reducers: {
        fetchProductStart(state) {
            state.loading = true;
        },
        fetchProductSuccess(state, action) {
            state.loading = false;
            state.items = action.payload;
        },
        fetchProductFailure(state) {
            state.loading = false;
            state.error = 'error';
        }
    }
})

export const { fetchProductStart, fetchProductSuccess, fetchProductFailure } = productSlice.actions;
export default productSlice.reducer;
