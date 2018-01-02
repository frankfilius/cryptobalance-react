import { FETCHED_MY_COINS, SAVED_COIN, DELETED_COIN } from '../sagas'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_MY_COINS :
      return [...payload]

    case SAVED_COIN :
      return [payload, ...state]

    case DELETED_COIN :
    return state.filter((coin) => (coin._id !== payload._id))

    default :
      return state
  }
}