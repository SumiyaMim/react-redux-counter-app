// step 2: create actions
// action - increment, decrement, reset

import { DECREMENT, INCREMENT, RESET } from "./constants"

export const incrementCounter = () => {
    return {
      type: INCREMENT,
    }
}
export const resetCounter = () => {
    return {
      type: RESET,
    }
}

export const decrementCounter = () => {
    return {
      type: DECREMENT,
    }
}