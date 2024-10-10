import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('quote/getData', async () => {
    const data = await fetch('https://dummyjson.com/products');
    const res = await data.json();
    return res;
})

const slice = createSlice({
    name: 'quote',
    initialState: {
        quote: null,
        status: "idle",
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(getData.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(getData.fulfilled, (state, action) => {
            state.quote = action.payload;
        })
        builder.addCase(getData.rejected, (state) => {
            state.error = 'error'
        })
    }
})

const reducer = slice.reducer;

export default reducer;
