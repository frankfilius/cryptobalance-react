import { FETCHED_MY_COINS, SAVED_COIN } from '../sagas'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_MY_COINS :
      return [...payload]

    case SAVED_COIN :
      return [payload, ...state]

    default :
      return state
  }
}