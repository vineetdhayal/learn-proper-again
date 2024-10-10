import { configureStore } from "@reduxjs/toolkit";
import reducer from "./catSlice";
import createSagaMiddleware from "redux-saga";
import catSaga from './catSaga';

const saga: any = createSagaMiddleware();

export default configureStore({
    reducer: { cats: reducer },
    middleware: () => [saga] as any
})

saga.run(catSaga);
