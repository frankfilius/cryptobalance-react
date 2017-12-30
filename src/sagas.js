import { call, put, take, takeEvery } from 'redux-saga/effects'
export const FETCHED_COINS = 'FETCHED_COINS'
export const FETCHED_MY_COINS = 'FETCHED_MY_COINS'
export const SAVED_COIN = 'SAVED_COIN'

const fetchUrl = (url, config = {}) => fetch(url, config).then(res => res.json())

const host = process.env.NODE_ENV === 'production'
      ? 'https://cryptobalance-api.herokuapp.com'
      : 'http://localhost:3030'

export function* fetchCoins() {
  try {
    const data = yield call(fetchUrl, 'https://api.coinmarketcap.com/v1/ticker/?limit=100')
    yield put({type: "FETCHED_COINS", payload: data})
  } catch (error) {
     yield put({type: "LOAD_ERROR", payload: error.message})
  }
}

export function* fetchMyCoins() {
  try {
    const data = yield call(fetchUrl, [host, '/coins'].join(''))
    yield put({type: "FETCHED_MY_COINS", payload: data})
  } catch (error) {
     yield put({type: "LOAD_ERROR", payload: error.message})
  }
}

export function* saveData(action) {
  var myHeaders = new Headers({
    "Content-type": "application/json"
  })
  try {
    const data = yield call(fetchUrl, [host, '/coins'].join(''), { method: 'POST', headers: myHeaders, body: JSON.stringify(action.payload),  mode: 'no-cors' })
    yield put({type: "SAVED_COIN", payload: data})
  } catch (error) {
     yield put({type: "LOAD_ERROR", payload: error.message})
  }
}

// use them in parallel
export default function* rootSaga() {
  yield takeEvery('FETCH_COINS', fetchCoins)
  yield takeEvery('FETCH_MY_COINS', fetchMyCoins)
  yield takeEvery('SAVE_COINS', saveData)
}