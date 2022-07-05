import { configureStore,combineReducers } from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper'


import counter from './Inputredux'
import come from './Counter'
import form from './Forms'

const combinedReducers=combineReducers({
    counter,
    come,
    form
});

export const makestore=()=>
configureStore({
   reducer: combinedReducers,
});
export const wrapper=createWrapper(makestore)
