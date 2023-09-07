import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name: "movies",
    initialState:{
      MovieList:null,
      Trailer:null
    },
    reducers:{
        addMovies:(state,action)=>{
             state.MovieList=action.payload;
        },
        addTailer:(state,action)=>{
        state.Trailer=action.payload;
        }
    }
})

export const {addMovies,addTailer} =movieSlice.actions;
export default movieSlice.reducer;
