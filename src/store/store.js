import {createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk"
import reducers from "./reducers"
const store = createStore(combineReducers(reducers),applyMiddleware(thunk))
window.store = store;
export default store