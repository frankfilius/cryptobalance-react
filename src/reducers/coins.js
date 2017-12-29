import {FETCHED_COINS} from '../sagas'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_COINS :
      return [...payload]

    default :
      return state
  }
}