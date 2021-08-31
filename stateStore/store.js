import {createStore, applyMiddleware, compose} from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk";
import dynamic from "next/dynamic";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMOSE__ || compose; //not working due to server rendering use dynamic
export const store = createStore(
    reducers,
    {}, //default state
    applyMiddleware(thunk) //fix async 
);