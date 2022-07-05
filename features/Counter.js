import {createSlice} from '@reduxjs/toolkit';


const initialStateValue={
    count: 0
};

export const comeslice=createSlice({
    name:"come",
    initialState:{value:initialStateValue},
    reducers:{
      increase:(state,action)=>{
            state.value =action.payload;
        },
    },
});

export const {increase}=comeslice.actions;
export default comeslice.reducer;