import { call, put, takeLatest } from 'redux-saga/effects';
import { loadStripe } from '@stripe/stripe-js';
import { initiatePayment, paymentSuccess, paymentFailure } from './paymentSlice';

const stripePromise = loadStripe('your-publishable-key-here');

function* handlePaymentSaga(action): any {
  try {
    const stripe = yield stripePromise;
    const { paymentMethodId, amount } = action.payload;

    // Call your server to create a payment intent
    const response = yield call(fetch, 'https://api.example.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentMethodId, amount }),
    });

    const paymentIntent = yield response.json();

    const result = yield stripe.confirmCardPayment(paymentIntent.client_secret);
    if (result.error) {
      throw new Error(result.error.message);
    } else {
      yield put(paymentSuccess());
    }
  } catch (error) {
    yield put(paymentFailure(error.message));
  }
}

export function* watchHandlePayment() {
  yield takeLatest(initiatePayment.type, handlePaymentSaga);
}
