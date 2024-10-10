import { configureStore, createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment(state) {
            debugger;
            state.counter = state.counter + 1;
        },
        decrement(state) {
            state.counter = state.counter - 1;
        },
        add(state, action) {
           state.counter = state.counter + action.payload;
        }
    }
});

export const actions = counter.actions;
export const store = configureStore({reducer: counter.reducer});
