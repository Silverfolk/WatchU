import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name: "movies",
    initialState:{
      MovieList:null,
      PopularMovieList:null,
      TopRatedMovieList:null,
      UpcomingMovieList:null,
      Trailer:null
    },
    reducers:{
        addMovies:(state,action)=>{
             state.MovieList=action.payload;
        },
        addPopularMovieList:(state,action)=>{
           state.PopularMovieList=action.payload;
        },
        addTopRatedMovieList:(state,action)=>{
          state.TopRatedMovieList=action.payload;
       },
       addUpcomingMovieList:(state,action)=>{
        state.UpcomingMovieList=action.payload;
     },
        addTailer:(state,action)=>{
        state.Trailer=action.payload;
        }
    }
})

export const {addMovies,addTailer,addPopularMovieList,addUpcomingMovieList,addTopRatedMovieList} =movieSlice.actions;
export default movieSlice.reducer;
