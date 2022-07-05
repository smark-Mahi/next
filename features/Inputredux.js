import {createSlice} from '@reduxjs/toolkit';


const initialStateValue='';

export const inputslice=createSlice({
    name:"counter",
    initialState:{value:initialStateValue},
    reducers:{
        increment:(state,action)=>{
            state.value =action.payload;
        },
    },
});

export const {increment}=inputslice.actions;
export default inputslice.reducer;