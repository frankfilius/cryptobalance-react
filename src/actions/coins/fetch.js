import request from 'superagent'

export const FETCHED_COINS = 'FETCHED_COINS'
export const LOAD_ERROR = 'LOAD_ERROR'

const COIN_API = 'https://api.coinmarketcap.com/v1/ticker/?limit=100'

export default () => {
  return (dispatch) => {
    request.get(COIN_API)
    .then(res => {
      dispatch({
        type: FETCHED_COINS,
        payload: res.body
      })
    })
    .catch(error => {
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
  }
}