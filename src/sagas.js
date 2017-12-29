import { call, put, takeEvery } from 'redux-saga/effects'
export const FETCHED_COINS = 'FETCHED_COINS'

const fetchCoins = url => fetch(url).then(res => res.json())

export function* fetchData() {
  try {
    const data = yield call(fetchCoins, 'https://api.coinmarketcap.com/v1/ticker/?limit=100')
    yield put({type: "FETCHED_COINS", payload: data})
  } catch (error) {
     yield put({type: "LOAD_ERROR", payload: error.message})
  }
}

// use them in parallel
export default function* rootSaga() {
  yield takeEvery('FETCH_COINS', fetchData)
}