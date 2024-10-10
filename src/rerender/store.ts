import { configureStore } from "@reduxjs/toolkit";
import formreducer from "./reducerSlice";

export const store = configureStore({
    reducer: formreducer
})