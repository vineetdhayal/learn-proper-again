import { configureStore, createSlice } from "@reduxjs/toolkit";
import { completeCart } from "./reducer";

export const dataStore = createSlice({
    name: 'dataStore',
    initialState: [{ name: 'first' }],
    reducers: {
        addData(state: any, data: any) {
            state.push(data.payload);
        },
        removeData(state: any, data: any) {
            state.splice(1);
        },
        reset(state: any) {
            state = [{ name: 'first' }]
        }
    }
})

export const actions = dataStore.actions;
