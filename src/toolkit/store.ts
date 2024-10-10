import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './userDataSlice';


export default configureStore({
    reducer: { quote: reducer }
})
