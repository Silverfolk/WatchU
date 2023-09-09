import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name: 'GPT',
    initialState:{
        GPTSearchButton:false
    },
    reducers:{
        ChangeGPTButtonState:(state,action)=>{
          state.GPTSearchButton= !state.GPTSearchButton;//i.e if true then false and if false then true
        }
        
    }
});
export const {ChangeGPTButtonState} =GPTSlice.actions;
export default GPTSlice.reducer;