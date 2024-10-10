import { createSlice } from "@reduxjs/toolkit";

const store = createSlice({
    name: 'formSlice',
    initialState: { name: ' vineet', country: 'india' },
    reducers: {
        onNameChange(state: any, name: string) {
            console.log(state, name);
            state.name = name;
        },
        onDiscountChange(state: any, discount: any) {
            state.discount = discount;
        },
        onCountryChange(state: any, country: any) {
            state.country = country;
        }
    }
});

export const { onCountryChange, onDiscountChange, onNameChange } = store.actions;
const formreducer = store.reducer;
export default formreducer;
