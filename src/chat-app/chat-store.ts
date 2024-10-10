import { createSlice } from "@reduxjs/toolkit";

export const chatStore = createSlice({
    name: 'Chat',
    initialState: [],
    reducers: {
        addmessage(state: any, action: any) {
            console.log(
                action
            );
             state.push(
                {
                    id: state.length ? state[state.length - 1].id + 1 : 1,
                    message: action.payload.message,
                    author: action.payload.author
                }
            )

            console.log(state);
        },
        addUser() { },
        messagerecieved() { },

    }
})

export const actions = chatStore.actions;
