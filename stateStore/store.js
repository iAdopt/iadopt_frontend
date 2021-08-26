import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {}, //default state
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk) //fix async dispatch

);
