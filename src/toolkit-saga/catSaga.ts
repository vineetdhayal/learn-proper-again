import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {getCatsSuccess} from './catSlice';

function* getCatFetch(): any {
    const cats: any = yield fetch('https://dummyjson.com/products');
    const formattedCats: any = yield cats.json();

    console.log(formattedCats);
    yield put(getCatsSuccess(formattedCats));
}

function* catSaga() {
    yield takeLatest('catSlice/getCatsfetch', getCatFetch);
}

export default catSaga;
