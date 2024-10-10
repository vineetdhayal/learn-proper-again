import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth-store";
import { cartStore } from "./cart-store";

const store = configureStore({
    reducer: { auth: authSlice.reducer, cart: cartStore.reducer }
})

export default store;
