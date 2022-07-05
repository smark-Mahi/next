import {createSlice} from '@reduxjs/toolkit';


const initialStateValue=[{
       
    }]
;

export const comeslice=createSlice({
    name:"form",
    initialState:{value:initialStateValue},
    reducers:{
      addfields:(state,action)=>{
           state.value.push(action.payload)
        },

       deletefields:(state,action)=>{
           state.value=state.value.filter((user)=>user.id!==action.payload.id)
           
       } 
    },
});

export const {addfields,deletefields}=comeslice.actions;
export default comeslice.reducer;