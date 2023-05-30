// step 4: create store
// npm install redux

import { createStore } from "redux";
import counterReducer from "./services/reducers";

const store = createStore(counterReducer)

export default store