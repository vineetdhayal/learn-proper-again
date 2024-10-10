import { createSlice } from "@reduxjs/toolkit";

export const cartStore = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
    },
    reducers: {
        addTocart() { },
        removeFromCart() { }
    }
})

export const cartAction = cartStore.actions;
