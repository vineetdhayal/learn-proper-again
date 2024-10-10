import { takeEvery } from "redux-saga/effects";

function* productSaga() {
yield takeEvery(getProducts);
}

export default productSaga;