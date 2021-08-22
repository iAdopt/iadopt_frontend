import {createStore, applyMiddleware} from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {}, //default state
    applyMiddleware(thunk) //fix async dispatch
);
