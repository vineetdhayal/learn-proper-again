import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
    name: 'payments',
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {
        initiatePayment: (state) => {
            state.loading = true;
        },
        paymentSuccess: (state) => {
            state.loading = false;
            state.success = true;
        },
        paymentFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { initiatePayment, paymentSuccess, paymentFailure } = paymentSlice.actions;
export default paymentSlice.reducer;
