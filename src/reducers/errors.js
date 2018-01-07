import { LOAD_ERROR } from '../sagas'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case LOAD_ERROR :
      return payload
      
    default :
      return state
  }
}