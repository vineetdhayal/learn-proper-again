import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchProductFailure, fetchProductSuccess, fetchProductStart } from './productSlice';

function* fetchProductSaga(): any {
    try {
        const data: any = yield fetch('https://api.example.com/products');
        const result = yield data.json();
        yield put(fetchProductSuccess(result));
    }
    catch (err: any) {
        yield put(fetchProductFailure(err.message));
    }
}

function* watchFetchProducts() {
    yield takeLatest(fetchProductStart.type, fetchProductSaga);
}