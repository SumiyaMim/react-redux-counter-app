// step 3: create reducers - increment -> count => count + 1, decrement -> count => count - 1, reset -> count => 0

import { DECREMENT, INCREMENT, RESET } from "./constants"

const initialState = { count: 0 }

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + 1
        }
      case RESET:
        return {
          ...state,
          count: 0
        }
      case DECREMENT:
        return {
          ...state,
          count: state.count - 1
        }

      default:
        return state;
    }
}

export default counterReducer;
