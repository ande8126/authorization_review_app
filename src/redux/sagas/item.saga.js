import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_INVENTORY" actions
function* fetchInventory() {
  try {
    console.log( 'in fetchInventory' );
    const response = yield axios.get(' /api/inventory' );

    yield put({ type: 'SET_INVENTORY', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* itemSaga() {
  yield takeLatest('FETCH_INVENTORY', fetchInventory);
}

export default itemSaga;