import { createSlice } from "@reduxjs/toolkit";

const GPTSlice=createSlice({
    name: 'GPT',
    initialState:{
        GPTSearchButton:false,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
        ChangeGPTButtonState:(state,action)=>{
          state.GPTSearchButton= !state.GPTSearchButton;//i.e if true then false and if false then true
        },
        // addGptMovieResult: (state, action) => {
        //     const { movieNames, movieResults } = action.payload;
        //     state.movieNames = movieNames;
        //     state.movieResults = movieResults;
        //   },
        
    }
});
export const {ChangeGPTButtonState} =GPTSlice.actions;
export default GPTSlice.reducer;