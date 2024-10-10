import { configureStore, createStore } from '@reduxjs/toolkit';
import rootreducer from './rootreducer';
import createSagaMiddleware from 'redux-saga';
import productSaga from './productSaga';
import { cartData } from './reducer';

// const middle = createSagaMiddleware();

// const store = configureStore({ reducer: rootreducer, middleware: () => [middle] });
// middle.run(productSaga);

const store = createStore(cartData);

export default store;
